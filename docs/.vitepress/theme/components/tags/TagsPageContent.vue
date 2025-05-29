<script setup lang="ts">
import PageHeader from '../common/PageHeader.vue'
import TagsList from './TagsList.vue'
</script>

<template>
  <div class="mx-auto max-w-6xl px-6 py-16">
    <!-- 页面头部 -->
    <PageHeader
      title="标签"
      description="按主题分类的文章标签"
      icon="🏷️"
    />

    <!-- 标签列表 -->
    <section class="mb-16">
      <div class="mx-auto max-w-4xl">
        <TagsList />
      </div>
    </section>

    <!-- 文章列表 -->
    <section>
      <div class="mx-auto max-w-4xl">
        <slot />
      </div>
    </section>
  </div>
</template>

<style scoped>
.tags-container {
  padding: 24px;
}

@media (max-width: 768px) {
  .tags-container {
    padding: 16px;
  }
}
</style>
