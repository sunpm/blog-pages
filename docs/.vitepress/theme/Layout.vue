<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { darkTheme } from 'naive-ui'

const { isDark } = useData()
const theme = computed(() => isDark.value ? darkTheme : null)
function enableTransitions() {
  return 'startViewTransition' in document
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})
</script>

<template>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-ND263VWW"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <NConfigProvider :theme="theme">
    <!-- 本文总阅读量 <span id="busuanzi_value_page_pv">Loading</span> 次
    本文总访客量 <span id="busuanzi_value_page_uv">Loading</span> 人
    本站总访问量 <span id="busuanzi_value_site_pv">Loading</span> 次
    本站总访客数 <span id="busuanzi_value_site_uv">Loading</span> 人 -->
    <DefaultTheme.Layout />
  </NConfigProvider>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

html.dark .shiki,
html.dark .shiki span {
  color: var(--shiki-dark);
}
html:not(.dark) .shiki,
html:not(.dark) .shiki span {
  color: var(--shiki-light);
}
</style>
