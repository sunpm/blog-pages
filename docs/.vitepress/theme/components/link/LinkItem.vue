<script setup lang="ts">
import CustomCard from '../common/CustomCard.vue'

export interface LinkItemData {
  name: string
  url: string
  icon: string
  description: string
}

defineOptions({
  name: 'LinkItem',
})

const props = defineProps<{
  data: LinkItemData
}>()
</script>

<template>
  <a
    :href="props.data.url"
    target="_blank"
    rel="noopener noreferrer"
    class="group friend-card block"
  >
    <CustomCard
      :bordered="true"
      class="friend-card-inner h-full transition-all duration-300 group-hover:shadow-lg"
    >
      <div class="h-full flex flex-col items-center text-center">
        <!-- 头像 -->
        <div class="relative mb-4">
          <div class="h-16 w-16 overflow-hidden border-3 border-$vp-c-border rounded-full transition-all duration-300 group-hover:scale-110 group-hover:border-$vp-c-brand-1">
            <img
              :src="props.data.icon"
              :alt="props.data.name"
              class="h-full w-full object-cover"
              loading="lazy"
            >
          </div>
          <!-- 在线状态指示器 -->
          <div class="absolute h-4 w-4 border-2 border-white rounded-full bg-green-500 -bottom-1 -right-1" />
        </div>

        <!-- 名称 -->
        <h3 class="mb-2 text-5 text-$vp-c-text-1 font-bold transition-colors group-hover:text-$vp-c-brand-1">
          {{ props.data.name }}
        </h3>

        <!-- 描述 -->
        <p class="line-clamp-3 flex-1 text-3.5 text-$vp-c-text-2 leading-5">
          {{ props.data.description }}
        </p>

        <!-- 访问链接 -->
        <div class="mt-4 w-full border-t border-$vp-c-border pt-3">
          <div class="flex items-center justify-center gap-2 text-3.5 text-$vp-c-text-2 transition-colors group-hover:text-$vp-c-brand-1">
            <span>🔗</span>
            <span class="truncate font-mono">{{ props.data.url.replace('https://', '').replace('http://', '') }}</span>
          </div>
        </div>
      </div>
    </CustomCard>
  </a>
</template>

<style scoped>
.friend-card {
  text-decoration: none;
}

.friend-card-inner {
  height: 100%;
  min-height: 240px;
  padding: 20px;
}

.friend-card:hover .friend-card-inner {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .friend-card-inner {
    min-height: 200px;
    padding: 16px;
  }
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
