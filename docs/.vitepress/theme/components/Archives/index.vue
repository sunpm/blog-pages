<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import { useYearSort } from '../../composables'
import ArchivesList from './ArchivesList.vue'

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
      <ArchivesList :list="yearList" />
    </div>
  </div>
</template>

<style scoped>
</style>
