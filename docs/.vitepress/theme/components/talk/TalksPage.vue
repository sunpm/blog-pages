<script setup lang="ts">
import { computed, ref } from 'vue'
import { talks } from '../../../../data/talks'
import PageHeader from '../common/PageHeader.vue'
import TalkItem from './TalkItem.vue'

// 分页相关
const pageSize = 10
const currentPage = ref(1)

// 计算总页数
const totalPages = computed(() => Math.ceil(talks.length / pageSize))

// 当前页的说说
const currentTalks = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return talks.slice(start, end)
})

// 分页按钮
function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    // 滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="mx-auto max-w-280 px-6 py-16">
    <!-- 页面头部 -->
    <PageHeader
      title="说说"
      description="记录日常思考与技术感悟"
      icon="💭"
      :show-stats="true"
      stats-label="总说说数"
      :stats-value="talks.length"
    />

    <!-- 说说列表 -->
    <section class="mb-16">
      <NCard :bordered="true" class="talks-container">
        <NSpace
          v-if="currentTalks.length > 0"
          vertical
          :size="16"
        >
          <TalkItem
            v-for="(talk, index) in currentTalks"
            :key="index"
            :content="talk.content"
            :time="talk.date"
          />
        </NSpace>

        <div v-else class="py-12 text-center">
          <div class="mb-4 text-12 opacity-50">
            📝
          </div>
          <p class="text-5 text-$vp-c-text-2">
            暂无说说内容
          </p>
        </div>
      </NCard>
    </section>

    <!-- 分页 -->
    <section v-if="totalPages > 1" class="text-center">
      <div class="inline-flex items-center gap-2">
        <!-- 上一页 -->
        <button
          :disabled="currentPage === 1"
          class="h-10 w-10 flex items-center justify-center border border-$vp-c-border rounded-2 bg-$vp-c-bg-alt text-4 text-$vp-c-text-1 transition-colors disabled:(cursor-not-allowed opacity-50) hover:(border-$vp-c-brand-1 text-$vp-c-brand-1)"
          @click="goToPage(currentPage - 1)"
        >
          ←
        </button>

        <!-- 页码 -->
        <button
          v-for="page in totalPages"
          :key="page"
          class="h-10 min-w-10 flex items-center justify-center border rounded-2 px-3 text-4 transition-colors" :class="[
            currentPage === page
              ? 'border-$vp-c-brand-1 bg-$vp-c-brand-1 text-white'
              : 'border-$vp-c-border bg-$vp-c-bg-alt text-$vp-c-text-1 hover:(border-$vp-c-brand-1 text-$vp-c-brand-1)',
          ]"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>

        <!-- 下一页 -->
        <button
          :disabled="currentPage === totalPages"
          class="h-10 w-10 flex items-center justify-center border border-$vp-c-border rounded-2 bg-$vp-c-bg-alt text-4 text-$vp-c-text-1 transition-colors disabled:(cursor-not-allowed opacity-50) hover:(border-$vp-c-brand-1 text-$vp-c-brand-1)"
          @click="goToPage(currentPage + 1)"
        >
          →
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.talks-container {
  padding: 24px;
}

@media (max-width: 768px) {
  .talks-container {
    padding: 16px;
  }
}
</style>
