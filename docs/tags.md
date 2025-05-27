---
head:
  - - meta
    - name: description
      content: 在 Sun .P.M 的标签页面，用于展示符合此标签的文章列表。

editLink: false
lastUpdated: false
outline: false
aside: false
---

<div class="tags-page">
  <div class="tags-header">
    <h1 class="tags-title">
      <span class="tags-icon">🏷️</span>
      标签广场
    </h1>
    <p class="tags-description">
      按标签浏览文章，快速找到你感兴趣的内容
    </p>
  </div>

  <div class="tags-search">
    <div class="search-box">
      <span class="search-icon">🔍</span>
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="搜索标签..."
        class="search-input"
      />
    </div>
  </div>

  <div class="tags-stats">
    <div class="stat-card">
      <span class="stat-number">{{ totalTags }}</span>
      <span class="stat-label">总标签数</span>
    </div>
    <div class="stat-card">
      <span class="stat-number">{{ totalPosts }}</span>
      <span class="stat-label">文章总数</span>
    </div>
  </div>

  <div class="tags-content">
    <TagsList />
  </div>

  <div class="tags-tips">
    <div class="tip-card">
      <div class="tip-header">
        <span class="tip-icon">💡</span>
        <span class="tip-title">使用技巧</span>
      </div>
      <ul class="tip-list">
        <li>点击标签查看相关文章</li>
        <li>标签大小表示文章数量</li>
        <li>使用搜索快速定位标签</li>
        <li>支持键盘导航和快捷键</li>
      </ul>
    </div>
  </div>
</div>

<script setup>
import { ref, computed, onMounted } from 'vue'

const searchQuery = ref('')
const totalTags = ref(25)
const totalPosts = ref(48)

// 模拟数据，实际使用时可以从API获取
onMounted(() => {
  // 这里可以添加获取实际数据的逻辑
  console.log('tags page mounted')
})
</script>

<style scoped>
.tags-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 24px;
}

.tags-header {
  text-align: center;
  margin-bottom: 40px;
}

.tags-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 36px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 16px 0;
}

.tags-icon {
  font-size: 32px;
  animation: wiggle 2s ease-in-out infinite;
}

@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(5deg); }
}

.tags-description {
  font-size: 18px;
  color: var(--vp-c-text-2);
  margin: 0;
  opacity: 0.9;
}

.tags-search {
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
}

.search-box {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: var(--vp-c-text-2);
  z-index: 1;
}

.search-input {
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 2px solid var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 16px;
  transition: all 0.3s ease;
  outline: none;
}

.search-input:focus {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.search-input::placeholder {
  color: var(--vp-c-text-3);
}

.tags-stats {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 50px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 32px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  transition: all 0.3s ease;
  min-width: 120px;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
}

.stat-number {
  font-size: 28px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.tags-content {
  margin-bottom: 60px;
  background: var(--vp-c-bg-soft);
  padding: 40px;
  border-radius: 16px;
  border: 1px solid var(--vp-c-border);
  animation: fadeInUp 0.6s ease-out;
}

.tags-tips {
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.tip-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 32px;
  position: relative;
  overflow: hidden;
}

.tip-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6);
}

.tip-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

.tip-icon {
  font-size: 20px;
}

.tip-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.tip-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tip-list li {
  position: relative;
  padding: 8px 0 8px 24px;
  color: var(--vp-c-text-2);
  font-size: 15px;
  line-height: 1.6;
}

.tip-list li::before {
  content: '✨';
  position: absolute;
  left: 0;
  top: 8px;
  font-size: 14px;
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

@media (max-width: 768px) {
  .tags-page {
    padding: 24px 16px;
  }
  
  .tags-title {
    font-size: 28px;
  }
  
  .tags-description {
    font-size: 16px;
  }
  
  .tags-stats {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  
  .stat-card {
    min-width: 200px;
    padding: 20px 24px;
  }
  
  .tags-content,
  .tip-card {
    padding: 24px;
  }
  
  .search-box {
    max-width: none;
  }
}
</style>
