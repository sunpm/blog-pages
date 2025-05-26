import type { HighlighterCore } from 'shiki/core'
import { computedAsync } from '@vueuse/core'
import { createHighlighterCore } from 'shiki/core'
import { createOnigurumaEngine } from 'shiki/engine/oniguruma'
import langCss from 'shiki/langs/css.mjs'
import langJs from 'shiki/langs/javascript.mjs'
import githubDark from 'shiki/themes/github-dark.mjs'
import githubLight from 'shiki/themes/github-light.mjs'

export const shiki = computedAsync<HighlighterCore>(async () => {
  return await createHighlighterCore({
    // https://shiki.tmrs.site/guide/future#%E9%87%8D%E8%A6%81%E7%9A%84%E5%BA%9F%E5%BC%83%E9%A1%B9
    // loadWasm: () => import('shiki/wasm'),
    engine: createOnigurumaEngine(() => import('shiki/wasm')),
    themes: [
      githubDark,
      githubLight,
    ],
    langs: [
      langCss,
      langJs,
    ],
  })
})

export function highlight(code: string, lang: 'css' | 'javascript') {
  if (!shiki.value)
    return code
  return shiki.value.codeToHtml(code, {
    lang,
    defaultColor: false,
    themes: {
      dark: 'github-dark',
      light: 'github-light',
    },
  })
}

export function highlightCSS(code: string) {
  return highlight(code.trim(), 'css')
}

export function highlightJS(code: string) {
  return highlight(code, 'javascript')
}
