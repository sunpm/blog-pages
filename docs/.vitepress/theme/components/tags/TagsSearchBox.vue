<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  modelValue?: string
  placeholder?: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
  (e: 'search', value: string): void
  (e: 'clear'): void
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '搜索标签...',
  modelValue: '',
})

const emit = defineEmits<Emits>()

const searchQuery = ref(props.modelValue)
const isSearching = ref(false)

watch(() => props.modelValue, (newValue) => {
  searchQuery.value = newValue
})

watch(searchQuery, (newValue) => {
  emit('update:modelValue', newValue)
  emit('search', newValue)
})

function clearSearch() {
  searchQuery.value = ''
  emit('clear')
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    clearSearch()
  }
}
</script>

<template>
  <div class="group relative">
    <!-- 搜索框背景装饰 -->
    <div class="absolute inset-0 scale-105 rounded-4 from-blue-500/10 via-purple-500/10 to-pink-500/10 bg-gradient-to-r opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

    <div class="relative">
      <div class="relative overflow-hidden">
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="placeholder"
          class="w-full border-2 border-$vp-c-border/50 rounded-4 bg-$vp-c-bg-soft/80 px-6 py-5 pl-14 pr-14 text-4.5 backdrop-blur-sm transition-all duration-300 focus:(scale-102 border-$vp-c-brand-1 bg-$vp-c-bg shadow-2xl outline-none) hover:(border-$vp-c-brand-1/50 shadow-lg)"
          @keydown="handleKeydown"
        >

        <!-- 搜索图标 -->
        <div class="absolute left-5 top-1/2 transition-all duration-300 -translate-y-1/2" :class="searchQuery ? 'text-$vp-c-brand-1' : 'text-$vp-c-text-2'">
          <div class="relative">
            <span class="text-5">🔍</span>
            <div v-if="isSearching" class="absolute inset-0 animate-ping">
              <span class="text-5 opacity-30">🔍</span>
            </div>
          </div>
        </div>

        <!-- 清除按钮 -->
        <Transition name="fade-scale">
          <button
            v-if="searchQuery"
            class="absolute right-5 top-1/2 h-8 w-8 flex-center rounded-full text-3.5 text-$vp-c-text-2 transition-all duration-200 -translate-y-1/2 active:scale-95 hover:(scale-110 bg-$vp-c-bg-mute text-$vp-c-text-1)"
            @click="clearSearch"
          >
            <span>✕</span>
          </button>
        </Transition>

        <!-- 输入框装饰线 -->
        <div class="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 from-transparent via-$vp-c-brand-1 to-transparent bg-gradient-to-r transition-transform duration-500 group-focus-within:scale-x-100" />
      </div>

      <!-- 搜索建议提示 -->
      <div v-if="searchQuery" class="mt-3 flex items-center gap-2 text-3.5 text-$vp-c-text-2/80">
        <span>💡</span>
        <span>按 ESC 清除搜索</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 输入框占位符样式 */
input::placeholder {
  color: var(--vp-c-text-3);
  font-style: italic;
}

/* 输入框获得焦点时的特殊效果 */
input:focus {
  caret-color: var(--vp-c-brand-1);
}

/* 过渡动画 */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.2s ease-out;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}

@keyframes ping {
  75%,
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
