<script setup lang="ts">
interface Props {
  icon?: string
  label: string
  value: number | string
  description?: string
}

withDefaults(defineProps<Props>(), {
  icon: '',
  description: '',
})
</script>

<template>
  <div class="stats-card py-6 text-center">
    <div v-if="icon" class="mb-3 text-6 opacity-80">
      {{ icon }}
    </div>
    <div class="mb-2 text-8 text-$vp-c-brand-1 font-bold">
      {{ value }}
    </div>
    <div class="mb-1 text-4.5 text-$vp-c-text-1 font-medium">
      {{ label }}
    </div>
    <div v-if="description" class="text-3.5 text-$vp-c-text-3">
      {{ description }}
    </div>
  </div>
</template>

<style scoped>
.stats-card {
  transition: transform 0.2s ease;
}

.stats-card:hover {
  transform: translateY(-2px);
}
</style>
