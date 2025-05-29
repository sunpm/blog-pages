<script setup lang="ts">
import PageHeader from '../common/PageHeader.vue'
import LinkList from './LinkList.vue'
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-16">
    <!-- 页面头部 -->
    <PageHeader
      title="友情链接"
      description="很高兴能和非常多的朋友们交流，一起学习进步！"
      icon="🤝"
    />

    <!-- 友链九宫格 -->
    <section class="mb-16">
      <LinkList />
    </section>

    <!-- 申请友链区域 -->
    <section class="mb-16">
      <div class="mx-auto max-w-4xl">
        <div class="mb-12 text-center">
          <h2 class="mb-3 text-6 text-$vp-c-text-1 font-semibold">
            📝 申请友链
          </h2>
          <p class="text-4.5 text-$vp-c-text-2">
            期待与更多优秀的朋友建立链接
          </p>
        </div>

        <!-- 申请要求 -->
        <div class="mb-12">
          <h3 class="mb-8 text-center text-5 text-$vp-c-text-1 font-semibold">
            📋 申请要求
          </h3>
          <div class="mx-auto max-w-2xl space-y-8">
            <div class="flex items-start gap-4">
              <span class="mt-0.5 text-5 text-$vp-c-brand-1">✅</span>
              <div class="flex-1">
                <div class="mb-2 text-4.5 text-$vp-c-text-1 font-medium">
                  必须先添加本站友链
                </div>
                <div class="text-4 text-$vp-c-text-3 leading-relaxed">
                  确保链接的互惠性，先友后链是基本礼貌
                </div>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="mt-0.5 text-5 text-$vp-c-brand-1">🚀</span>
              <div class="flex-1">
                <div class="mb-2 text-4.5 text-$vp-c-text-1 font-medium">
                  内容积极向上，技术相关
                </div>
                <div class="text-4 text-$vp-c-text-3 leading-relaxed">
                  分享优质的技术内容，传递正能量
                </div>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="mt-0.5 text-5 text-$vp-c-brand-1">🔄</span>
              <div class="flex-1">
                <div class="mb-2 text-4.5 text-$vp-c-text-1 font-medium">
                  网站正常访问，更新频率较高
                </div>
                <div class="text-4 text-$vp-c-text-3 leading-relaxed">
                  保持活跃的内容更新，网站能稳定访问
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 本站信息 -->
        <div class="mb-12">
          <h3 class="mb-8 text-center text-5 text-$vp-c-text-1 font-semibold">
            ℹ️ 本站信息
          </h3>
          <div class="mx-auto max-w-2xl space-y-5">
            <div class="flex items-center justify-between border-b border-$vp-c-border pb-3">
              <span class="text-4.5 text-$vp-c-text-2 font-medium">网站名称</span>
              <span class="text-4.5 text-$vp-c-brand-1 font-semibold font-mono">Sunpm</span>
            </div>
            <div class="flex items-center justify-between border-b border-$vp-c-border pb-3">
              <span class="text-4.5 text-$vp-c-text-2 font-medium">网站地址</span>
              <span class="text-4.5 text-$vp-c-brand-1 font-semibold font-mono">https://blog.sunpm.me</span>
            </div>
            <div class="flex items-center justify-between border-b border-$vp-c-border pb-3">
              <div class="text-4.5 text-$vp-c-text-2 font-medium">
                网站简介
              </div>
              <div class="text-4.5 text-$vp-c-brand-1 font-semibold font-mono">
                记录学习历程，分享技术心得
              </div>
            </div>
            <div class="flex items-center justify-between border-b border-$vp-c-border pb-3">
              <div class="text-4.5 text-$vp-c-text-2 font-medium">
                网站头像
              </div>
              <div class="text-4.5 text-$vp-c-brand-1 font-semibold font-mono">
                https://blog.sunpm.me/images/logo.png
              </div>
            </div>
          </div>
        </div>

        <!-- 申请说明 -->
        <div class="mx-auto max-w-2xl border-t border-$vp-c-border pt-8">
          <div class="text-center space-y-4">
            <div class="flex items-center justify-center gap-3">
              <span class="text-5 text-$vp-c-brand-1">💬</span>
              <p class="text-4.5 text-$vp-c-text-2">
                请在下方留言区按照格式申请友链，我会尽快添加到网站中来！
              </p>
            </div>
            <div class="flex items-center justify-center gap-3">
              <span class="text-5 text-orange-500">⚠️</span>
              <p class="text-4.5 text-$vp-c-text-2">
                如有误删请在此页面留言恢复链接！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.apply-section {
  padding: 24px;
}

@media (max-width: 768px) {
  .apply-section {
    padding: 16px;
  }
}
</style>
