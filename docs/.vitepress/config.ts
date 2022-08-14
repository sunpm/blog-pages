import {defineConfig} from "vitepress"
import head from './config/head.config'
import sidebar from "./config/sidebar.config"
import nav from './config/nav.config'
import {githubLink} from "./config/url.config"

export default defineConfig({
  title: 'sunpm',
  titleTemplate: 'Vite & Vue powered static site generator',
  description: '成功少不了沉淀！',
  // base: '/blog-pages/',
  lastUpdated: true,
  lang: 'zh-CN',
  // @ts-ignore
  ignoreDeadLinks: true,
  head,
  themeConfig: {
    // 亮/暗模式设置不同的logo
    logo: {
      light: '/images/logo.png',
      dark: '/images/logo.png',
    },
    sidebar,
    // 顶部右侧导航
    nav,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Sunpm'
    },
    // 每个文章底下显示编辑按钮 https://vitepress.vuejs.org/guide/theme-edit-link.html
    editLink: {
      pattern: `${githubLink}/edit/master/docs/:path`,
      text: 'Edit this page on GitHub'
    },
    // 社交链接 https://vitepress.vuejs.org/config/theme-configs.html#sociallinks
    socialLinks: [
      { icon: 'github', link: githubLink },
    ],
    lastUpdatedText: '最后更新时间'
  },
  markdown: {
    lineNumbers: true
  }
})
