import type { DefaultTheme } from 'vitepress'
import { cssDir } from '../url'

export const CssPath: DefaultTheme.NavItemWithLink[] = [
  {
    text: '出故障的文字',
    link: `${cssDir}/glitch-text`,
  },
  {
    text: '渐变背景动画效果',
    link: `${cssDir}/gradient-background`,
  },
  {
    text: 'Unocss 常用属性',
    link: `${cssDir}/unocss`,
  },
  {
    text: 'CSS实现背景图尺寸不随浏览器缩放而变化的两种方法',
    link: `${cssDir}/CSS实现背景图尺寸不随浏览器缩放而变化的两种方法`,
  },
]
