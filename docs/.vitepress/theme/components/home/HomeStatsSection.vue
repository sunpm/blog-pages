<script setup lang="ts">
import StatsCard from '../common/StatsCard.vue'
</script>

<template>
  <section class="mb-16">
    <div class="mb-8 text-center">
      <h2 class="mb-4 text-6 text-$vp-c-text-1 font-semibold">
        📊 站点统计
      </h2>
      <p class="text-4 text-$vp-c-text-2">
        见证成长的脚步与时光的印记
      </p>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <StatsCard
        icon="📚"
        label="文章总数"
        :value="48"
        description="记录技术成长"
      />

      <StatsCard
        icon="🏷️"
        label="标签数量"
        :value="25"
        description="知识体系分类"
      />

      <StatsCard
        icon="💭"
        label="说说数量"
        :value="12"
        description="分享日常思考"
      />
    </div>
  </section>
</template>
