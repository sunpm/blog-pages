<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen from-transparent via-purple-50/20 to-pink-50/20 bg-gradient-to-br dark:(from-transparent via-purple-950/10 to-pink-950/10)">
    <!-- 背景装饰 -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="animate-float absolute left-20 top-32 h-80 w-80 rounded-full from-purple-400/8 to-pink-400/8 bg-gradient-to-br blur-3xl" />
      <div class="animate-float-delayed absolute bottom-32 right-16 h-72 w-72 rounded-full from-blue-400/8 to-purple-400/8 bg-gradient-to-br blur-3xl" />
    </div>

    <div class="relative z-1 mx-auto max-w-320 px-8 py-20 lg:px-10 lg:py-24">
      <!-- 页面头部 -->
      <section class="mb-20 text-center">
        <div class="relative mb-12">
          <!-- 标题装饰背景 -->
          <div class="absolute inset-0 rounded-6 from-purple-50/30 via-pink-50/20 to-blue-50/30 bg-gradient-to-br -bottom-8 -top-8 -z-1 dark:(from-purple-950/20 via-pink-950/20 to-blue-950/20)" />

          <div class="relative py-12">
            <h1 class="mb-6 flex-center gap-4 text-12 font-bold lg:text-14">
              <span class="relative">
                <span class="animate-handshake text-11 lg:text-12">🤝</span>
                <span class="absolute inset-0 animate-ping text-11 opacity-20 lg:text-12">🤝</span>
              </span>
              <span class="from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent dark:(from-purple-400 via-pink-400 to-blue-400)">
                友情链接
              </span>
            </h1>
            <p class="mx-auto max-w-140 text-6 text-$vp-c-text-2 leading-relaxed opacity-90">
              很高兴能和非常多的朋友们交流，一起学习进步！
            </p>

            <!-- 装饰线条 -->
            <div class="mx-auto mt-8 h-1 w-32 rounded-full from-transparent via-$vp-c-brand-1 to-transparent bg-gradient-to-r" />
          </div>
        </div>
      </section>

      <!-- 友链展示区域 -->
      <section class="mb-24">
        <div class="relative">
          <!-- 背景装饰 -->
          <div class="absolute inset-0 border border-$vp-c-border/50 rounded-6 from-$vp-c-bg-soft/60 to-$vp-c-bg-soft/40 bg-gradient-to-br shadow-xl backdrop-blur-sm -bottom-8 -top-8" />
          <div class="absolute inset-0 rounded-6 from-purple-500/5 to-pink-500/5 bg-gradient-to-br blur-2xl -bottom-6 -left-3 -right-3 -top-6" />

          <!-- 内容 -->
          <div class="relative z-1 p-12">
            <div class="mb-10 text-center">
              <h2 class="mb-4 flex-center gap-3 text-8 text-$vp-c-text-1 font-semibold lg:text-9">
                <span class="animate-twinkle">🌟</span>
                技术博客
              </h2>
              <p class="text-4.5 text-$vp-c-text-2">
                排名不分先后，都是优秀的技术博客
              </p>
            </div>

            <LinkList />
          </div>
        </div>
      </section>

      <!-- 申请友链区域 -->
      <section class="mb-20">
        <div class="relative">
          <!-- 背景装饰 -->
          <div class="absolute inset-0 border border-$vp-c-border/50 rounded-6 from-$vp-c-bg-soft/80 to-$vp-c-bg-soft/60 bg-gradient-to-br shadow-xl backdrop-blur-sm" />
          <div class="absolute left-0 right-0 top-0 h-1.5 rounded-t-6 from-purple-500 via-pink-500 to-blue-500 bg-gradient-to-r" />

          <!-- 内容 -->
          <div class="relative z-1 p-12">
            <div class="mb-10 text-center">
              <h2 class="mb-4 flex-center gap-3 text-8 text-$vp-c-text-1 font-semibold lg:text-9">
                <span class="animate-bounce">📝</span>
                申请友链
              </h2>
              <p class="text-4.5 text-$vp-c-text-2">
                期待与更多优秀的朋友建立链接
              </p>
            </div>

            <div class="grid gap-8 lg:grid-cols-2">
              <!-- 申请要求 -->
              <div class="space-y-6">
                <h3 class="mb-6 flex-center gap-2 text-6 text-$vp-c-text-1 font-semibold">
                  <span>📋</span>
                  申请要求
                </h3>

                <div class="space-y-4">
                  <div class="group flex items-start gap-4 border border-$vp-c-border/30 rounded-3 bg-$vp-c-bg-alt/50 p-4 transition-all duration-300 hover:(border-emerald-500/30 bg-$vp-c-bg-alt/80 -translate-y-0.5)">
                    <div class="h-8 w-8 flex-center rounded-2 bg-emerald-500/10 text-5 transition-transform duration-300 group-hover:scale-110">
                      ✅
                    </div>
                    <div class="flex-1">
                      <div class="mb-1 text-4 text-$vp-c-text-1 font-medium">
                        必须先添加本站友链
                      </div>
                      <div class="text-3.5 text-$vp-c-text-2/80">
                        确保链接的互惠性
                      </div>
                    </div>
                  </div>

                  <div class="group flex items-start gap-4 border border-$vp-c-border/30 rounded-3 bg-$vp-c-bg-alt/50 p-4 transition-all duration-300 hover:(border-blue-500/30 bg-$vp-c-bg-alt/80 -translate-y-0.5)">
                    <div class="h-8 w-8 flex-center rounded-2 bg-blue-500/10 text-5 transition-transform duration-300 group-hover:scale-110">
                      🚀
                    </div>
                    <div class="flex-1">
                      <div class="mb-1 text-4 text-$vp-c-text-1 font-medium">
                        内容积极向上，技术相关
                      </div>
                      <div class="text-3.5 text-$vp-c-text-2/80">
                        优质的技术内容分享
                      </div>
                    </div>
                  </div>

                  <div class="group flex items-start gap-4 border border-$vp-c-border/30 rounded-3 bg-$vp-c-bg-alt/50 p-4 transition-all duration-300 hover:(border-purple-500/30 bg-$vp-c-bg-alt/80 -translate-y-0.5)">
                    <div class="h-8 w-8 flex-center rounded-2 bg-purple-500/10 text-5 transition-transform duration-300 group-hover:scale-110">
                      🔄
                    </div>
                    <div class="flex-1">
                      <div class="mb-1 text-4 text-$vp-c-text-1 font-medium">
                        网站正常访问，更新频率较高
                      </div>
                      <div class="text-3.5 text-$vp-c-text-2/80">
                        保持活跃的内容更新
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 本站信息 -->
              <div class="space-y-6">
                <h3 class="mb-6 flex-center gap-2 text-6 text-$vp-c-text-1 font-semibold">
                  <span>ℹ️</span>
                  本站信息
                </h3>

                <div class="border border-$vp-c-border/30 rounded-4 bg-$vp-c-bg-alt/30 p-6">
                  <div class="space-y-4">
                    <div class="flex items-center justify-between border-b border-$vp-c-border/20 py-3">
                      <span class="text-4 text-$vp-c-text-2 font-medium">网站名称</span>
                      <span class="rounded-2 bg-$vp-c-brand-soft px-3 py-1.5 text-3.5 text-$vp-c-brand-1 font-mono">Sunpm</span>
                    </div>
                    <div class="flex items-center justify-between border-b border-$vp-c-border/20 py-3">
                      <span class="text-4 text-$vp-c-text-2 font-medium">网站地址</span>
                      <span class="rounded-2 bg-$vp-c-brand-soft px-3 py-1.5 text-3.5 text-$vp-c-brand-1 font-mono">https://blog.sunpm.me</span>
                    </div>
                    <div class="flex flex-col gap-2 border-b border-$vp-c-border/20 py-3">
                      <span class="text-4 text-$vp-c-text-2 font-medium">网站简介</span>
                      <span class="rounded-2 bg-$vp-c-brand-soft px-3 py-1.5 text-3.5 text-$vp-c-brand-1 leading-relaxed font-mono">一个小小网站，记录为学习付出努力而不该忘记的知识。</span>
                    </div>
                    <div class="flex items-center justify-between py-3">
                      <span class="text-4 text-$vp-c-text-2 font-medium">网站头像</span>
                      <span class="rounded-2 bg-$vp-c-brand-soft px-3 py-1.5 text-3.5 text-$vp-c-brand-1 font-mono">https://blog.sunpm.me/images/logo.png</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 申请说明 -->
            <div class="mt-10 border border-$vp-c-border/30 rounded-4 from-blue-50/50 to-purple-50/50 bg-gradient-to-br p-6 dark:(from-blue-950/20 to-purple-950/20)">
              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <span class="mt-0.5 text-5">💬</span>
                  <p class="text-4 text-$vp-c-text-2 leading-relaxed">
                    请在下方留言区按照格式申请友链，我会尽快添加到网站中来！
                  </p>
                </div>
                <div class="flex items-start gap-3">
                  <span class="mt-0.5 text-5">⚠️</span>
                  <p class="text-4 text-$vp-c-text-2 leading-relaxed">
                    如有误删请在此页面留言恢复链接！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 页脚装饰 -->
      <section class="text-center">
        <div class="mx-auto mb-8 h-1 w-48 rounded-full from-transparent via-$vp-c-border to-transparent bg-gradient-to-r" />
        <div class="text-4 text-$vp-c-text-3 opacity-60">
          期待与你建立友好的链接 🤝
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@keyframes handshake {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(15deg);
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.2);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-20px) translateX(10px);
  }
  66% {
    transform: translateY(-5px) translateX(-8px);
  }
}

@keyframes float-delayed {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-15px) translateX(-12px);
  }
  66% {
    transform: translateY(-25px) translateX(5px);
  }
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -15px, 0);
  }
  70% {
    transform: translate3d(0, -7px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

@keyframes ping {
  75%,
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

.animate-handshake {
  animation: handshake 3s ease-in-out infinite;
}

.animate-twinkle {
  animation: twinkle 2s ease-in-out infinite;
}

.animate-float {
  animation: float 15s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 18s ease-in-out infinite 3s;
}

.animate-bounce {
  animation: bounce 2s ease-in-out infinite;
}

.animate-ping {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
