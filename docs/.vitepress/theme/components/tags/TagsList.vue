<script lang="ts" setup>
import { useTitle, useUrlSearchParams } from '@vueuse/core'
import { withBase } from 'vitepress'
import { computed, ref } from 'vue'
import { META } from '../../../config/app.config'
import { useTags } from '../../composables'
import CustomCard from '../common/CustomCard.vue'

defineOptions({
  name: 'TagsList',
})

const { getTagsList, filterTagsPosts } = useTags()
const { tag } = useUrlSearchParams()
const searchQuery = ref('')

const data = computed(() => getTagsList())
const posts = computed(() => filterTagsPosts(tag as string))

// 过滤标签 - 将Map转换为数组
const filteredTags = computed(() => {
  const tagsArray = Array.from(data.value.entries())
  if (!searchQuery.value)
    return tagsArray
  return tagsArray.filter(([tagName]: [string, number]) =>
    tagName.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

useTitle(tag as string, { titleTemplate: `标签 - %s | ${META.title}` })

function getTagColor(index: number) {
  const colors = [
    'from-blue-500 to-purple-500',
    'from-emerald-500 to-cyan-500',
    'from-pink-500 to-rose-500',
    'from-amber-500 to-orange-500',
    'from-indigo-500 to-blue-500',
    'from-green-500 to-emerald-500',
    'from-red-500 to-pink-500',
    'from-violet-500 to-purple-500',
    'from-cyan-500 to-blue-500',
    'from-orange-500 to-red-500',
  ]
  return colors[index % colors.length]
}
</script>

<template>
  <div class="vp-raw">
    <!-- 搜索框 -->
    <div class="relative mb-8">
      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索标签..."
          class="w-full border border-$vp-c-border rounded-3 bg-$vp-c-bg-soft px-5 py-4 pl-12 text-4 transition-all duration-300 focus:(border-$vp-c-brand-1 bg-$vp-c-bg shadow-lg outline-none) hover:border-$vp-c-brand-1/50"
        >
        <div class="absolute left-4 top-1/2 text-5 text-$vp-c-text-2 -translate-y-1/2">
          🔍
        </div>
        <div v-if="searchQuery" class="absolute right-4 top-1/2 -translate-y-1/2">
          <button
            class="h-6 w-6 flex-center rounded-full text-3 text-$vp-c-text-2 transition-all duration-200 hover:bg-$vp-c-bg-mute hover:text-$vp-c-text-1"
            @click="searchQuery = ''"
          >
            ✕
          </button>
        </div>
      </div>

      <!-- 搜索结果提示 -->
      <div v-if="searchQuery" class="mt-3 text-3.5 text-$vp-c-text-2">
        找到 {{ filteredTags.length }} 个匹配的标签
      </div>
    </div>

    <!-- 标签云 -->
    <div class="mb-10">
      <h3 class="mb-6 flex-center gap-2 text-5 text-$vp-c-text-1 font-semibold">
        <span>🏷️</span>
        标签云
      </h3>

      <div class="flex flex-wrap gap-3">
        <a
          v-for="(item, index) in filteredTags"
          :key="index"
          :class="{
            'ring-2 ring-$vp-c-brand-1 scale-105': tag === item[0],
          }"
          :href="withBase(`?tag=${item[0]}`)"
          class="group relative inline-flex items-center gap-2 border border-$vp-c-border rounded-full bg-$vp-c-bg-soft px-4 py-2 transition-all duration-300 hover:(scale-105 border-transparent -translate-y-0.5)"
        >
          <!-- 渐变背景 -->
          <div :class="`absolute inset-0 bg-gradient-to-r ${getTagColor(index)} opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300`" />

          <!-- 内容 -->
          <div class="relative flex items-center gap-2">
            <span class="text-3.5 text-$vp-c-text-2 font-medium">#</span>
            <span class="text-3.75 text-$vp-c-text-1 font-medium transition-colors duration-300 group-hover:text-$vp-c-brand-1">
              {{ item[0] }}
            </span>
            <span :class="`px-2 py-0.5 text-3 font-semibold rounded-full bg-gradient-to-r ${getTagColor(index)} text-white`">
              {{ item[1] }}
            </span>
          </div>
        </a>
      </div>
    </div>

    <!-- 文章列表 -->
    <div v-if="tag && posts.length > 0" class="space-y-4">
      <h3 class="mb-6 flex-center gap-2 text-5 text-$vp-c-text-1 font-semibold">
        <span>📄</span>
        「{{ tag }}」标签下的文章
      </h3>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div v-for="(item, index) in posts" :key="index" class="group relative">
          <!-- 卡片光影效果 -->
          <div class="absolute inset-0 scale-95 rounded-3 from-blue-500/10 to-purple-500/10 bg-gradient-to-br opacity-0 blur-xl transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />

          <a
            :href="withBase(item.regularPath)"
            :title="item.frontMatter.title"
            class="relative block"
          >
            <CustomCard
              hoverable
              class="border-0 rounded-3 bg-$vp-c-bg-soft/50 backdrop-blur-sm transition-all duration-300 hover:(bg-$vp-c-bg-soft shadow-2xl -translate-y-1)"
            >
              <!-- Header -->
              <div class="mb-4 flex items-start gap-3">
                <div class="mt-1 text-4">
                  📄
                </div>
                <div class="min-w-0 flex-1">
                  <h4 class="text-4.5 text-$vp-c-text-1 font-semibold leading-snug transition-colors duration-300 group-hover:text-$vp-c-brand-1">
                    {{ item.frontMatter.title }}
                  </h4>
                </div>
              </div>

              <!-- Content -->
              <div class="line-clamp-3 mb-4 text-4 text-$vp-c-text-2 leading-relaxed">
                {{ item.frontMatter.description || '暂无描述...' }}
              </div>

              <!-- Footer -->
              <div class="flex items-center justify-between text-3.5 text-$vp-c-text-3">
                <div class="flex items-center gap-2">
                  <span>🕒</span>
                  <span>{{ item.frontMatter.date || '未知日期' }}</span>
                </div>
                <div class="flex items-center gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>阅读</span>
                  <span>→</span>
                </div>
              </div>
            </CustomCard>
          </a>
        </div>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-else-if="tag && posts.length === 0" class="py-20 text-center">
      <div class="mb-4 text-15">
        🔍
      </div>
      <div class="mb-2 text-5 text-$vp-c-text-2">
        暂无「{{ tag }}」标签下的文章
      </div>
      <div class="text-3.5 text-$vp-c-text-3">
        试试点击其他标签吧
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  color: var(--vp-c-brand-1) !important;
  font-weight: bold !important;
  ring: 2px solid var(--vp-c-brand-1);
  transform: scale(1.05);
}

/* 搜索框样式增强 */
input::placeholder {
  color: var(--vp-c-text-3);
}

/* 标签悬停效果增强 */
.group:hover .tag-glow {
  opacity: 0.2;
}
</style>
