<script setup lang="ts">
interface Props {
  content: string
  time: string | Date
}

defineProps<Props>()

function formatTime(time: string | Date) {
  const date = new Date(time)
  const now = new Date()
  const diff = now.getTime() - date.getTime()

  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour
  const week = 7 * day
  const month = 30 * day

  if (diff < minute) {
    return '刚刚'
  }
  else if (diff < hour) {
    return `${Math.floor(diff / minute)}分钟前`
  }
  else if (diff < day) {
    return `${Math.floor(diff / hour)}小时前`
  }
  else if (diff < week) {
    return `${Math.floor(diff / day)}天前`
  }
  else if (diff < month) {
    return `${Math.floor(diff / week)}周前`
  }
  else {
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
}
</script>

<template>
  <div class="talk-item border-l-2 border-$vp-c-brand-1 py-3 pl-4 transition-all duration-300 hover:border-l-4">
    <div class="talk-content">
      <div class="talk-text" v-html="content" />
      <div class="talk-meta">
        <span class="talk-time">{{ formatTime(time) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.talk-item {
  margin-bottom: 16px;
}

.talk-content {
  padding: 4px 0;
}

.talk-text {
  font-size: 16px;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  margin-bottom: 12px;
}

.talk-text :deep(p) {
  margin: 0;
}

.talk-text :deep(code) {
  background: var(--vp-c-bg-mute);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 14px;
}

.talk-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.talk-time {
  font-size: 14px;
  color: var(--vp-c-text-3);
  display: flex;
  align-items: center;
  gap: 4px;
}

.talk-time::before {
  content: '⏰';
  font-size: 12px;
}

@media (max-width: 768px) {
  .talk-text {
    font-size: 15px;
  }
}
</style>
