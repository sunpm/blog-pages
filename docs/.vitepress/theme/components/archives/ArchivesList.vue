<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  list: any[]
}>()
</script>

<template>
  <!-- 时间线组件，不用封装也行 -->
  <a v-for="(article, index) in list" :key="index" :href="withBase(article.regularPath)" p="y-4 l-10" flex="between" class="text-c-1!">
    <div class="relative hover:(text-main-1! font-bold)" transition="all">
      <div absolute-a h-2 w-2 rounded="1/2" bg="brand" m="y-auto" />
      <p m="l-6">
        {{ article.frontMatter.title }}
      </p>
    </div>
    <div>{{ article.frontMatter.date.slice(5) }}</div>
  </a>
</template>

<style scoped>

</style>
