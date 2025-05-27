<script setup lang="ts">
import { talks } from '../../../../data/talks'
</script>

<template>
  <div>
    <div v-for="(item, index) in talks" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<style scoped>

</style>
