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

// 计算文章总数
const totalPosts = computed(() => {
  return data.value.reduce((total, yearList) => total + yearList.length, 0)
})
</script>

<template>
  <div class="mx-auto max-w-280 px-6 py-16">
    <!-- 页面头部 -->
    <PageHeader
      title="文章归档"
      description="按时间顺序整理的所有文章"
      icon="📚"
      :show-stats="true"
      stats-label="文章总数"
      :stats-value="totalPosts"
    />

    <!-- 归档内容 -->
    <div class="archives-container">
      <div v-for="(yearList, yearIndex) in data" :key="yearIndex" class="mb-8 last:mb-0">
        <!-- 年份标题 -->
        <div class="mb-6 border-b border-$vp-c-border pb-4">
          <div class="flex items-center justify-between">
            <h2 class="text-6 text-$vp-c-text-1 font-bold">
              📅 {{ yearList[0].frontMatter.date.split('-')[0] }}
            </h2>
            <span class="text-3.5 text-$vp-c-text-3 font-medium">
              共 {{ yearList.length }} 篇文章
            </span>
          </div>
        </div>

        <!-- 文章列表 -->
        <ArchivesList :list="yearList" />
      </div>

      <!-- 空状态 -->
      <div v-if="data.length === 0" class="py-16 text-center">
        <div class="mb-4 text-12 opacity-50">
          📝
        </div>
        <p class="text-5 text-$vp-c-text-2">
          暂无文章内容
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.archives-container {
  padding: 24px;
}

.year-stats {
  min-width: 120px;
  text-align: center;
}

@media (max-width: 768px) {
  .archives-container {
    padding: 16px;
  }

  .year-stats {
    min-width: 100px;
  }
}
</style>
