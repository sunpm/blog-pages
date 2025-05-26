<script setup lang="ts">
import { createGenerator } from '@unocss/core'
import presetUno from '@unocss/preset-uno'
import { useVModels } from '@vueuse/core'
import cssbeautify from 'cssbeautify'
import InlinePlayground from './InlinePlayground.vue'
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
  html: 'The quick brown fox jumps over the lazy dog',
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
const previewStyle = ref({})
async function generateCss() {
  const uno = createGenerator({}, {
    details: false,
    presets: [
      presetUno(),
    ],
  })
  const { css } = await uno.generate(classes.value)
  const parts = css.split('/* layer: default */')
  if (parts.length < 2)
    return
  const defaultLayerCss = parts[1].trim()
  previewStyle.value = extractCSSProperties(defaultLayerCss)
  formattedCss.value = cssbeautify(defaultLayerCss, {
    indent: '  ',
    autosemicolon: true,
  })
}
function extractCSSProperties(cssRule) {
  // 使用正则表达式匹配花括号内的内容
  const match = cssRule.match(/\{([^}]*)\}/)

  if (!match) {
    return null // 如果没有匹配到，返回null
  }

  // 提取花括号内的内容
  const content = match[1].trim()

  // 将内容分割成键值对
  const pairs = content.split(';').filter(pair => pair.trim() !== '')

  // 创建一个对象来存储属性
  const properties = {}

  // 遍历每个键值对并添加到对象中
  pairs.forEach((pair) => {
    const [key, value] = pair.split(':').map(item => item.trim())
    properties[key] = value
  })

  return properties
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
    <InlinePlayground
      :input="classes"
      :fixed="fixed"
      :nested="nested"
      :appended="appended"
      :html="html"
      :show-preview="showPreview"
      :formatted-css="formattedCss"
      :preview-style="previewStyle"
    />
  </div>
</template>

<style scoped>

</style>
