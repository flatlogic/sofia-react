import { defineConfig, loadEnv, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: './',
  // FullCalendar 5's React VDOM initializer must execute before its plugins.
  optimizeDeps: { rolldownOptions: { moduleTypes: { '.js': 'jsx' } }, exclude: ['@fullcalendar/react', '@fullcalendar/common', '@fullcalendar/daygrid', '@fullcalendar/timegrid', '@fullcalendar/interaction', '@fullcalendar/list'] },
  resolve: { alias: { events: 'events/' } },
  plugins: [
    {
      name: 'source-jsx',
      enforce: 'pre',
      async transform(code, id) {
        if (/\/src\/.*\.js$/.test(id)) {
          return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'automatic' });
        }
      },
    },
    react(),
  ],
  define: { global: 'globalThis', 'process.env': JSON.stringify({ ...loadEnv(mode, process.cwd(), 'REACT_APP_'), NODE_ENV: mode, PUBLIC_URL: '' }) },
  build: { outDir: 'build' },
}));
