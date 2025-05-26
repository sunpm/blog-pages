import { CssPath, JavascriptPath, NodePath, TypescriptPath, UniAppPath } from './path'
import { getCSSUrl, getMiniProgramUrl, getNPMUrl, getViteUrl, getVueCliUrl } from './url'

export const css = [
  { text: 'unocss常用设置', link: getCSSUrl('/unocss') },
]
export const miniProgram = [
  { text: 'uniapp 分包', link: getMiniProgramUrl('/uniapp-subcontract') },
]
export const npm = [
  { text: 'NPM 国内加速，修改镜像源', link: getNPMUrl('/NPM 国内加速，修改镜像源') },
]
export const vite = [
  { text: 'Vite 设置别名', link: getViteUrl('/set-alias') },
]
export const vueCli = [
  { text: '使用脚手架vue-cli安装依赖报错', link: getVueCliUrl('/installation-error') },
]

export const basics = [
  {
    ...JavascriptPath[0],
    text: 'Javascript',
  },
  {
    ...TypescriptPath[0],
    text: 'Typescript',
  },
  {
    ...CssPath[0],
    text: 'CSS',
  },
  {
    ...NodePath[0],
    text: 'Nodejs',
  },
  {
    ...UniAppPath[0],
    text: '小程序',
  },
]

export const packing = [
  {
    text: 'Vite',
    items: vite,
  },
  {
    text: 'Vue-Cli',
    items: vueCli,
  },
]
