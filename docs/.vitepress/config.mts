import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'
import { githubLink, runLink, userGithubLink } from './config/url'
import { search } from './config/search'
import { socialLinks } from './config/social'
import { head } from './config/head'
import { nav } from './config/nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '飘渺的黑洞',
  description: '个人技术知识库，记录 & 分享个人碎片化、结构化、体系化的技术知识内容。',
  lang: 'zh-CN',
  head,
  themeConfig: {
    // 亮/暗模式设置不同的logo
    logo: {
      light: '/images/logo.png',
      dark: '/images/logo.png',
    },
    // https://vitepress.dev/reference/default-theme-config
    // 顶部右侧导航
    nav: [
      ...nav,
      {
        text: '👋 关于我',
        link: '/about',
      },
    ],

    // 每个文章底下显示编辑按钮 https://vitepress.vuejs.org/guide/theme-edit-link.html
    editLink: {
      pattern: `${githubLink}/edit/main/docs/:path`,
      text: '为此页提供修改建议',
    },
    // 社交链接 https://vitepress.vuejs.org/config/theme-configs.html#sociallinks
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: `Copyright © 2022-present  <a href="${userGithubLink}">Sunpm</a>`,
    },
    socialLinks,
    search,
  },
  sitemap: {
    hostname: runLink,
  },
  lastUpdated: true,
  vite: {
    plugins: [
      AutoSidebar({
        path: '/docs',
        titleFromFile: true,
      }),
    ],
  },
})
