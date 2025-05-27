<script setup lang="ts">

</script>

<template>
  <div class="link-page">
    <div class="link-header">
      <h1 class="link-title">
        <span class="link-icon">🤝</span>
        友情链接
      </h1>
      <p class="link-description">
        很高兴能和非常多的朋友们交流，一起学习进步！
      </p>
    </div>

    <div class="link-content">
      <section class="link-section">
        <h2 class="section-title">
          <span class="section-icon">🌟</span>
          技术博客
        </h2>
        <p class="section-description">
          排名不分先后，都是优秀的技术博客
        </p>

        <div class="link-list-wrapper">
          <LinkList />
        </div>
      </section>

      <section class="apply-section">
        <div class="apply-card">
          <h2 class="apply-title">
            <span class="apply-icon">📝</span>
            申请友链
          </h2>

          <div class="apply-content">
            <div class="apply-tips">
              <div class="tip-item">
                <span class="tip-icon">✅</span>
                <span>必须先添加本站友链</span>
              </div>
              <div class="tip-item">
                <span class="tip-icon">🚀</span>
                <span>内容积极向上，技术相关</span>
              </div>
              <div class="tip-item">
                <span class="tip-icon">🔄</span>
                <span>网站正常访问，更新频率较高</span>
              </div>
            </div>

            <div class="my-info-card">
              <h3>本站信息</h3>
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">网站名称</span>
                  <span class="info-value">Sunpm</span>
                </div>
                <div class="info-item">
                  <span class="info-label">网站地址</span>
                  <span class="info-value">https://blog.sunpm.me</span>
                </div>
                <div class="info-item">
                  <span class="info-label">网站简介</span>
                  <span class="info-value">一个小小网站，记录为学习付出努力而不该忘记的知识。</span>
                </div>
                <div class="info-item">
                  <span class="info-label">网站头像</span>
                  <span class="info-value">https://blog.sunpm.me/images/logo.png</span>
                </div>
              </div>
            </div>

            <div class="apply-note">
              <p>
                <span class="note-icon">💬</span>
                请在下方留言区按照格式申请友链，我会尽快添加到网站中来！
              </p>
              <p>
                <span class="note-icon">⚠️</span>
                如有误删请在此页面留言恢复链接！
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.link-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 24px;
}

.link-header {
  text-align: center;
  margin-bottom: 60px;
}

.link-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 36px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 16px 0;
}

.link-icon {
  font-size: 32px;
  animation: shake 2s ease-in-out infinite;
}

@keyframes shake {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
}

.link-description {
  font-size: 18px;
  color: var(--vp-c-text-2);
  margin: 0;
  opacity: 0.9;
}

.link-content {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.link-section {
  animation: fadeInUp 0.6s ease-out;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 8px 0;
}

.section-icon {
  font-size: 20px;
}

.section-description {
  font-size: 16px;
  color: var(--vp-c-text-2);
  margin: 0 0 32px 0;
}

.link-list-wrapper {
  background: var(--vp-c-bg-soft);
  padding: 32px;
  border-radius: 16px;
  border: 1px solid var(--vp-c-border);
}

.apply-section {
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.apply-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  padding: 40px;
  position: relative;
  overflow: hidden;
}

.apply-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
}

.apply-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 32px 0;
}

.apply-icon {
  font-size: 20px;
}

.apply-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.apply-tips {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tip-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: var(--vp-c-bg);
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
}

.tip-icon {
  font-size: 16px;
  flex-shrink: 0;
}

.my-info-card {
  background: var(--vp-c-bg);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-border);
}

.my-info-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 20px 0;
}

.info-grid {
  display: grid;
  gap: 16px;
}

.info-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 16px;
  align-items: center;
}

.info-label {
  font-weight: 500;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.info-value {
  color: var(--vp-c-text-1);
  font-size: 14px;
  word-break: break-all;
  background: var(--vp-c-bg-mute);
  padding: 8px 12px;
  border-radius: 6px;
  font-family: var(--vp-font-family-mono);
}

.apply-note {
  background: var(--vp-c-bg);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-border);
}

.apply-note p {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 0 0 12px 0;
  font-size: 14px;
  line-height: 1.6;
}

.apply-note p:last-child {
  margin-bottom: 0;
}

.note-icon {
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 2px;
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
  .link-page {
    padding: 24px 16px;
  }

  .link-title {
    font-size: 28px;
  }

  .link-description {
    font-size: 16px;
  }

  .link-content {
    gap: 40px;
  }

  .link-list-wrapper,
  .apply-card {
    padding: 24px;
  }

  .info-item {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .apply-content {
    gap: 24px;
  }
}
</style>
