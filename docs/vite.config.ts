// vite.config.ts
import {defineConfig} from 'vite'

export default defineConfig({
  ssr: {
    noExternal: ['vitepress-plugin-nprogress']
  },
})
