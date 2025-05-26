import type { DefaultTheme } from 'vitepress'
import { javascriptDir, typescriptDir } from '../url'

export const JavascriptPath: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'JS中判断空对象',
    link: `${javascriptDir}/determine-empty-object`,
  },
]

export const TypescriptPath: DefaultTheme.NavItemWithLink[] = [
  {
    text: '获取参数和返回值类型',
    link: `${typescriptDir}/get-param-return-type`,
  },
  {
    text: '修改tsconfig配置，让ts不写任何的类型',
    link: `${typescriptDir}/tsconfig-no-type`,
  },
  {
    text: 'TypeDoc 标签的区别和建议',
    link: `${typescriptDir}/typedoc-tags`,
  },
]
