<script setup lang="ts">
interface TechCategory {
  title: string
  tags: string[]
}

const techCategories: TechCategory[] = [
  {
    title: '前端开发',
    tags: ['Vue.js', 'React', 'TypeScript', 'Vite', 'UnoCSS'],
  },
  {
    title: '后端开发',
    tags: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    title: '开发工具',
    tags: ['Git', 'Docker', 'Nginx', 'Linux', 'VS Code'],
  },
]
</script>

<template>
  <section class="text-center">
    <h2 class="mb-12 text-8 text-$vp-c-text-1 font-semibold lg:text-9">
      🔧 技术栈
    </h2>

    <div class="grid grid-cols-1 mt-8 gap-8 lg:grid-cols-3">
      <div
        v-for="category in techCategories"
        :key="category.title"
        class="border border-$vp-c-border rounded-4 bg-$vp-c-bg-soft p-8 transition-all duration-300 lg:p-8 hover:(shadow-md -translate-y-1)"
      >
        <h3 class="mb-5 text-5 text-$vp-c-text-1 font-semibold">
          {{ category.title }}
        </h3>

        <div class="flex flex-wrap justify-center gap-2">
          <span
            v-for="tag in category.tags"
            :key="tag"
            class="inline-block rounded-1.5 bg-$vp-c-brand-soft px-3 py-1.5 text-3.5 text-$vp-c-brand-1 font-medium transition-all duration-300 hover:(bg-$vp-c-brand-1 text-white -translate-y-0.5)"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
