import Theme from "vitepress/theme"
import './styles/vars.css'
// import './styles/style.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    // app.component('NotFound', DefaultTheme.NotFound)
  }
}
