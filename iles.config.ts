//iles.config.js (or) iles.config.ts

import { defineConfig } from 'iles'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  extendFrontmatter(frontmatter, filename) {
    if (filename.includes('/posts/')) {
      frontmatter.layout = 'post'
    }
  },
  siteUrl: 'https://natures-delight-with-iles-tailwindcss.netlify.app',
  turbo: true,
  jsx: 'preact', // 'solid', 'react', 'vue'
  svelte: true,
  modules: [
    '@islands/feed',
    ['@islands/excerpt', { maxLength: 140 }],
    '@islands/headings',
    [
      '@pinegrow/iles-module',
      {
        liveDesigner: {
          devtoolsKey: 'devtools',
          tailwindcss: {
            configPath: 'tailwind.config.cjs',
            cssPath: '@/assets/css/tailwind.css',
          },
          experimental: {
            designableFileTypes: ['.astro', '.jsx', '.tsx', '.svelte'],
            metaFrameworks: ['astro'],
          },
          //...
        },
        // https://github.com/antfu/unplugin-auto-import#configuration
        autoImportAPIs: {
          imports: [
            //   '@vueuse/head',
            '@vueuse/core',
            //   // add presets
          ],
          dirs: [
            './composables', // only root modules
          ],
        },
      },
    ],
    //...
  ],
  vite: {
    resolve: {
      alias: {
        '~~': './',
      },
    },
    build: {
      rollupOptions: {
        external: 'preact/jsx-runtime',
      },
    },
    plugins: [
      Unocss({
        presets: [
          presetIcons({
            prefix: '', // overrides default prefix 'i'
          }),
        ],
      }),
    ],
  },
  //...
})
