<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  href: string
  target?: string
  rel?: string
  title?: string
}>()

// 判断是否为外部链接
const isExternal = computed(() => {
  return /^https?:\/\//.test(props.href)
})

// 外部链接默认在新窗口打开
const linkTarget = computed(() => {
  return props.target || (isExternal.value ? '_blank' : undefined)
})

// 外部链接添加 noopener noreferrer
const linkRel = computed(() => {
  return props.rel || (isExternal.value ? 'noopener noreferrer' : undefined)
})
</script>

<template>
  <a
    :href="href"
    :target="linkTarget"
    :rel="linkRel"
    :title="title"
    class="custom-link relative inline-flex items-center border-b border-transparent text-$vp-c-brand-1 transition-all duration-300 hover:(border-$vp-c-brand-1 text-$vp-c-brand-2)"
  >
    <slot />
  </a>
</template>
