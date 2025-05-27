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
  <div class="talk-item">
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
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.talk-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
}

.talk-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
}

.talk-content {
  margin-left: 8px;
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
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
  gap: 4px;
}

.talk-time::before {
  content: '⏰';
  font-size: 12px;
}

@media (max-width: 768px) {
  .talk-item {
    padding: 16px;
    margin-bottom: 12px;
  }

  .talk-text {
    font-size: 15px;
  }
}
</style>
