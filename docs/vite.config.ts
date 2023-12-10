// vite.config.ts
// @ts-ignore
import {defineConfig} from 'vite'

export default defineConfig({
  ssr: {
    noExternal: ['vitepress-plugin-nprogress']
  },
})
