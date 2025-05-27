<script setup lang="ts">
const tips = [
  '点击标签查看相关文章',
  '标签大小表示文章数量', 
  '使用搜索快速定位标签',
  '支持键盘导航和快捷键'
]
</script>

<template>
  <div class="animate-fadeInUp-delayed">
    <div class="bg-$vp-c-bg-soft border border-$vp-c-border rounded-3 p-8 relative overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-0.75 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>
      
      <div class="flex-start gap-2 mb-5">
        <span class="text-5">💡</span>
        <span class="text-4.5 font-semibold text-$vp-c-text-1">使用技巧</span>
      </div>
      
      <ul class="space-y-2">
        <li 
          v-for="tip in tips" 
          :key="tip"
          class="relative pl-6 text-$vp-c-text-2 text-3.75 leading-relaxed"
        >
          <span class="absolute left-0 top-2 text-3.5">✨</span>
          {{ tip }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
@keyframes fadeInUp {
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
  animation: fadeInUp 0.6s ease-out 0.3s both;
}
</style> 
