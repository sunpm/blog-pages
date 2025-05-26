import type { DefaultTheme } from 'vitepress'
import { basics } from './docs'
import { UniSavePath } from './path'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '基础知识',
    items: basics,
  },
  {
    text: '拯救 UniApp',
    items: UniSavePath,
  },
  /* {
    text: '打包工具', items: packing,
  }, */
]
