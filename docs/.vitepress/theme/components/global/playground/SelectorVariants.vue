<script setup lang="ts">
withDefaults(defineProps<{
  variants: string[]
}>(), {
  variants: () => ['sm', '', 'lg', 'xl', '2xl', '3xl'],
})

const variant = defineModel()

function set(str: string) {
  variant.value = str
}
function has(str: string) {
  return variant.value === str
}
</script>

<template>
  <div class="selector flex flex-wrap gap-2">
    <div
      v-for="s of variants"
      :key="s"
      class="item"
      :class="{ active: has(s), default: !s }"
      @click="set(s)"
    >
      {{ s || 'default' }}
    </div>
  </div>
</template>

<style scoped lang="postcss">
.selector {
  height: max-content;
}
.item {
  height: max-content;
  @apply px-2 py-0.5 inline-block rounded
  border-1 border-solid border-opacity-50 dark:border-opacity-50
  text-sm cursor-pointer select-none;
}
.item.active {
  @apply border-[var(--vp-c-brand-1)] text-[var(--vp-c-brand-1)];
}
</style>
  <!-- @apply border-sky-500 text-sky-500; -->
  <!-- @apply border-[color:var(&#45;&#45;vp-c-brand-1)] text-[color:var(&#45;&#45;vp-c-brand-1)]; -->
