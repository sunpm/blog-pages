<script setup lang="ts">
interface StatItem {
  number: string
  label: string
}

const stats: StatItem[] = [
  { number: '50+', label: '技术文章' },
  { number: '10+', label: '开源项目' },
  { number: '3年', label: '技术经验' },
  { number: '1000+', label: '代码提交' },
]
</script>

<template>
  <section class="mb-20">
    <div class="grid grid-cols-2 gap-6 px-5 lg:grid-cols-4 lg:px-0">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="border border-$vp-c-border rounded-3 bg-$vp-c-bg-soft p-8 text-center transition-all duration-300 hover:(border-$vp-c-brand-1 shadow-lg -translate-y-1) lg:p-8"
      >
        <div class="mb-2 text-4xl text-$vp-c-brand-1 font-bold lg:text-5xl">
          {{ stat.number }}
        </div>
        <div class="text-4 text-$vp-c-text-2 font-medium">
          {{ stat.label }}
        </div>
      </div>
    </div>
  </section>
</template>
