<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import { useYearSort } from '../../composables'
import PageHeader from '../common/PageHeader.vue'
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
    <PageHeader
      title="文章归档"
      description="按时间顺序整理的所有文章"
      icon="📚"
    />

    <!-- 归档内容 -->
    <NCard :bordered="true" class="archives-container">
      <div v-for="(yearList, yearIndex) in data" :key="yearIndex" class="mb-8 last:mb-0">
        <div class="mb-6 border-b border-$vp-c-border pb-2">
          <h2 class="text-6 text-$vp-c-text-1 font-bold">
            {{ yearList[0].frontMatter.date.split('-')[0] }}
          </h2>
        </div>
        <ArchivesList :list="yearList" />
      </div>
    </NCard>
  </div>
</template>

<style scoped>
.archives-container {
  padding: 24px;
}

@media (max-width: 768px) {
  .archives-container {
    padding: 16px;
  }
}
</style>
