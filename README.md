# 🚀 Sofia React - A Free React Admin Dashboard Template!

[View Demo](https://flatlogic.com/templates/sofia-react-full/demo) | [Download](https://github.com/flatlogic/sofia-react/archive/refs/heads/master.zip) | [More Templates](https://flatlogic.com/templates) | [Discord Community](https://discord.gg/flatlogic-community) | [Support Forum](https://flatlogic.com/forum)

**Originally a premium product priced at $69+, made available for free in January 2025!** 🎉

[![image](https://user-images.githubusercontent.com/63450826/133580196-fe2ec804-ae11-49cc-9616-3690785463a0.png)](https://flatlogic.com/templates/sofia-react-full/demo)

Looking for a perfect codebase generator for your Startup? Try [Flatlogic AI Web App Generator](https://flatlogic.com/generator) - our new tool, sort of a template++.

---

## 🎯 Why Sofia React?
- **Ex-Premium**: This template was previously paid. Enjoy it for free now. 😉
- **React + Bootstrap + Material-UI**: A powerful combination for building modern web apps.
- **Join the Community**: [Flatlogic Discord](https://discord.gg/flatlogic-community) is where the action happens.
- **Free Node.js Backend**: Pair it up with [this backend](https://github.com/flatlogic/nodejs-backend) to go full-stack.

---

## 🚀 Quick Start

1. **Clone the repo**  
   ```bash
   git clone https://github.com/flatlogic/sofia-react.git
   cd sofia-react
   ```
2. **Install dependencies with Node.js 22.12 or newer**
   ```sh
   npm ci --legacy-peer-deps
   ```
   The explicit flag retains the existing React 18/Router 5 and legacy form-library peer constraints; no global bypass is configured. `package-lock.json` is the canonical dependency graph. The superseded Yarn lock is removed after clean installation and full runtime/development audit verification.

3. **Run the app**
   ```sh
   npm start
   npm run start:backend
   ```
   Vite serves http://127.0.0.1:5173. The first command keeps demo mode, and the second enables the existing backend integration and endpoints in `src/config.js`.

4. **Build and verify**
   ```sh
   npm run build
   npm run preview
   npm audit
   npm test
   PLAYWRIGHT_DEV=1 npm test
   ```
   The production build is written to `build/`. Tests use locally installed Google Chrome and API fixtures in production preview and backend development mode. They check authentication, user-table search/sort/pagination/view, Markdown tables/task lists with sanitized HTML preview, actual chart output, calendar, vector map and logout, and fail on browser page errors. JWT unit regressions preserve the old decoder's malformed-token/null contract. Live backend/OAuth/external Google Maps are not exercised. Existing React/MUI/Sass component/deprecation warnings remain.

   React 18, Router 5, Redux, forms, SCSS and assets are retained. The vulnerable CRA build graph is replaced by Vite. Unmaintained Showdown is replaced with markdown-it and task-list support, with DOMPurify applied at the preview boundary. ApexCharts 3 keeps its compatible exact React adapter 1.5.0, and Highcharts uses its current color factory.

5. **Docker support**
   ```sh
   docker build -t sofia-react .
   docker run -p 3000:3000 -d sofia-react
   ```
   The development container uses Node 22, the npm lockfile and backend mode, and binds its Vite server to port 3000. Docker execution requires a locally installed Docker engine.

---

## 🧩 Features

- Fully Responsive Layout
- React 18
- Bootstrap 4.6
- Material-UI Components
- React Hooks
- Redux for State Management
- Authentication Pages
- Numerous Chart Libraries
- Static Sidebar

---

## 🛠 Built With
- React 18
- Bootstrap 4.6
- Material-UI
- Redux
- Webpack
- JavaScript (ES6)

---

## 📦 Pages
- Dashboard
- User Management (Profile, Edit Profile, Change Password)
- E-Commerce (Product Grid, Product Page, Management)
- Forms (Validation, Wizard)
- Charts (Bar, Line, Pie, Mixed)
- Tables (Basic, Material-UI Tables)
- Maps (Google, Vector)
- Icons
- Notifications
- Login / Register / Error Pages

---

## 🌍 Available Variants

|               | **Material**                                              | **Transparent**                                         | **Classic**                                          | **Sofia**                                          | **Flatlogic**                                      |
|---------------|-----------------------------------------------------------|---------------------------------------------------------|-------------------------------------------------------|-----------------------------------------------------|----------------------------------------------------|
| **React**     | [React Material Admin](https://github.com/flatlogic/react-material-admin-full) | [Light Blue React](https://github.com/flatlogic/light-blue-react) | [Sing App React](https://github.com/flatlogic/sing-app-react) | [Sofia React](https://github.com/flatlogic/sofia-react) | [One React](https://github.com/flatlogic/one-react) |
| **Angular**   | [Angular Material Admin](https://github.com/flatlogic/angular-material-admin-full) | [Light Blue Angular](https://github.com/flatlogic/light-blue-angular) | [Sing App Angular](https://github.com/flatlogic/sing-app-angular) | - | - |
| **Vue**       | [Material Vue](https://github.com/flatlogic/material-vue-full) | [Light Blue Vue](https://github.com/flatlogic/light-blue-vue) | [Sing App Vue](https://github.com/flatlogic/sing-app-vue) | - | - |
| **Bootstrap** | - | [Light Blue HTML5](https://github.com/flatlogic/light-blue-html5) | [Sing App HTML5](https://github.com/flatlogic/sing-app-html5) | - | [One Bootstrap](https://github.com/flatlogic/one-bootstrap-template-full) |


Additionally, these templates are tailored for specific business needs:
- [E-Commerce Frontend (React)](https://github.com/flatlogic/ecommerce-frontend) - A complete e-commerce solution.
- [Bookkeeper UI (React)](https://github.com/flatlogic/bookkeeper-ui) - Accounting dashboard for finance management.
- [User Management Template (React)](https://github.com/flatlogic/user-management-template) - User authentication and management.

---

## 👨‍💻 How to Contribute
- **Star this repo ⭐** - show some love.
- **Report bugs** - but be nice.
- **Join the [Discord](<insert-discord-invite-link>)** - meet fellow devs.

---

## 🔥 About Flatlogic
[Flatlogic AI Software Engineer](https://flatlogic.com/ai-software-development-agent) builds modern business software so you don't have to. Our AI Software Development Agent helps you generate, deploy, and maintain enterprise applications with minimal effort.

---

## 📜 License
This template is free to use. Modify it, break it, make it your own. Just don’t try to sell it back to us. 😎

---

> **Questions or feedback?**  
> Join our [Flatlogic Community Discord](https://discord.gg/flatlogic-community) or visit our [support forum](https://flatlogic.com/forum). We might even reply!


