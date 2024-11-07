<script setup lang="ts">

</script>

<template>
  <div mb-8>
    <n-row class="mb-8">
      <n-col :span="8">
        <span id="busuanzi_container_site_pv">
          <n-statistic label="本文总阅读量">
            <span id="busuanzi_value_page_pv">Loading</span> 次
          </n-statistic>
        </span>
      </n-col>
      <n-col :span="8">
        <span id="busuanzi_container_site_uv">
          <n-statistic label="本站总访问量">
            <span id="busuanzi_value_site_pv">Loading</span> 次
          </n-statistic>
        </span>
      </n-col>
      <n-col :span="8">
        <span id="busuanzi_container_page_pv">
          <n-statistic label="本站总访客数">
            <span id="busuanzi_value_site_uv">Loading</span> 人
          </n-statistic>
        </span>
      </n-col>
    </n-row>
  </div>
  <!-- <span id="busuanzi_container_site_pv">
  总访问量 <span id="busuanzi_value_site_pv">Loading</span> 次
</span>
<span id="busuanzi_container_site_uv">
  总访客数 <span id="busuanzi_value_site_uv">Loading</span> 人
</span>
<span id="busuanzi_container_page_pv">
  本页面访问量 <span id="busuanzi_value_page_pv">Loading</span> 次
</span> -->
</template>

<style scoped>

</style>
