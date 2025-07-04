import { NConfigProvider } from 'naive-ui'
import { useRoute } from 'vitepress'
import { defineComponent, h, inject } from 'vue'
import Layout from '../Layout.vue'

export const CssRenderStyle = defineComponent({
  setup() {
    const collect: any = inject('css-render-collect')
    return {
      style: collect(),
    }
  },
  render() {
    return h('css-render-style', {
      innerHTML: this.style,
    })
  },
})

export const VitepressPath = defineComponent({
  setup() {
    const route = useRoute()
    return () => {
      return h('vitepress-path', null, [route.path])
    }
  },
})

export const NaiveUIProvider = defineComponent({
  render() {
    return h(
      NConfigProvider,
      { abstract: true, inlineThemeDisabled: true },
      {
        default: () => [
          h(Layout, null, { default: this.$slots.default?.() }),
          import.meta.env.SSR ? [h(CssRenderStyle), h(VitepressPath)] : null,
        ],
      },
    )
  },
})
