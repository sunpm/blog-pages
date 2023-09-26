import {getJSUrl, getMiniProgramUrl} from "./url";

export const javascript = [
  { text: 'js 判断空对象', link: getJSUrl('/determine-empty-object') },
]
export const miniProgram = [
  { text: 'uniapp 分包', link: getMiniProgramUrl('/uniapp-subcontract') },
]



export const basics = [
  {
    text: 'Javascript', items: javascript
  },
  {
    text: '小程序', items: miniProgram
  },
]
