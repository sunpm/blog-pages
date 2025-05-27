<template>
  <div class="mb-10 text-center">
    <h1 class="mb-4 flex-center gap-3 text-9 text-$vp-c-text-1 font-bold lg:text-10">
      <span class="animate-wiggle text-8 lg:text-9">🏷️</span>
      标签广场
    </h1>
    <p class="text-4.5 text-$vp-c-text-2 opacity-90">
      按标签浏览文章，快速找到你感兴趣的内容
    </p>
  </div>
</template>

<style>
@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(5deg);
  }
}

.animate-wiggle {
  animation: wiggle 2s ease-in-out infinite;
}
</style>
