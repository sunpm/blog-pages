<script setup lang="ts">
import { ref } from 'vue'
import type { LinkItemData } from './LinkItem.vue'
import LinkItem from './LinkItem.vue'

const list = ref<LinkItemData[]>([
  {
    name: 'MurphyChen',
    url: 'https://mphy.me/',
    icon: 'https://mphy.me/favicon.png',
    description: 'Working with Java&Vue, focusing on React/Vue/TS.\n'
        + 'Intrested in music science fiction, including movies, books.\n'
        + 'Be passionate about the internet and frontend technology.',
  },
  {
    name: 'geekris1',
    url: 'https://www.thez.cc/',
    icon: 'https://www.thez.cc/logo.png',
    description: 'geekris1的个人博客，用来记录自己的学习',
  },
])
</script>

<template>
  <div class="vp-raw" grid="~ cols-2" gap="4" m="y-8">
    <LinkItem v-for="(item, index) in list" :key="index" :data="item" />
  </div>
</template>

<style scoped>

</style>
