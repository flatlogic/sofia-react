const { test, expect } = require('@playwright/test');

test('backend login, user controls, markdown preview, charts, calendar, vector map and logout work', async ({ page }) => {
  test.setTimeout(90000);
  const errors = [];
  page.on('pageerror', error => { errors.push(error.message); console.error(error); });
  const user = { id: 'test-admin', firstName: 'Ada', lastName: 'Lovelace', email: 'admin@example.test', role: 'admin', disabled: false, avatars: [], avatar: [], phoneNumber: '5551234567' };
  let users = [user, ...Array.from({ length: 11 }, (_, i) => ({ ...user, id: `user-${i}`, firstName: `User ${String(i).padStart(2, '0')}`, email: `user${i}@example.test`, role: 'user' }))];
  const token = [Buffer.from('{"alg":"HS256","typ":"JWT"}').toString('base64url'), Buffer.from(JSON.stringify({ user, exp: Math.floor(Date.now()/1000)+3600 })).toString('base64url'), 'fixture-signature'].join('.');
  await page.route(url => url.pathname.startsWith('/api/'), async route => {
    const request = route.request(); const path = new URL(request.url()).pathname;
    let data;
    if (path === '/api/auth/signin/local') data = token;
    else if (path === '/api/auth/me') data = user;
    else if (path === '/api/users') data = { rows: users, count: users.length };
    else if (path === '/api/users/test-admin') data = user;
    else throw new Error(`Unexpected API ${request.method()} ${path}`);
    await route.fulfill({ json: data });
  });
  await page.goto('/');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await expect(page).toHaveURL(/#\/template\/dashboard$/);
  await expect(page.locator('.apexcharts-svg').first()).toBeVisible();
  await page.goto('/#/admin/users');
  await expect(page.getByRole('table')).toContainText(user.email);
  await page.getByLabel('Search users').fill('Ada');
  await expect(page.locator('tbody tr')).toHaveCount(1);
  await page.getByRole('button', { name: 'View', exact: true }).click();
  await expect(page.getByText('User View', { exact: true })).toBeVisible();
  await expect(page.locator('input[readonly][value="admin@example.test"]')).toBeVisible();
  await page.goBack();
  await page.getByLabel('Search users').fill('');
  await page.getByRole('columnheader', { name: /^First Name/ }).click();
  await expect(page.locator('tbody tr').first()).toContainText('User 10');
  await page.getByRole('columnheader', { name: /^First Name/ }).click();
  await expect(page.locator('tbody tr').first()).toContainText('Ada');
  await page.getByRole('link', { name: '2', exact: true }).click();
  await expect(page.locator('tbody tr')).toHaveCount(2);

  await page.goto('/#/template/forms/elements');
  const markdown = page.locator('.mde-text');
  await markdown.fill('# Regression preview\n\n**Bold text**\n\n| A | B |\n|---|---|\n| 1 | 2 |\n\n- [x] Task\n\n<img src=x onerror="throw new Error(\'unsafe markdown\')">\n<script>throw new Error("unsafe script")</script>');
  await page.getByRole('button', { name: 'Preview', exact: true }).click();
  await expect(page.locator('.mde-preview h1')).toHaveText('Regression preview');
  await expect(page.locator('.mde-preview strong')).toHaveText('Bold text');
  await expect(page.locator('.mde-preview table')).toBeVisible();
  await expect(page.locator('.mde-preview input[type="checkbox"]')).toBeChecked();
  await expect(page.locator('.mde-preview script, .mde-preview [onerror]')).toHaveCount(0);
  await page.goto('/#/template/charts/bar');
  await expect(page.locator('.apexcharts-bar-area').first()).toBeVisible();
  await page.getByText('Recharts', { exact: true }).click();
  await expect(page.locator('.recharts-bar-rectangle path').first()).toBeVisible();
  await page.getByText('Highcharts', { exact: true }).click();
  await expect(page.locator('.highcharts-series path').first()).toBeVisible();
  await page.goto('/#/template/calendar');
  await expect(page.locator('.fc-daygrid-day').first()).toBeVisible();
  await page.goto('/#/template/maps/vector');
  await expect(page.locator('#chartdiv svg').first()).toBeVisible();
  await expect(page.locator('#chartdiv svg path').nth(20)).toBeVisible();
  // amCharts animates opacity on SVG ancestors; wait for actual colored countries.
  await expect.poll(() => page.locator('#chartdiv svg path').evaluateAll(paths => paths.filter(path => {
    const color = getComputedStyle(path).fill;
    let opacity = 1;
    for (let element = path; element; element = element.parentElement) {
      opacity *= Number(getComputedStyle(element).opacity);
    }
    return (path.getAttribute('d') || '').length > 150 && color !== 'none' && color !== 'rgb(255, 255, 255)' && opacity > 0.95;
  }).length), { timeout: 10000 }).toBeGreaterThan(20);
  await page.screenshot({ path: 'test-results/sofia-map.png' });
  await page.getByText('Christina Carey', { exact: true }).click();
  await page.getByRole('button', { name: /Logout/ }).click();
  await expect(page.getByRole('button', { name: 'Login', exact: true })).toBeVisible();
  expect(errors).toEqual([]);
});
