<script setup lang="ts">

</script>

<template>
  <div class="mx-auto max-w-280 px-6 py-16">
    <!-- 页面头部 -->
    <section class="mb-16 text-center">
      <h1 class="mb-4 text-8 text-$vp-c-text-1 font-bold">
        🤝 友情链接
      </h1>
      <p class="text-5 text-$vp-c-text-2">
        很高兴能和非常多的朋友们交流，一起学习进步！
      </p>
    </section>

    <!-- 友链展示区域 -->
    <section class="mb-16">
      <div class="border border-$vp-c-border rounded-3 bg-$vp-c-bg-soft p-8">
        <div class="mb-8 text-center">
          <h2 class="mb-2 text-6 text-$vp-c-text-1 font-semibold">
            🌟 技术博客
          </h2>
          <p class="text-4 text-$vp-c-text-2">
            排名不分先后，都是优秀的技术博客
          </p>
        </div>
        <LinkList />
      </div>
    </section>

    <!-- 申请友链区域 -->
    <section class="mb-16">
      <div class="border border-$vp-c-border rounded-3 bg-$vp-c-bg-soft p-8">
        <div class="mb-8 text-center">
          <h2 class="mb-2 text-6 text-$vp-c-text-1 font-semibold">
            📝 申请友链
          </h2>
          <p class="text-4 text-$vp-c-text-2">
            期待与更多优秀的朋友建立链接
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-2">
          <!-- 申请要求 -->
          <div>
            <h3 class="mb-4 text-5 text-$vp-c-text-1 font-semibold">
              📋 申请要求
            </h3>
            <div class="space-y-3">
              <div class="flex items-start gap-3 border border-$vp-c-border/50 rounded-2 bg-$vp-c-bg-alt p-4">
                <span class="text-4">✅</span>
                <div>
                  <div class="text-4 text-$vp-c-text-1 font-medium">必须先添加本站友链</div>
                  <div class="text-3.5 text-$vp-c-text-2">确保链接的互惠性</div>
                </div>
              </div>
              <div class="flex items-start gap-3 border border-$vp-c-border/50 rounded-2 bg-$vp-c-bg-alt p-4">
                <span class="text-4">🚀</span>
                <div>
                  <div class="text-4 text-$vp-c-text-1 font-medium">内容积极向上，技术相关</div>
                  <div class="text-3.5 text-$vp-c-text-2">优质的技术内容分享</div>
                </div>
              </div>
              <div class="flex items-start gap-3 border border-$vp-c-border/50 rounded-2 bg-$vp-c-bg-alt p-4">
                <span class="text-4">🔄</span>
                <div>
                  <div class="text-4 text-$vp-c-text-1 font-medium">网站正常访问，更新频率较高</div>
                  <div class="text-3.5 text-$vp-c-text-2">保持活跃的内容更新</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 本站信息 -->
          <div>
            <h3 class="mb-4 text-5 text-$vp-c-text-1 font-semibold">
              ℹ️ 本站信息
            </h3>
            <div class="border border-$vp-c-border/50 rounded-2 bg-$vp-c-bg-alt p-4">
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-4 text-$vp-c-text-2">网站名称</span>
                  <span class="text-4 text-$vp-c-brand-1 font-mono">Sunpm</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-4 text-$vp-c-text-2">网站地址</span>
                  <span class="text-4 text-$vp-c-brand-1 font-mono">https://blog.sunpm.me</span>
                </div>
                <div>
                  <div class="text-4 text-$vp-c-text-2 mb-1">网站简介</div>
                  <div class="text-4 text-$vp-c-brand-1 font-mono">记录学习历程，分享技术心得</div>
                </div>
                <div class="flex justify-between">
                  <span class="text-4 text-$vp-c-text-2">网站头像</span>
                  <span class="text-4 text-$vp-c-brand-1 font-mono">https://blog.sunpm.me/images/logo.png</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 申请说明 -->
        <div class="mt-8 border border-$vp-c-border/50 rounded-2 bg-$vp-c-bg-alt p-4">
          <div class="space-y-2">
            <div class="flex items-start gap-2">
              <span class="text-4">💬</span>
              <p class="text-4 text-$vp-c-text-2">
                请在下方留言区按照格式申请友链，我会尽快添加到网站中来！
              </p>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-4">⚠️</span>
              <p class="text-4 text-$vp-c-text-2">
                如有误删请在此页面留言恢复链接！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
