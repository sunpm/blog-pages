<script setup lang="ts">
interface StatItem {
  number: string
  label: string
  icon: string
  description: string
}

const stats: StatItem[] = [
  {
    number: '50+',
    label: '技术文章',
    icon: '📝',
    description: '深度技术分享',
  },
  {
    number: '10+',
    label: '开源项目',
    icon: '🚀',
    description: '持续开源贡献',
  },
  {
    number: '3年',
    label: '技术经验',
    icon: '💡',
    description: '不断学习成长',
  },
  {
    number: '1000+',
    label: '代码提交',
    icon: '⚡',
    description: '代码质量保证',
  },
]
</script>

<template>
  <section class="mb-16">
    <div class="mb-8 text-center">
      <h2 class="mb-2 text-6 text-$vp-c-text-1 font-semibold">
        📊 数据概览
      </h2>
      <p class="text-4 text-$vp-c-text-2">
        用数字见证成长轨迹
      </p>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 sm:grid-cols-2">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="border border-$vp-c-border rounded-3 bg-$vp-c-bg-alt p-6 text-center"
      >
        <!-- 图标 -->
        <div class="mb-3 text-6">
          {{ stat.icon }}
        </div>

        <!-- 数字 -->
        <div class="mb-2 text-6 text-$vp-c-brand-1 font-bold">
          {{ stat.number }}
        </div>

        <!-- 标签 -->
        <div class="mb-1 text-4 text-$vp-c-text-1 font-medium">
          {{ stat.label }}
        </div>

        <!-- 描述 -->
        <div class="text-3.5 text-$vp-c-text-2">
          {{ stat.description }}
        </div>
      </div>
    </div>
  </section>
</template>
