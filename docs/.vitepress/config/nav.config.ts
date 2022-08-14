import {DefaultTheme} from 'vitepress'

const navConfig: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '关于',
    link: '/about/'
  },
  {
    text: '操作系统',
    items: [
      { text: 'Macos', link: '/os/禁止生成.DS_Store文件' },
    ]
  }
]

export default navConfig
