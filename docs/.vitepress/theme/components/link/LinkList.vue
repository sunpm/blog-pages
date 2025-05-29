<script setup lang="ts">
import type { LinkItemData } from './LinkItem.vue'
import { ref } from 'vue'
import LinkItem from './LinkItem.vue'

defineOptions({
  name: 'LinkList',
})

const list = ref<LinkItemData[]>([
  {
    name: 'MurphyChen',
    url: 'https://mphy.me/',
    icon: 'https://mphy.me/favicon.png',
    description: 'Working with Java&Vue, focusing on React/Vue/TS.\nIntrested in music science fiction, including movies, books.\nBe passionate about the internet and frontend technology.',
  },
  {
    name: 'Anthony Fu',
    url: 'https://antfu.me/',
    icon: 'https://avatars.githubusercontent.com/u/11247099',
    description: 'A ship in harbor is safe, but that is not what ships are built for.',
  },
  {
    name: '_geekris1',
    url: 'https://www.thez.cc/',
    icon: 'https://raw.githubusercontent.com/geekris1/geekris1.me/master/public/icon.jpg',
    description: 'Excel at chatting more than coding.',
  },
  {
    name: 'Sugar',
    url: 'https://sugarat.top/',
    icon: 'https://avatars.githubusercontent.com/u/42485491',
    description: '你的指尖,拥有改变世界的力量😄',
  },
])
</script>

<template>
  <div class="mx-auto max-w-6xl">
    <div class="mb-12 text-center">
      <h2 class="mb-3 text-6 text-$vp-c-text-1 font-semibold">
        🌟 技术博客
      </h2>
      <p class="text-4.5 text-$vp-c-text-2">
        排名不分先后，都是优秀的技术博客
      </p>
    </div>

    <div class="grid grid-cols-1 gap-6 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
      <LinkItem v-for="(item, index) in list" :key="index" :data="item" />
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
