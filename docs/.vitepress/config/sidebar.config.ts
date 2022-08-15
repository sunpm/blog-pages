import {DefaultTheme} from 'vitepress'
import {css} from "./url.config"

const sidebarConfig: DefaultTheme.Sidebar = {
  "/front/": [
    {
      text: 'CSS',
      items: [
        {text: 'Index', link: `${css}/`}
      ],
    }
  ]
}

export default sidebarConfig
