import {defineConfig} from "vitepress"
import head from './config/head.config'
import sidebar from "./config/sidebar.config"
import nav from './config/nav.config'

export default defineConfig({
  title: 'sunpm',
  titleTemplate: 'Vite & Vue powered static site generator',
  description: '成功少不了沉淀！',
  base: '/blog-pages/',
  lastUpdated: true,
  lang: 'zh-CN',
  // ignoreDeadLinks: true,
  head,
  themeConfig: {
    logo: '/images/logo.png',
    sidebar,
    // 顶部右侧导航
    nav
  },
  markdown: {
    lineNumbers: true
  }
})
