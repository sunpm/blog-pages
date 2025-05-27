<script setup lang="ts">
interface TechCategory {
  title: string
  icon: string
  tags: string[]
  color: string
  description: string
}

const techCategories: TechCategory[] = [
  {
    title: '前端开发',
    icon: '🎨',
    tags: ['Vue.js', 'React', 'TypeScript', 'Vite', 'UnoCSS'],
    color: 'from-blue-500 to-purple-500',
    description: '现代化前端技术栈',
  },
  {
    title: '后端开发',
    icon: '⚙️',
    tags: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Redis'],
    color: 'from-emerald-500 to-cyan-500',
    description: '高性能后端解决方案',
  },
  {
    title: '开发工具',
    icon: '🛠️',
    tags: ['Git', 'Docker', 'Nginx', 'Linux', 'VS Code'],
    color: 'from-orange-500 to-red-500',
    description: '提升开发效率的工具',
  },
]

function getTagColor(index: number) {
  const colors = [
    'from-blue-500 to-purple-500',
    'from-emerald-500 to-cyan-500',
    'from-pink-500 to-rose-500',
    'from-amber-500 to-orange-500',
    'from-indigo-500 to-blue-500',
    'from-green-500 to-emerald-500',
    'from-red-500 to-pink-500',
    'from-violet-500 to-purple-500',
  ]
  return colors[index % colors.length]
}
</script>

<template>
  <section class="mb-32">
    <div class="mb-16 text-center">
      <h2 class="mb-4 flex-center gap-3 text-8 text-$vp-c-text-1 font-semibold lg:text-9">
        <span class="animate-spin-slow">🔧</span>
        技术栈
      </h2>
      <p class="text-4.5 text-$vp-c-text-2">
        掌握的技术与持续学习的方向
      </p>
    </div>

    <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
      <div
        v-for="(category, categoryIndex) in techCategories"
        :key="category.title"
        class="group relative"
        :style="{ animationDelay: `${categoryIndex * 0.2}s` }"
      >
        <!-- 背景光效 -->
        <div :class="`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-15 rounded-5 blur-2xl transition-all duration-700 scale-95 group-hover:scale-105`" />

        <!-- 卡片主体 -->
        <div class="relative border border-$vp-c-border/50 rounded-5 from-$vp-c-bg-soft/80 to-$vp-c-bg-soft/60 bg-gradient-to-br p-10 backdrop-blur-sm transition-all duration-500 hover:(border-transparent bg-$vp-c-bg-soft shadow-2xl -translate-y-2) lg:p-10">
          <!-- 顶部装饰 -->
          <div :class="`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${category.color} rounded-t-5`" />

          <!-- 标题区域 -->
          <div class="mb-8 text-center">
            <div class="mb-4 text-12 transition-transform duration-300 group-hover:scale-110">
              {{ category.icon }}
            </div>
            <h3 class="mb-2 text-6 text-$vp-c-text-1 font-bold">
              {{ category.title }}
            </h3>
            <p class="text-3.5 text-$vp-c-text-2/80">
              {{ category.description }}
            </p>
          </div>

          <!-- 技术标签 -->
          <div class="flex flex-wrap justify-center gap-3">
            <span
              v-for="(tag, tagIndex) in category.tags"
              :key="tag"
              :class="`group/tag inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-3.5 font-medium transition-all duration-300 hover:(-translate-y-1 scale-105) bg-gradient-to-r ${getTagColor(tagIndex)} text-white shadow-lg hover:shadow-xl`"
              :style="{ animationDelay: `${(categoryIndex * 0.2) + (tagIndex * 0.1)}s` }"
            >
              <span class="opacity-80 transition-opacity duration-300 group-hover/tag:opacity-100">
                {{ tag }}
              </span>
              <span class="scale-0 transform text-2.5 opacity-0 transition-all duration-300 group-hover/tag:scale-100 group-hover/tag:opacity-80">
                ✨
              </span>
            </span>
          </div>

          <!-- 装饰角标 -->
          <div class="absolute right-6 top-6 h-4 w-4 animate-pulse rounded-full from-$vp-c-brand-1 to-$vp-c-brand-2 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
        </div>
      </div>
    </div>

    <!-- 底部装饰 -->
    <div class="mt-20 text-center">
      <div class="mx-auto mb-6 h-1 w-32 rounded-full from-transparent via-$vp-c-brand-1 to-transparent bg-gradient-to-r" />
      <div class="text-4 text-$vp-c-text-3 opacity-60">
        持续学习，永不止步 🚀
      </div>
    </div>
  </section>
</template>

<style>
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.group {
  animation: slideInUp 0.8s ease-out both;
}

.group/tag {
  animation: fadeInScale 0.5s ease-out both;
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}
</style>
