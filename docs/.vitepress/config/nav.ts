import type { DefaultTheme } from 'vitepress'
import { basics } from './docs'
import { getUnisaveDocsUrl } from './url'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '基础知识', items: basics,
  },
  {
    text: '拯救 UniApp',
    items: [
      { text: '介绍', link: getUnisaveDocsUrl('/introduction') },
      { text: '起步', link: getUnisaveDocsUrl('/installation') },
      { text: '视图', link: getUnisaveDocsUrl('/views') },
      { text: '样式', link: getUnisaveDocsUrl('/styling') },
      { text: '更换 UI 组件库', link: getUnisaveDocsUrl('/replace-ui') },
      { text: '图标指南', link: getUnisaveDocsUrl('/icons') },
      { text: '数据获取', link: getUnisaveDocsUrl('/data-fetching') },
      { text: '状态管理', link: getUnisaveDocsUrl('/state-management') },
      { text: '代码规范', link: getUnisaveDocsUrl('/code-style') },
    ],
  },
  /* {
    text: '打包工具', items: packing,
  }, */
]
