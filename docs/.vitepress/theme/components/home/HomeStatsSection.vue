<script setup lang="ts">
interface StatItem {
  number: string
  label: string
  icon: string
  color: string
  description: string
}

const stats: StatItem[] = [
  {
    number: '50+',
    label: '技术文章',
    icon: '📝',
    color: 'from-blue-500 to-cyan-500',
    description: '深度技术分享',
  },
  {
    number: '10+',
    label: '开源项目',
    icon: '🚀',
    color: 'from-emerald-500 to-teal-500',
    description: '持续开源贡献',
  },
  {
    number: '3年',
    label: '技术经验',
    icon: '💡',
    color: 'from-purple-500 to-pink-500',
    description: '不断学习成长',
  },
  {
    number: '1000+',
    label: '代码提交',
    icon: '⚡',
    color: 'from-amber-500 to-orange-500',
    description: '代码质量保证',
  },
]
</script>

<template>
  <section class="mb-32">
    <div class="mb-16 text-center">
      <h2 class="mb-4 flex-center gap-3 text-8 text-$vp-c-text-1 font-semibold lg:text-9">
        <span class="animate-pulse">📊</span>
        数据概览
      </h2>
      <p class="text-4.5 text-$vp-c-text-2">
        用数字见证成长轨迹
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 px-5 lg:grid-cols-4 sm:grid-cols-2 lg:px-0">
      <div
        v-for="(stat, index) in stats"
        :key="stat.label"
        class="group relative"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <!-- 背景光效 -->
        <div :class="`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-4 blur-xl transition-all duration-500 scale-90 group-hover:scale-110`" />

        <!-- 卡片主体 -->
        <div class="relative h-50 flex-center flex-col border border-$vp-c-border/50 rounded-4 bg-$vp-c-bg-soft/80 p-8 backdrop-blur-sm transition-all duration-500 hover:(border-transparent bg-$vp-c-bg-soft shadow-2xl -translate-y-2) lg:p-8">
          <!-- 顶部渐变线 -->
          <div :class="`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-4`" />

          <!-- 图标 -->
          <div class="mb-4 text-8 transition-transform duration-300 group-hover:scale-110">
            {{ stat.icon }}
          </div>

          <!-- 数字 -->
          <div class="relative mb-3">
            <div :class="`text-8 font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent lg:text-9`">
              {{ stat.number }}
            </div>
            <div :class="`absolute inset-0 text-8 font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent opacity-20 blur-sm lg:text-9`">
              {{ stat.number }}
            </div>
          </div>

          <!-- 标签 -->
          <div class="mb-2 text-4.5 text-$vp-c-text-1 font-semibold">
            {{ stat.label }}
          </div>

          <!-- 描述 -->
          <div class="text-center text-3.5 text-$vp-c-text-2/80 leading-relaxed">
            {{ stat.description }}
          </div>

          <!-- 装饰元素 -->
          <div class="absolute right-4 top-4 h-3 w-3 rounded-full bg-$vp-c-brand-1 opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.group {
  animation: slideInUp 0.6s ease-out both;
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}
</style>
