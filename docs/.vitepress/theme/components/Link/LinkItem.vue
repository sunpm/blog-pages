<script setup lang="ts">
export interface LinkItemData {
  name: string
  url: string
  icon: string
  description: string
}
defineProps<{
  data: LinkItemData
}>()
</script>

<template>
  <a class="group" target="_blank" hover="dark:(bg-brand-dark)" rounded="xl" :title="data.name" relative :href="data.url" border="~ dashed gray" p="4" flex="between">
    <img transition="all" group-hover="w-0 h-0" w="16" h="16" rounded="1/2" :src="data.icon" alt="">
    <div flex="1" ml="2">
      <p font="bold" text="lg">
        {{ data.name }}
      </p>
      <p m="t-1" text="sm" line-clamp="2">
        {{ data.description }}
      </p>
    </div>
  </a>
</template>

<style scoped>

</style>
