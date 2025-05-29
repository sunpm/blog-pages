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

      <div class="talks-section">
        <div
          v-if="recentTalks.length > 0"
          class="space-y-4"
        >
          <TalkItem
            v-for="(talk, index) in recentTalks"
            :key="index"
            :content="talk.content"
            :time="talk.date"
          />

          <!-- 查看更多按钮 -->
          <div class="mt-6 text-center">
            <a
              href="/talks"
              class="inline-flex items-center gap-2 border border-$vp-c-border rounded-2 bg-$vp-c-bg-alt px-4 py-2 text-4 text-$vp-c-text-1 transition-colors hover:(border-$vp-c-brand-1 text-$vp-c-brand-1)"
            >
              <span>查看更多说说</span>
              <span class="text-3">→</span>
            </a>
          </div>
        </div>

        <div v-else class="py-8 text-center">
          <div class="mb-4 text-8 opacity-50">
            📝
          </div>
          <p class="text-4 text-$vp-c-text-2">
            暂无说说内容
          </p>
        </div>
      </div>
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
