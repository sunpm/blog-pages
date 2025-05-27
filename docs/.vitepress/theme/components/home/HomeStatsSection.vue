<script setup lang="ts">
interface StatItem {
  number: string
  label: string
}

const stats: StatItem[] = [
  { number: '50+', label: '技术文章' },
  { number: '10+', label: '开源项目' },
  { number: '3年', label: '技术经验' },
  { number: '1000+', label: '代码提交' }
]
</script>

<template>
  <section class="mb-20">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 px-5 lg:px-0">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="text-center p-8 lg:p-8 bg-$vp-c-bg-soft border border-$vp-c-border rounded-3 transition-all duration-300 hover:(-translate-y-1 shadow-lg border-$vp-c-brand-1)"
      >
        <div class="text-4xl lg:text-5xl font-bold text-$vp-c-brand-1 mb-2">
          {{ stat.number }}
        </div>
        <div class="text-4 text-$vp-c-text-2 font-medium">
          {{ stat.label }}
        </div>
      </div>
    </div>
  </section>
</template> 
