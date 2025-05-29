<script setup lang="ts">
import TagsList from './TagsList.vue'
import TagsPageHeader from './TagsPageHeader.vue'
import TagsStats from './TagsStats.vue'
</script>

<template>
  <div class="mx-auto max-w-280 px-6 py-16">
    <!-- 页面头部 -->
    <TagsPageHeader />

    <!-- 统计信息 -->
    <TagsStats />

    <!-- 标签内容区域 -->
    <div class="mb-16">
      <div class="border border-$vp-c-border rounded-3 bg-$vp-c-bg-soft p-8">
        <TagsList />
      </div>
    </div>
  </div>
</template>
