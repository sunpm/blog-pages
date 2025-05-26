import type { DefaultTheme } from 'vitepress'
import { getUnisaveDocsUrl, miniProgramDir } from '../url'

export const UniSavePath: DefaultTheme.NavItemWithLink[] = [
  { text: '介绍', link: getUnisaveDocsUrl('/introduction') },
  { text: '起步', link: getUnisaveDocsUrl('/installation') },
  { text: '视图', link: getUnisaveDocsUrl('/views') },
  { text: '样式', link: getUnisaveDocsUrl('/styling') },
  { text: '更换 UI 组件库', link: getUnisaveDocsUrl('/replace-ui') },
  { text: '图标指南', link: getUnisaveDocsUrl('/icons') },
  { text: '数据获取', link: getUnisaveDocsUrl('/data-fetching') },
  { text: '状态管理', link: getUnisaveDocsUrl('/state-management') },
  { text: '代码规范', link: getUnisaveDocsUrl('/code-style') },
]

export const UniAppPath: DefaultTheme.NavItemWithLink[] = [
  { text: 'swiper组件@scroll方法防抖', link: `${miniProgramDir}/swiper-anti-shaking` },
  { text: 'uniapp项目中JS和TS混合使用', link: `${miniProgramDir}/uniapp-jsAndts-dev` },
  { text: 'uniapp 分包', link: `${miniProgramDir}/uniapp-subcontract` },
  { text: 'vendor.js 过大的处理方式', link: `${miniProgramDir}/vendor.js-tooBig` },
]
