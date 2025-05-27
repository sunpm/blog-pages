<script setup lang="ts">
import TagsList from './TagsList.vue'
import TagsPageHeader from './TagsPageHeader.vue'
import TagsStats from './TagsStats.vue'
import TagsTips from './TagsTips.vue'
</script>

<template>
  <div class="min-h-screen from-transparent via-blue-50/20 to-purple-50/20 bg-gradient-to-br dark:(from-transparent via-blue-950/10 to-purple-950/10)">
    <div class="mx-auto max-w-280 px-6 py-12 lg:px-8 lg:py-16">
      <!-- 页面头部 -->
      <TagsPageHeader />

      <!-- 统计信息 -->
      <TagsStats />

      <!-- 标签内容区域 -->
      <div class="relative mb-20">
        <!-- 背景装饰 -->
        <div class="absolute inset-0 border border-$vp-c-border/50 rounded-5 from-$vp-c-bg-soft/80 to-$vp-c-bg-soft/60 bg-gradient-to-br shadow-xl backdrop-blur-sm -bottom-8 -top-8" />
        <div class="absolute inset-0 rounded-5 from-blue-500/5 to-purple-500/5 bg-gradient-to-br blur-2xl -bottom-6 -left-2 -right-2 -top-6" />

        <!-- 内容 -->
        <div class="relative z-1 p-12">
          <TagsList />
        </div>
      </div>

      <!-- 使用提示 -->
      <TagsTips />

      <!-- 页脚装饰 -->
      <div class="mt-20 text-center">
        <div class="mx-auto h-1 w-40 rounded-full from-transparent via-$vp-c-border to-transparent bg-gradient-to-r" />
        <div class="mt-8 text-3.5 text-$vp-c-text-3 opacity-60">
          发现更多精彩内容 ✨
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}

/* 增强滚动体验 */
html {
  scroll-behavior: smooth;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--vp-c-bg-alt);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: var(--vp-c-brand-1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--vp-c-brand-2);
}
</style>
