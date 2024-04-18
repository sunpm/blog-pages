import { getJSUrl, getMiniProgramUrl, getViteUrl, getVueCliUrl } from './url'

export const javascript = [
  { text: 'js 判断空对象', link: getJSUrl('/determine-empty-object') },
]
export const miniProgram = [
  { text: 'uniapp 分包', link: getMiniProgramUrl('/uniapp-subcontract') },
]
export const vite = [
  { text: 'Vite 设置别名', link: getViteUrl('/set-alias') },
]
export const vueCli = [
  { text: '使用脚手架vue-cli安装依赖报错', link: getVueCliUrl('/installation-error') },
]

export const basics = [
  {
    text: 'Javascript', items: javascript,
  },
  {
    text: '小程序', items: miniProgram,
  },
]

export const packing = [
  {
    text: 'Vite', items: vite,
  },
  {
    text: 'Vue-Cli', items: vueCli,
  },
]
