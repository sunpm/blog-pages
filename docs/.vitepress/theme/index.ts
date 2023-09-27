import DefaultTheme from "vitepress/theme"
import type { Theme } from 'vitepress'
import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import './styles/vars.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    vitepressNprogress(ctx)
    // app.component('NotFound', DefaultTheme.NotFound)
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();

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
      frontmatter, route
    });
  }
} as Theme
