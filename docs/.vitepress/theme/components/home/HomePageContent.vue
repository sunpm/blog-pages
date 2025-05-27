<script setup lang="ts">
import HomeStatsSection from './HomeStatsSection.vue'
import HomeTechSection from './HomeTechSection.vue'
</script>

<template>
  <div class="max-w-300 mx-auto px-6 lg:px-6 py-15 lg:py-20">
    <!-- talk 轮博区域 -->
    <section class="mb-20">
      <TalkList :max-items="3" />
    </section>

    <!-- 统计信息 -->
    <HomeStatsSection />

    <!-- 技术栈展示 -->
    <HomeTechSection />
  </div>
</template> 
