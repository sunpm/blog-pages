import {DefaultTheme} from "vitepress";

const javascript = [
  { text: 'js 判断空对象', link: '/code/javascript/determine-empty-object' },
]

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '基础知识', items: [
      {
        text: 'Javascript', items: javascript
      }
    ]
  },
]
