<script setup lang="ts">
import StatsCard from '../common/StatsCard.vue'

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
    <StatsCard
      icon="🏷️"
      label="总标签数"
      :value="totalTags"
      description="每个标签都承载着知识"
    />

    <StatsCard
      icon="📚"
      label="文章总数"
      :value="totalPosts"
      description="记录思考与成长轨迹"
    />
  </div>
</template>
