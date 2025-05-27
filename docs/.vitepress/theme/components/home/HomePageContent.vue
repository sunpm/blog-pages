<script setup lang="ts">
import HomeStatsSection from './HomeStatsSection.vue'
import HomeTechSection from './HomeTechSection.vue'
</script>

<template>
  <div class="min-h-screen from-transparent via-emerald-50/20 to-blue-50/20 bg-gradient-to-br dark:(from-transparent via-emerald-950/10 to-blue-950/10)">
    <!-- 背景装饰 -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="animate-float absolute left-10 top-20 h-72 w-72 rounded-full from-emerald-400/10 to-blue-400/10 bg-gradient-to-br blur-3xl" />
      <div class="animate-float-delayed absolute right-20 top-40 h-96 w-96 rounded-full from-purple-400/8 to-pink-400/8 bg-gradient-to-br blur-3xl" />
      <div class="animate-float-slow absolute bottom-20 left-1/3 h-80 w-80 rounded-full from-cyan-400/8 to-teal-400/8 bg-gradient-to-br blur-3xl" />
    </div>

    <div class="relative z-1 mx-auto max-w-350 px-8 py-20 lg:px-10 lg:py-28">
      <!-- 欢迎标题区域 -->
      <section class="mb-24 text-center">
        <div class="mb-8">
          <h1 class="mb-6 from-emerald-600 via-blue-600 to-purple-600 bg-gradient-to-r bg-clip-text text-12 text-transparent font-bold dark:(from-emerald-400 via-blue-400 to-purple-400) lg:text-14">
            🚀 欢迎来到我的数字世界
          </h1>
          <p class="mx-auto max-w-160 text-6 text-$vp-c-text-2 leading-relaxed opacity-90">
            在这里，我分享技术心得、记录学习历程，与你一起探索前端开发的无限可能
          </p>
        </div>

        <!-- 装饰线条 -->
        <div class="mx-auto mb-8 h-1 w-32 rounded-full from-transparent via-$vp-c-brand-1 to-transparent bg-gradient-to-r" />
      </section>

      <!-- talk 轮博区域 -->
      <section class="mb-28">
        <div class="relative">
          <!-- 背景装饰 -->
          <div class="absolute inset-0 border border-$vp-c-border/50 rounded-6 from-$vp-c-bg-soft/60 to-$vp-c-bg-soft/40 bg-gradient-to-br shadow-xl backdrop-blur-sm -bottom-8 -top-8" />
          <div class="absolute inset-0 rounded-6 from-emerald-500/5 to-blue-500/5 bg-gradient-to-br blur-2xl -bottom-6 -left-3 -right-3 -top-6" />

          <!-- 内容 -->
          <div class="relative z-1 p-12">
            <div class="mb-8 text-center">
              <h2 class="mb-4 flex-center gap-3 text-8 text-$vp-c-text-1 font-semibold lg:text-9">
                <span class="animate-bounce">💭</span>
                最新动态
              </h2>
              <p class="text-4.5 text-$vp-c-text-2">
                分享我的最新想法和技术感悟
              </p>
            </div>
            <TalkList :max-items="3" />
          </div>
        </div>
      </section>

      <!-- 统计信息 -->
      <HomeStatsSection />

      <!-- 技术栈展示 -->
      <HomeTechSection />

      <!-- 页脚装饰 -->
      <section class="mt-32 text-center">
        <div class="mx-auto mb-8 h-1 w-48 rounded-full from-transparent via-$vp-c-border to-transparent bg-gradient-to-r" />
        <div class="text-4 text-$vp-c-text-3 opacity-60">
          感谢你的阅读 ✨ 让我们一起成长
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-30px) translateX(10px);
  }
  66% {
    transform: translateY(-10px) translateX(-10px);
  }
}

@keyframes float-delayed {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-20px) translateX(-15px);
  }
  66% {
    transform: translateY(-40px) translateX(5px);
  }
}

@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-25px) translateX(-8px);
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

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 25s ease-in-out infinite 5s;
}

.animate-float-slow {
  animation: float-slow 30s ease-in-out infinite 10s;
}

.animate-bounce {
  animation: bounce 2s ease-in-out infinite;
}
</style>
