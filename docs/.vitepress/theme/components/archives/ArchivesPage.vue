<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import { useYearSort } from '../../composables'
import ArchivesList from './ArchivesList.vue'

defineOptions({
  name: 'ArchivesPage',
})

const { theme } = useData()
const data = computed(() => useYearSort(theme.value.posts))
</script>

<template>
  <div class="mx-auto max-w-280 px-6 py-16">
    <!-- 页面头部 -->
    <div class="mb-16 text-center">
      <h1 class="mb-4 text-8 text-$vp-c-text-1 font-bold">
        📚 文章归档
      </h1>
      <p class="text-5 text-$vp-c-text-2">
        按时间顺序整理的所有文章
      </p>
    </div>

    <!-- 归档内容 -->
    <div class="border border-$vp-c-border rounded-3 bg-$vp-c-bg-soft p-8">
      <div v-for="(yearList, yearIndex) in data" :key="yearIndex" class="mb-8 last:mb-0">
        <div class="mb-6 border-b border-$vp-c-border pb-2">
          <h2 class="text-6 text-$vp-c-text-1 font-bold">
            {{ yearList[0].frontMatter.date.split('-')[0] }}
          </h2>
        </div>
        <ArchivesList :list="yearList" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
