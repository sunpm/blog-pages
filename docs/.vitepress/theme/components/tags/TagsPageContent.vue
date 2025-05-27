<script setup lang="ts">
import { ref } from 'vue'
import TagsList from './TagsList.vue'
import TagsPageHeader from './TagsPageHeader.vue'
import TagsStats from './TagsStats.vue'
import TagsTips from './TagsTips.vue'

const searchQuery = ref('')

function handleSearch(query: string) {
  console.log('搜索标签:', query)
  // 这里可以添加搜索逻辑
}
</script>

<template>
  <div class="mx-auto max-w-250 px-6 py-10 lg:px-6 lg:py-10">
    <!-- 页面头部 -->
    <TagsPageHeader />

    <!-- 统计信息 -->
    <TagsStats />

    <!-- 标签内容 -->
    <div class="animate-fadeInUp mb-15 border border-$vp-c-border rounded-4 bg-$vp-c-bg-soft p-10">
      <TagsList />
    </div>

    <!-- 使用提示 -->
    <TagsTips />
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
</style>
