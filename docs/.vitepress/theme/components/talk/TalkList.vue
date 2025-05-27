<script setup lang="ts">
import { computed } from 'vue'
import TalkItem from './TalkItem.vue'

interface Talk {
  content: string
  time: string | Date
}

interface Props {
  talks?: Talk[]
  maxItems?: number
}

const props = withDefaults(defineProps<Props>(), {
  talks: () => [
    {
      content: '今天学习了 VitePress 的组件开发，感觉很有趣！通过 <code>unplugin-vue-components</code> 可以实现组件的自动导入。',
      time: new Date('2024-12-26 14:30:00'),
    },
    {
      content: '分享一个小技巧：在 Vue 3 中使用 <code>defineProps</code> 和 <code>withDefaults</code> 可以很优雅地处理组件属性默认值。',
      time: new Date('2024-12-25 09:15:00'),
    },
    {
      content: '最近在重构博客，准备加入更多交互功能。计划添加评论系统和搜索功能，让读者有更好的体验。',
      time: new Date('2024-12-24 16:45:00'),
    },
  ],
  maxItems: 10,
})

const displayTalks = computed(() => {
  return props.talks.slice(0, props.maxItems)
})
</script>

<template>
  <div class="talk-list">
    <div class="talk-header">
      <h2 class="talk-title">
        <span class="talk-icon">💭</span>
        说说
      </h2>
      <p class="talk-subtitle">
        记录日常思考与分享
      </p>
    </div>

    <div class="talk-container">
      <TalkItem
        v-for="(talk, index) in displayTalks"
        :key="index"
        :content="talk.content"
        :time="talk.time"
      />

      <div v-if="displayTalks.length === 0" class="talk-empty">
        <div class="empty-icon">
          📝
        </div>
        <p>暂无轮博内容</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.talk-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.talk-header {
  text-align: center;
  margin-bottom: 32px;
}

.talk-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 28px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 8px 0;
}

.talk-icon {
  font-size: 24px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

.talk-subtitle {
  font-size: 16px;
  color: var(--vp-c-text-2);
  margin: 0;
  opacity: 0.8;
}

.talk-container {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.talk-empty {
  text-align: center;
  padding: 60px 20px;
  color: var(--vp-c-text-2);
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.6;
}

.talk-empty p {
  font-size: 16px;
  margin: 0;
}

@media (max-width: 768px) {
  .talk-list {
    padding: 0 16px;
  }

  .talk-title {
    font-size: 24px;
  }

  .talk-header {
    margin-bottom: 24px;
  }
}
</style>
