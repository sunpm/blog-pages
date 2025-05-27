<script lang="ts" setup>
import { useTitle, useUrlSearchParams } from '@vueuse/core'
import { withBase } from 'vitepress'
import { computed } from 'vue'
import { META } from '../../../config/app.config'
import { useTags } from '../../composables'

defineOptions({
  name: 'TagsList',
})
const { getTagsList, filterTagsPosts } = useTags()
const { tag } = useUrlSearchParams()
const data = computed(() => getTagsList())
const posts = computed(() => filterTagsPosts(tag as string))
useTitle(tag as string, { titleTemplate: `标签 - %s | ${META.title}` })
</script>

<template>
  <div m="t-4" class="vp-raw">
    <div flex="center wrap" gap="4">
      <!-- hover 可以修改子元素颜色，添加背景 -->
      <a v-for="(item, index) in data" :key="index" :class="{ active: tag === item[0] }" :href="withBase(`?tag=${item[0]}`)" transition="all" class="hover:active" border="1 solid" p="2" leading-none flex="y-center" rounded="2">
        <span text="gray">#</span>
        <p m="x-2" font="bold">
          {{ item[0] }}
        </p>
        <div p=".5" bg="$vp-c-neutral" rounded="1" text="$vp-c-bg-alt">{{ item[1] }}</div>
      </a>
    </div>
    <!-- 可以另外封装一个列表组件，不使用时间线组件 -->
    <div mt-5>
      <!-- <ArchivesList :list="posts" /> -->
      <NGrid :x-gap="12" :y-gap="8" :cols="2">
        <NGridItem v-for="(item, index) in posts" :key="index">
          <NCard hoverable :href="withBase(item.regularPath)" tag="a" :title="item.frontMatter.title">
            <div line-clamp-2>
              {{ item.frontMatter.description }}
            </div>
          </NCard>
        </NGridItem>
      </NGrid>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply: text-main-1! font-bold;
}
</style>
