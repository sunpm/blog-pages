<script setup lang="ts">
import HomeStatsSection from './HomeStatsSection.vue'
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
      <div class="border border-$vp-c-border rounded-3 bg-$vp-c-bg-soft p-6">
        <TalkList :max-items="3" />
      </div>
    </section>

    <!-- 统计信息 -->
    <HomeStatsSection />
  </div>
</template>
