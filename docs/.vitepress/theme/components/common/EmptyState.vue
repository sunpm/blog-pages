<script setup lang="ts">
interface Props {
  icon?: string
  title?: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  icon: '📝',
  title: '暂无内容',
  description: '',
})
</script>

<template>
  <div class="py-16 text-center">
    <div class="mb-4 text-12 opacity-50">
      {{ icon }}
    </div>
    <div class="mb-2 text-5 text-$vp-c-text-1 font-medium">
      {{ title }}
    </div>
    <p v-if="description" class="text-4 text-$vp-c-text-2">
      {{ description }}
    </p>
  </div>
</template>
