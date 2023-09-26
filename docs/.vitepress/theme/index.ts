import DefaultTheme from "vitepress/theme"
import type { Theme } from 'vitepress'
// import './styles/vars.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.component('NotFound', DefaultTheme.NotFound)
  }
} as Theme
