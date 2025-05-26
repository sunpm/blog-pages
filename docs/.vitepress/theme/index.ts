import type { Theme } from 'vitepress'
import { setup } from '@css-render/vue3-ssr'
import { useData, useRoute } from 'vitepress'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import vitepressNprogress from 'vitepress-plugin-nprogress'
import DefaultTheme from 'vitepress/theme'
import { globalComponents } from './plugins'
import { NaiveUIProvider } from './plugins/naiveui'
import 'vitepress-plugin-nprogress/lib/css/index.css'
import 'virtual:uno.css'
import './styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    const { app } = ctx
    vitepressNprogress(ctx)
    app.use(globalComponents)
    if (import.meta.env.SSR) {
      const { collect } = setup(app)
      app.provide('css-render-collect', collect)
    }
    // 暂时关闭复制水印
    // app.use(copyright)
    // app.component('NotFound', DefaultTheme.NotFound)
  },
  Layout: NaiveUIProvider,
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData()
    const route = useRoute()

    // Obtain configuration from: https://giscus.app/
    giscusTalk({
      repo: 'sunpm/blog-pages',
      repoId: 'MDEwOlJlcG9zaXRvcnkxOTE4ODk2MDU=',
      category: 'Announcements', // default: `General`
      categoryId: 'DIC_kwDOC3AAxc4CZpft',
      mapping: 'pathname', // default: `pathname`
      inputPosition: 'bottom', // default: `top`
      lang: 'zh-CN', // default: `zh-CN`
      // ...
    }, {
      frontmatter,
      route,
    })
  },
} as Theme
