<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { useYearSort } from '../../composables'

defineOptions({
  name: 'Archives',
})

const { theme } = useData()
const data = computed(() => useYearSort(theme.value.posts))
</script>

<template>
  <div m="t-4" class="vp-raw">
    <div v-for="(yearList, yearIndex) in data" :key="yearIndex">
      <div p="t-8 b-4" font="bold">
        {{ yearList[0].frontMatter.date.split('-')[0] }}
      </div>
      <a v-for="(article, index) in yearList" :key="index" :href="withBase(article.regularPath)" p="y-4 l-10" flex="between" class="text-c-1!">
        <div class="relative hover:(text-main-1! font-bold)" transition="all">
          <div absolute-a h-2 w-2 rounded="1/2" bg="brand" m="y-auto" />
          <p m="l-6">
            {{ article.frontMatter.title }}
          </p>
        </div>
        <div>{{ article.frontMatter.date.slice(5) }}</div>
      </a>
    </div>
  </div>
</template>

<style scoped>
</style>
