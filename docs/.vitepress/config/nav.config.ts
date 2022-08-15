import {DefaultTheme} from 'vitepress'
import {css, javascript, node} from "./url.config"

const navConfig: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '关于',
    link: '/about/',
    activeMatch: '/config/'
  },
  {
    text: '前端',
    items: [
      { text: 'css', link: `${css}/` },
      { text: 'JavaScript', link: `${javascript}/` },
    ]
  },
  {
    text: '后端',
    items: [
      { text: 'node', link: `${node}/` },
    ]
  },
]

export default navConfig
