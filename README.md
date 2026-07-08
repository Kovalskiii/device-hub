# Device-hub

Device-hub is a clean and user-friendly website for exploring electronic devices. It allows users to browse products, check prices and availability, view main specifications, and quickly find the right device using filters and search.

Application built with **Nuxt** and **Vue**.

---

## 📦 Used Packages

- [Nuxt](https://astro.build/) – Vue framework
- [Vue](https://vuejs.org/) – Progressive frontend framework
- [TypeScript](https://www.typescriptlang.org/) – TypeScript is a strongly typed programming language that builds on JavaScript
- [Zod](https://zod.dev/) – TypeScript-first schema declaration and validation library

---

## 📁 Project Structure

```sh
/
├─ app/
│  ├─ assets/
│  ├─ components/
│  ├─ composables/
│  ├─ pages/
│  ├─ shared/
│  └─ server/
│

This modular structure helps maintain a clean, scalable, and maintainable codebase.
```

---

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

## 🧹 Reformat with [Prettier](https://prettier.io/)

```sh
bun prettier "src/**/*.{js,ts,vue}" --write --config .prettierrc

# For single file
bun prettier src/index.vue --write --config .prettierrc
```
