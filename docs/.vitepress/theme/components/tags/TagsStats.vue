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
  <div class="grid grid-cols-1 mb-16 gap-6 lg:grid-cols-2">
    <!-- 总标签数卡片 -->
    <div class="border border-$vp-c-border rounded-3 bg-$vp-c-bg-alt p-6 text-center">
      <div class="mb-2 text-6 text-$vp-c-brand-1 font-bold">
        {{ totalTags }}
      </div>
      <div class="mb-1 flex-center gap-2">
        <span class="text-5">🏷️</span>
        <span class="text-4 text-$vp-c-text-1 font-medium">
          总标签数
        </span>
      </div>
      <div class="text-3.5 text-$vp-c-text-2">
        每个标签都承载着知识
      </div>
    </div>

    <!-- 文章总数卡片 -->
    <div class="border border-$vp-c-border rounded-3 bg-$vp-c-bg-alt p-6 text-center">
      <div class="mb-2 text-6 text-$vp-c-brand-1 font-bold">
        {{ totalPosts }}
      </div>
      <div class="mb-1 flex-center gap-2">
        <span class="text-5">📚</span>
        <span class="text-4 text-$vp-c-text-1 font-medium">
          文章总数
        </span>
      </div>
      <div class="text-3.5 text-$vp-c-text-2">
        记录思考与成长轨迹
      </div>
    </div>
  </div>
</template>
