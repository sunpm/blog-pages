import { defineConfig } from 'vitepress'
import {runLink} from "./config/url";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "飘渺的黑洞",
  description: "欢迎来到飘渺的黑洞。有你～是黑洞存在的意义！！！",
  themeConfig: {
    // 亮/暗模式设置不同的logo
    logo: {
      light: '/images/logo.png',
      dark: '/images/logo.png',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  sitemap: {
    hostname: runLink
  }
})
