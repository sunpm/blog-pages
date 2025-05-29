<script setup lang="ts">
interface Props {
  title: string
  description?: string
  icon?: string
  showStats?: boolean
  statsLabel?: string
  statsValue?: number | string
}

withDefaults(defineProps<Props>(), {
  description: '',
  icon: '',
  showStats: false,
  statsLabel: '',
  statsValue: 0,
})
</script>

<template>
  <section class="mb-16 text-center">
    <h1 class="mb-4 text-8 text-$vp-c-text-1 font-bold">
      <span v-if="icon" class="mr-2">{{ icon }}</span>
      {{ title }}
    </h1>
    <p v-if="description" class="text-5 text-$vp-c-text-2">
      {{ description }}
    </p>
    <div v-if="showStats && statsLabel" class="mt-6">
      <NStatistic :label="statsLabel" :value="statsValue" />
    </div>
  </section>
</template>
