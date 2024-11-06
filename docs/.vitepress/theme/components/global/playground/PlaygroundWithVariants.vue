<script setup lang="ts">
import { createGenerator } from '@unocss/core'
import cssbeautify from 'cssbeautify'
import presetUno from '@unocss/preset-uno'
import { useVModels } from '@vueuse/core'
import { highlightCSS } from '../../../composables'
import SelectorVariants from './SelectorVariants.vue'

const props = withDefaults(defineProps<{
  variant?: string
  variants?: string[]
  type?: string
  prefix?: string
  fixed?: string
  appended?: string
  nested?: boolean
  html?: string
  showPreview?: boolean
}>(), {
  variant: '',
  variants: () => ['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl', '1/2', 'full'],
  prefix: '',
  fixed: '',
  appended: '',
  nested: false,
  showPreview: true,
})
const emit = defineEmits(['update:variant'])
const {
  variant,
  prefix,
} = useVModels(props, emit, { passive: true })

const classes = computed(() => {
  if (!prefix.value)
    return variant.value

  let strs = [prefix.value]

  if (variant.value)
    strs = variant.value.startsWith('-') ? strs.map(i => `-${i}${variant.value}`) : strs.map(i => `${i}-${variant.value}`)

  return strs.join(' ')
})

const formattedCss = ref('')
async function generateCss() {
  const uno = createGenerator({}, {
    details: false,
    presets: [
      presetUno(),
    ],
  })
  const { css } = await uno.generate(classes.value)
  const parts = css.split('/* layer: default */')
  if (parts.length < 2) return
  const defaultLayerCss = parts[1].trim()
  formattedCss.value = cssbeautify(defaultLayerCss, {
    indent: '  ',
    autosemicolon: true,
  })
}

// 在服务器端和客户端都执行
generateCss()

// 在客户端再次执行以确保数据是最新的
onMounted(() => {
  generateCss()
})
watch(classes, generateCss)
</script>

<template>
  <div>
    <SelectorVariants
      v-model="variant"
      :variants="
        type === 'color' ? ['transparent', 'current', 'gray-500', 'red-500', 'yellow-500', 'blue-500', 'green-500', 'gray-500/50', 'red-500/50', 'yellow-500/50', 'blue-500/50', 'green-500/50']
        : type === 'opacity' ? ['0', '5', '10', '20', '25', '30', '40', '50', '60', '70', '75', '80', '90', '95', '100']
          : variants
      "
    />
    <div class="mt-4" />
    <div border="~ main" relative of-hidden p4>
      <pre w-full of-auto v-html="highlightCSS(formattedCss)" />
    </div>
  </div>
</template>

<style scoped>

</style>
