import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitepress'
import { head } from './config/head'
import { markdown } from './config/markdown'
import { nav } from './config/nav'
import { search } from './config/search'
import { sidebar } from './config/sidebar'
import { socialLinks } from './config/social'
import { githubLink, runLink, userGithubLink } from './config/url'
import { getPosts } from './theme/serverUtils'

const fileAndStyles: Record<string, string> = {}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Sunpm',
  description: '一个小小网站，记录为学习付出努力而不该忘记的知识。',
  lang: 'zh-CN',
  head,
  // 自定义 Markdown 链接渲染
  markdown,
  themeConfig: {
    // 亮/暗模式设置不同的logo
    logo: {
      light: '/images/logo.png',
      dark: '/images/logo.png',
    },
    // eslint-disable-next-line antfu/no-top-level-await
    posts: await getPosts(),
    outline: {
      level: [2, 3],
      label: '目录',
    },
    // https://vitepress.dev/reference/default-theme-config
    // 顶部右侧导航
    nav: [
      ...nav,
      {
        text: '文库',
        items: [
          { text: '🫣 归档', link: '/archives' },
          { text: '🏷️ 标签', link: '/tags' },
        ],
      },
      {
        text: '友链',
        items: [
          { text: '🤝 友情链接', link: '/link' },
        ],
      },
      {
        text: '我的作品',
        items: [
          { text: 'unisave - 拯救 uniapp', link: `${userGithubLink}/unisave` },
        ],
      },
      { text: '👋 关于我', link: '/about' },
    ],
    sidebar,

    // 每个文章底下显示编辑按钮 https://vitepress.vuejs.org/guide/theme-edit-link.html
    editLink: {
      pattern: `${githubLink}/edit/main/docs/:path`,
      text: '为此页提供修改建议',
    },
    // 社交链接 https://vitepress.vuejs.org/config/theme-configs.html#sociallinks
    footer: {
      message: 'Released under the <a href="https://github.com/sunpm/blog-pages/blob/main/LICENSE">MIT License</a>.',
      copyright: `Copyright © 2022-present  <a href="${userGithubLink}">sunpm</a>`,
    },
    socialLinks,
    search,
  },
  sitemap: {
    hostname: runLink,
  },
  lastUpdated: true,
  cleanUrls: true,
  vite: {
    plugins: [
      Unocss(),
      AutoImport({
        imports: [
          'vue',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
        dts: '.vitepress/auto-imports.d.ts',
      }),
      Components({
        resolvers: [NaiveUiResolver()],
        dirs: [
          '.vitepress/theme/components',
        ],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: '.vitepress/components.d.ts',
      }),
    ],
    ssr: {
      noExternal: ['naive-ui', 'date-fns', 'vueuc'],
    },
    postRender(context) {
      const styleRegex = /<css-render-style>(([\s\S])+)<\/css-render-style>/
      const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
      const style = styleRegex.exec(context.content)?.[1]
      const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
      if (vitepressPath && style) {
        fileAndStyles[vitepressPath] = style
      }
      context.content = context.content.replace(styleRegex, '')
      context.content = context.content.replace(vitepressPathRegex, '')
    },
    transformHtml(code, id) {
      const html = id.split('/').pop()
      if (!html)
        return
      const style = fileAndStyles[`/${html}`]
      if (style) {
        return code.replace(/<\/head>/, `${style}</head>`)
      }
    },
  },
})
