// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtools = devtools
// }

import { defineApp } from 'iles'
import 'uno.css'
import '@/assets/css/tailwind.css'

import checkDarkTheme from '~/composables/dark-color-scheme-check?raw'
import type { Script } from '@unhead/schema'
type TurboScript = Script & { once: true }

export default defineApp({
  head: {
    htmlAttrs: { lang: 'en-US' },
    script: [{ children: checkDarkTheme, once: true } as TurboScript],
  },
})
