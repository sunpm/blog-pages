---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Sun .P.M"
  text: "学习 & 思考 & 分享"
  tagline: 一个小小网站，记录为学习付出努力而不该忘记的知识。
  image:
    src: /images/logo.png
    alt: Sun .P.M
  actions:
    - theme: brand
      text: 🚀 开始阅读
      link: posts/node/npm/NPM 国内加速，修改镜像源
    - theme: alt
      text: 📋 查看归档
      link: /archives
    - theme: alt
      text: 🏷️ 浏览标签
      link: /tags

features:
  - icon: ✍️
    title: 持续学习
    details: 保持对新技术的好奇心，不断学习前端、后端、工程化等各个领域的知识。
  - icon: 🧠
    title: 深度思考
    details: 学而不思则罔，思而不学则殆。每一篇文章都是深度思考的结晶。
  - icon: 📝
    title: 知识分享
    details: 通过写作来整理思路，通过分享来检验理解，让知识在传播中升华。
  - icon: 🛠️
    title: 实践项目
    details: 理论与实践相结合，通过真实项目来验证和应用所学知识。
  - icon: 🤝
    title: 技术交流
    details: 与同行开发者交流经验，分享最佳实践，共同成长进步。
  - icon: 🌱
    title: 持续成长
    details: 技术在变化，我们也在成长。记录每一个进步的足迹。
---

<div class="home-content">
  <!-- talk 轮博区域 -->
  <section class="talk-section">
    <TalkList :max-items="3" />
  </section>

  <!-- 统计信息 -->
  <section class="stats-section">
    <div class="stats-container">
      <div class="stat-item">
        <div class="stat-number">50+</div>
        <div class="stat-label">技术文章</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">10+</div>
        <div class="stat-label">开源项目</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">3年</div>
        <div class="stat-label">技术经验</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">1000+</div>
        <div class="stat-label">代码提交</div>
      </div>
    </div>
  </section>

  <!-- 技术栈展示 -->
  <section class="tech-section">
    <h2 class="section-title">🔧 技术栈</h2>
    <div class="tech-grid">
      <div class="tech-category">
        <h3>前端开发</h3>
        <div class="tech-tags">
          <span class="tech-tag">Vue.js</span>
          <span class="tech-tag">React</span>
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">Vite</span>
          <span class="tech-tag">UnoCSS</span>
        </div>
      </div>
      <div class="tech-category">
        <h3>后端开发</h3>
        <div class="tech-tags">
          <span class="tech-tag">Node.js</span>
          <span class="tech-tag">Express</span>
          <span class="tech-tag">MongoDB</span>
          <span class="tech-tag">MySQL</span>
          <span class="tech-tag">Redis</span>
        </div>
      </div>
      <div class="tech-category">
        <h3>开发工具</h3>
        <div class="tech-tags">
          <span class="tech-tag">Git</span>
          <span class="tech-tag">Docker</span>
          <span class="tech-tag">Nginx</span>
          <span class="tech-tag">Linux</span>
          <span class="tech-tag">VS Code</span>
        </div>
      </div>
    </div>
  </section>
</div>

<style scoped>
.home-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px;
}

.talk-section {
  margin-bottom: 80px;
}

.stats-section {
  margin-bottom: 80px;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  padding: 0 20px;
}

.stat-item {
  text-align: center;
  padding: 32px 24px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
}

.stat-number {
  font-size: 36px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 16px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.tech-section {
  text-align: center;
}

.section-title {
  font-size: 32px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 48px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-top: 32px;
}

.tech-category {
  padding: 32px 24px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.tech-category:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.tech-category h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 20px 0;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.tech-tag {
  display: inline-block;
  padding: 6px 12px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: var(--vp-c-brand-1);
  color: white;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .home-content {
    padding: 40px 16px;
  }
  
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 0;
  }
  
  .stat-item {
    padding: 24px 16px;
  }
  
  .stat-number {
    font-size: 28px;
  }
  
  .section-title {
    font-size: 24px;
    margin-bottom: 32px;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .tech-category {
    padding: 24px 20px;
  }
  
  .talk-section,
  .stats-section {
    margin-bottom: 60px;
  }
}
</style>
