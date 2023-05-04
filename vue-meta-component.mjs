import * as url from 'url'
import path from 'path'

import { createComponentMetaChecker } from 'vue-component-meta'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const checkerOptions = {
  forceUseTs: true,
  schema: { ignore: ['MyIgnoredNestedProps'] },
  printer: { newLine: 1 },
}

const tsconfigChecker = createComponentMetaChecker(
  // Write your tsconfig path
  path.join(__dirname, './tsconfig.json'),
  checkerOptions,
)

const beforeMtimeMs = new Date().getTime()
const componentPath = path.join(__dirname, './src/components/ArticleCard.vue')
const meta = tsconfigChecker.getComponentMeta(componentPath)
const afterMtimeMs = new Date().getTime()
console.log(`Took ${afterMtimeMs - beforeMtimeMs} ms`)
console.log(meta)
