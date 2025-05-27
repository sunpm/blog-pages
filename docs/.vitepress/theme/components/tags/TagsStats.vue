<script setup lang="ts">
interface Props {
  totalTags?: number
  totalPosts?: number
}

withDefaults(defineProps<Props>(), {
  totalTags: 25,
  totalPosts: 48,
})
</script>

<template>
  <div class="mb-12 flex flex-col justify-center gap-6 lg:flex-row">
    <div class="min-w-30 flex-center flex-col border border-$vp-c-border rounded-3 bg-$vp-c-bg-soft px-8 py-6 transition-all duration-300 hover:(border-$vp-c-brand-1 shadow-md -translate-y-1)">
      <span class="mb-1 text-7 text-$vp-c-brand-1 font-bold">
        {{ totalTags }}
      </span>
      <span class="text-3.5 text-$vp-c-text-2 font-medium">
        总标签数
      </span>
    </div>

    <div class="min-w-30 flex-center flex-col border border-$vp-c-border rounded-3 bg-$vp-c-bg-soft px-8 py-6 transition-all duration-300 hover:(border-$vp-c-brand-1 shadow-md -translate-y-1)">
      <span class="mb-1 text-7 text-$vp-c-brand-1 font-bold">
        {{ totalPosts }}
      </span>
      <span class="text-3.5 text-$vp-c-text-2 font-medium">
        文章总数
      </span>
    </div>
  </div>
</template>
