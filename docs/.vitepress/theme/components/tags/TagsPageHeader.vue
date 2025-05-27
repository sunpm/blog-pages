<template>
  <div class="relative mb-16 text-center">
    <!-- 背景装饰 -->
    <div class="rounded-5xl absolute inset-0 from-blue-50/50 via-purple-50/30 to-pink-50/50 bg-gradient-to-br -bottom-10 -top-10 -z-1 dark:(from-blue-950/20 via-purple-950/20 to-pink-950/20)" />

    <!-- 浮动装饰元素 -->
    <div class="animate-float absolute left-1/4 top-0 h-20 w-20 rounded-full from-blue-400/20 to-purple-400/20 bg-gradient-to-br blur-xl" />
    <div class="animate-float-delayed absolute bottom-0 right-1/4 h-16 w-16 rounded-full from-pink-400/20 to-red-400/20 bg-gradient-to-br blur-xl" />

    <div class="relative z-1 py-12">
      <h1 class="mb-6 flex-center gap-4 text-11 text-$vp-c-text-1 font-bold lg:text-12">
        <span class="relative">
          <span class="animate-wiggle text-10 drop-shadow-lg lg:text-11">🏷️</span>
          <span class="absolute inset-0 animate-ping text-10 opacity-20 lg:text-11">🏷️</span>
        </span>
        <span class="from-blue-600 via-purple-600 to-pink-600 bg-gradient-to-r bg-clip-text text-transparent dark:(from-blue-400 via-purple-400 to-pink-400)">
          标签广场
        </span>
      </h1>

      <p class="mx-auto max-w-120 text-5 text-$vp-c-text-2 leading-relaxed opacity-90">
        探索知识的标签世界，每个标签都是一扇通往新知的门
      </p>

      <!-- 装饰线条 -->
      <div class="mx-auto mt-8 h-1 w-20 rounded-full from-transparent via-$vp-c-brand-1 to-transparent bg-gradient-to-r" />
    </div>
  </div>
</template>

<style>
@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(8deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.1);
  }
}

@keyframes ping {
  75%,
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

.animate-wiggle {
  animation: wiggle 3s ease-in-out infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 6s ease-in-out infinite 2s;
}

.animate-ping {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
