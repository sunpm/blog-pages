<script setup lang="ts">
interface TechCategory {
  title: string
  tags: string[]
}

const techCategories: TechCategory[] = [
  {
    title: '前端开发',
    tags: ['Vue.js', 'React', 'TypeScript', 'Vite', 'UnoCSS']
  },
  {
    title: '后端开发', 
    tags: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Redis']
  },
  {
    title: '开发工具',
    tags: ['Git', 'Docker', 'Nginx', 'Linux', 'VS Code']
  }
]
</script>

<template>
  <section class="text-center">
    <h2 class="text-8 lg:text-9 font-semibold text-$vp-c-text-1 mb-12">
      🔧 技术栈
    </h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
      <div
        v-for="category in techCategories"
        :key="category.title"
        class="p-8 lg:p-8 bg-$vp-c-bg-soft border border-$vp-c-border rounded-4 transition-all duration-300 hover:(-translate-y-1 shadow-md)"
      >
        <h3 class="text-5 font-semibold text-$vp-c-text-1 mb-5">
          {{ category.title }}
        </h3>
        
        <div class="flex flex-wrap gap-2 justify-center">
          <span
            v-for="tag in category.tags"
            :key="tag"
            class="inline-block px-3 py-1.5 bg-$vp-c-brand-soft text-$vp-c-brand-1 rounded-1.5 text-3.5 font-medium transition-all duration-300 hover:(bg-$vp-c-brand-1 text-white -translate-y-0.5)"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template> 
