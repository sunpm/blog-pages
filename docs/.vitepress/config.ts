import {defineConfig} from "vitepress"
import head from './config/head.config'
// import sidebar from "./config/sidebar.config"
// import nav from './config/nav.config'
import {githubLink} from "./config/url.config"

import AutoNavPlugin from 'vitepress-auto-nav-sidebar'
import {ignoreFiles, ignoreFolders} from "./config/auto.files"

const { nav, sidebar } = AutoNavPlugin({
  ignoreFolders, // 需要排除的一些目录
  ignoreFiles, // 需要排除的一些文件
  // @ts-ignore
  isCollapse: true,
})

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
    nav: [
      ...nav,
      {
        text: '👋 关于我',
        link: '/关于'
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Sunpm'
    },
    // 每个文章底下显示编辑按钮 https://vitepress.vuejs.org/guide/theme-edit-link.html
    editLink: {
      pattern: `${githubLink}/edit/master/docs/:path`,
      text: '为此页提供修改建议'
    },
    // 社交链接 https://vitepress.vuejs.org/config/theme-configs.html#sociallinks
    socialLinks: [
      { icon: 'github', link: githubLink },
    ],
    lastUpdatedText: '最后更新时间',
  },
  markdown: {
    lineNumbers: true
  }
})
