<script setup lang="ts">
interface Props {
  totalTags?: number
  totalPosts?: number
}

withDefaults(defineProps<Props>(), {
  totalTags: 25,
  totalPosts: 48,
})
</script>

<template>
  <div class="mb-16 flex flex-col justify-center gap-8 lg:flex-row">
    <!-- 总标签数卡片 -->
    <div class="group relative max-w-80 flex-1">
      <div class="absolute inset-0 rounded-4 from-blue-500/20 to-purple-500/20 bg-gradient-to-br blur-xl transition-all duration-500 group-hover:scale-110 group-hover:blur-2xl" />
      <div class="relative flex-center flex-col border border-$vp-c-border/50 rounded-4 bg-$vp-c-bg-soft/80 px-10 py-8 backdrop-blur-sm transition-all duration-500 hover:(border-blue-500/50 bg-$vp-c-bg-soft shadow-2xl -translate-y-2)">
        <div class="absolute left-0 right-0 top-0 h-1 rounded-t-4 from-blue-500 to-purple-500 bg-gradient-to-r" />

        <div class="relative mb-3">
          <span class="from-blue-600 to-purple-600 bg-gradient-to-br bg-clip-text text-10 text-transparent font-bold dark:(from-blue-400 to-purple-400)">
            {{ totalTags }}
          </span>
          <div class="absolute inset-0 from-blue-600 to-purple-600 bg-gradient-to-br bg-clip-text text-10 text-transparent font-bold opacity-20 blur-sm dark:(from-blue-400 to-purple-400)">
            {{ totalTags }}
          </div>
        </div>

        <div class="flex-center gap-2">
          <span class="text-6">🏷️</span>
          <span class="text-4 text-$vp-c-text-1 font-semibold">
            总标签数
          </span>
        </div>

        <div class="mt-3 text-center text-3.5 text-$vp-c-text-2/80">
          每个标签都承载着知识
        </div>
      </div>
    </div>

    <!-- 文章总数卡片 -->
    <div class="group relative max-w-80 flex-1">
      <div class="absolute inset-0 rounded-4 from-emerald-500/20 to-cyan-500/20 bg-gradient-to-br blur-xl transition-all duration-500 group-hover:scale-110 group-hover:blur-2xl" />
      <div class="relative flex-center flex-col border border-$vp-c-border/50 rounded-4 bg-$vp-c-bg-soft/80 px-10 py-8 backdrop-blur-sm transition-all duration-500 hover:(border-emerald-500/50 bg-$vp-c-bg-soft shadow-2xl -translate-y-2)">
        <div class="absolute left-0 right-0 top-0 h-1 rounded-t-4 from-emerald-500 to-cyan-500 bg-gradient-to-r" />

        <div class="relative mb-3">
          <span class="from-emerald-600 to-cyan-600 bg-gradient-to-br bg-clip-text text-10 text-transparent font-bold dark:(from-emerald-400 to-cyan-400)">
            {{ totalPosts }}
          </span>
          <div class="absolute inset-0 from-emerald-600 to-cyan-600 bg-gradient-to-br bg-clip-text text-10 text-transparent font-bold opacity-20 blur-sm dark:(from-emerald-400 to-cyan-400)">
            {{ totalPosts }}
          </div>
        </div>

        <div class="flex-center gap-2">
          <span class="text-6">📚</span>
          <span class="text-4 text-$vp-c-text-1 font-semibold">
            文章总数
          </span>
        </div>

        <div class="mt-3 text-center text-3.5 text-$vp-c-text-2/80">
          记录思考与成长轨迹
        </div>
      </div>
    </div>
  </div>
</template>
