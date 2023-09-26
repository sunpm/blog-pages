import DefaultTheme from "vitepress/theme"
import type { Theme } from 'vitepress'
import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'
// import './styles/vars.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    vitepressNprogress(ctx)
    // app.component('NotFound', DefaultTheme.NotFound)
  }
} as Theme
