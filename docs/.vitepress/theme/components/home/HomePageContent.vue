<script setup lang="ts">
import { computed } from 'vue'
import { talks } from '../../../../data/talks'
import TalkItem from '../talk/TalkItem.vue'
import HomeStatsSection from './HomeStatsSection.vue'

// 只显示最新的5条说说
const recentTalks = computed(() => talks.slice(0, 5))
</script>

<template>
  <div class="mx-auto max-w-280 px-6 py-16">
    <!-- 最新动态 -->
    <section class="mb-16">
      <div class="mb-8 text-center">
        <h2 class="mb-4 text-6 text-$vp-c-text-1 font-semibold">
          💭 最新动态
        </h2>
        <p class="text-4 text-$vp-c-text-2">
          分享最新的技术感悟
        </p>
      </div>

      <NCard :bordered="true" class="talks-section">
        <NSpace
          v-if="recentTalks.length > 0"
          vertical
          :size="16"
        >
          <TalkItem
            v-for="(talk, index) in recentTalks"
            :key="index"
            :content="talk.content"
            :time="talk.date"
          />

          <!-- 查看更多按钮 -->
          <div class="mt-6 text-center">
            <NButton
              type="primary"
              ghost
              tag="a"
              href="/talks"
              size="medium"
            >
              查看更多说说 →
            </NButton>
          </div>
        </NSpace>

        <div v-else class="py-8 text-center">
          <div class="mb-4 text-8 opacity-50">
            📝
          </div>
          <p class="text-4 text-$vp-c-text-2">
            暂无说说内容
          </p>
        </div>
      </NCard>
    </section>

    <!-- 统计信息 -->
    <HomeStatsSection />
  </div>
</template>

<style scoped>
.talks-section {
  padding: 24px;
}

@media (max-width: 768px) {
  .talks-section {
    padding: 16px;
  }
}
</style>
