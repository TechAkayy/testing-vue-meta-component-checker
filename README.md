# Pinegrow îles Tailwind CSS - Quick start template

A Basic îles Tailwind CSS app that pre-includes the Pinegrow îles Module and other goodies for Vue Designer app.

## Vue Designer (WIP)

Vue Designer is a desktop drag-and-drop editor for Vue apps by [Pinegrow](https://pinegrow.com).

It let's you visually design your Vue single file components and boosts your productivity and your creativity while building your component-based Vue apps.

It smartly integrates with your [Vite](https://vitejs.dev/) based CLI, and provides an amazing deverloper experience with it's powerful visual controls and features.

Clean code, No lock-in 😃

<br>

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/vue-designer/pg-iles-tailwindcss).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit vue-designer/pg-iles-tailwindcss my-iles-tw-app
cd my-iles-tw-app
npm install
```

<br>

## Usage

#### Open your project in Vue Designer, and follow the instructions displayed in the Config Panel (that should pop-out automatically).

<br>

### Start your development server

```bash
npm run dev
```

### Build

To build the App, run

```bash
npm run build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.

Check out the [deployment documentation](https://iles.pages.dev/guide/deployment) for more information.

<br>

## Pre-packed

### Meta Frameworks (Vue-based)

- [îles](https://iles.pages.dev/) - A Joyful Site Generator.
  - 🏝 **[Partial Hydration]** - zero JS by default, hydrates the interactive bits
  - 🔌 **[Batteries Included]** - layouts, components, site-wide data
  - 🧱 **[Multi-Framework]** - vue, preact, svelte, solid
  - 📖 **[Markdown]** - use components in markdown and viceversa
  - 🛣 **[Routing]** - automatically configured from files
  - 🛠 **[Devtools][devtools]** - debug panel and [hydration timeline]
  - ⚡️ **[Fast][vite]** - instant reloading powered by [Vite]

### UI Frameworks

- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite#vue) - The amazing utility-first CSS framework.

### Icons

- [UnoCSS Preset Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - use over 100,000 open-source [Iconify](https://iconify.design/) icons.

### Modules/Plugins

- [Pinegrow îles Module](https://www.npmjs.com/package/@pinegrow/iles-module) - enables you to live-design your Vue single-file-components visually in Vue Designer.

- [Pinegrow Tailwind CSS Plugin](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) - enables visual controls customization and theme customization (via Design Panel).

### Devtools

- [Vue Devtools](https://devtools.vuejs.org/guide/installation.html#standalone) - Official devtools that can be used as a standalone app alongside Pinegrow. It's configured as a Nuxt plugin (only during development).

- [îles Devtools](https://iles.pages.dev/guide/development#devtools) - Page information is available in the in-app debug panel (similar to Vitepress). Also access the "Islands" inspector in Vue devtools.

### Deployment

- [Netlify](https://www.netlify.com/) - zero-config deployment

### VS Code Extensions

- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://vuejs.org/guide/scaling-up/sfc.html)
- [ESLint](https://eslint.org) with [@nuxt/eslint-config](https://github.com/nuxt/eslint-config) - opinionated not-so-strict set of linting rules. Nuxt & îles share a similar directory structure, so are their linting rules.
- [Prettier](https://prettier.io) with [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Format without conflicting with eslint rules.

<br>

## Community

- [Pinegrow](https://forum.pinegrow.com/)

Vue Designer's Config Panel displays the key packages and the various links to their individual ecosystem and community.
