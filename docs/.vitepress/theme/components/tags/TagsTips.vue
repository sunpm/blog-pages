<script setup lang="ts">
const tips = [
  { icon: '🎯', text: '点击标签查看相关文章', desc: '探索特定主题的所有内容' },
  { icon: '📊', text: '标签大小表示文章数量', desc: '数字越大，内容越丰富' },
  { icon: '🔍', text: '使用搜索快速定位标签', desc: '输入关键词即时筛选' },
  { icon: '⌨️', text: '支持键盘导航和快捷键', desc: '提升浏览效率' },
]
</script>

<template>
  <div class="animate-fadeInUp-delayed">
    <div class="relative overflow-hidden border border-$vp-c-border/50 rounded-4 from-$vp-c-bg-soft to-$vp-c-bg-soft/80 bg-gradient-to-br p-8 backdrop-blur-sm">
      <!-- 装饰性背景 -->
      <div class="absolute left-0 right-0 top-0 h-1 from-emerald-500 via-blue-500 via-purple-500 to-pink-500 bg-gradient-to-r" />
      <div class="absolute right-8 top-2 h-32 w-32 rounded-full from-blue-500/5 to-purple-500/5 bg-gradient-to-br blur-2xl" />
      <div class="absolute bottom-4 left-6 h-24 w-24 rounded-full from-emerald-500/5 to-cyan-500/5 bg-gradient-to-br blur-xl" />

      <!-- 标题部分 -->
      <div class="relative mb-8 flex items-center gap-3">
        <div class="h-12 w-12 flex-center border border-blue-500/20 rounded-3 from-blue-500/10 to-purple-500/10 bg-gradient-to-br">
          <span class="text-6">💡</span>
        </div>
        <div>
          <h3 class="mb-1 text-5 text-$vp-c-text-1 font-bold">
            使用技巧
          </h3>
          <p class="text-3.5 text-$vp-c-text-2">
            让你的标签浏览更高效
          </p>
        </div>
      </div>

      <!-- 技巧列表 -->
      <div class="relative grid gap-4 md:grid-cols-2">
        <div
          v-for="(tip, index) in tips"
          :key="index"
          class="group flex items-start gap-4 border border-$vp-c-border/30 rounded-3 bg-$vp-c-bg-alt/30 p-4 transition-all duration-300 hover:(border-$vp-c-brand-1/30 bg-$vp-c-bg-alt/60 -translate-y-0.5)"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- 图标 -->
          <div class="h-10 w-10 flex-center rounded-2 from-$vp-c-brand-1/10 to-$vp-c-brand-1/5 bg-gradient-to-br transition-transform duration-300 group-hover:scale-110">
            <span class="text-5">{{ tip.icon }}</span>
          </div>

          <!-- 内容 -->
          <div class="min-w-0 flex-1">
            <div class="mb-1 text-4 text-$vp-c-text-1 font-semibold leading-snug">
              {{ tip.text }}
            </div>
            <div class="text-3.5 text-$vp-c-text-2/80 leading-relaxed">
              {{ tip.desc }}
            </div>
          </div>

          <!-- 装饰箭头 -->
          <div class="text-$vp-c-brand-1 opacity-0 transition-opacity duration-300 group-hover:opacity-60">
            <span class="text-4">→</span>
          </div>
        </div>
      </div>

      <!-- 底部装饰 -->
      <div class="relative mt-8 border-t border-$vp-c-border/30 pt-6">
        <div class="flex items-center justify-center gap-2 text-3.5 text-$vp-c-text-3">
          <span>✨</span>
          <span>享受你的标签探索之旅</span>
          <span>✨</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp-delayed {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.group {
  animation: slideInUp 0.6s ease-out both;
}
</style>
