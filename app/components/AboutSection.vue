<script setup lang="ts">
const stats = [
  { value: '2016', label: '成立年份', color: 'blue' },
  { value: '3 人', label: '團隊規模', color: 'gold' },
  { value: '100%', label: '專責交付', color: 'blue-500' }
]
</script>

<template>
  <section class="about">
    <div class="about__backdrop" aria-hidden="true">
      <img class="about__backdrop-img" src="/images/about.png" alt="" />
      <div class="about__backdrop-veil"></div>
    </div>

    <div class="container about__content" v-reveal>
      <span class="about__kicker">
        <span class="about__kicker-line" aria-hidden="true"></span>
        ABOUT
      </span>

      <h1 class="about__title">
        現代架構與AI共舞，
        驅動高品質系統落地
      </h1>

      <p class="about__desc">
        深耕全端技術與複雜場域管理系統，我們融合現代前後端分離架構、空間數據治理與新世代 AI 研發工作流，打造高效、敏捷的數位解決方案。
        我們深知系統成功的關鍵在於理解真實業務與團隊透明協同。團隊以工程師思維為核心，確保每一行程式碼、每一份技術規格都經得起長期維運的考驗。
      </p>

      <ul class="about__stats">
        <li v-for="stat in stats" :key="stat.label">
          <span class="about__stat-value" :class="`is-${stat.color}`">{{ stat.value }}</span>
          <span class="about__stat-label">{{ stat.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: clamp(96px, 14vw, 180px) 0;
}

.about__content {
  width: 100%;
}

.about__backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.about__backdrop-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about__backdrop-veil {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.65);
}

.about__content {
  position: relative;
  z-index: 1;
}

.about__kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.2em;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 24px;
}

.about__kicker-line {
  width: 28px;
  height: 2px;
  background: var(--gold);
}

.about__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(30px, 4vw, 46px);
  line-height: 1.32;
  color: var(--ink);
  margin: 0 0 26px;
  max-width: 16ch;
}

.about__desc {
  font-size: 16px;
  line-height: 1.85;
  color: var(--ink-soft);
  max-width: 50ch;
  margin: 0 0 44px;
}

.about__stats {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(28px, 4vw, 48px);
  list-style: none;
  margin: 0;
  padding: 0;
}

.about__stats li {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.about__stat-value {
  font-family: var(--font-display);
  font-size: clamp(26px, 3vw, 34px);
  font-weight: 700;
  line-height: 1;
}

.about__stat-value.is-blue {
  color: var(--blue-700);
}

.about__stat-value.is-gold {
  color: var(--gold);
}

.about__stat-value.is-blue-500 {
  color: var(--blue-500);
}

.about__stat-label {
  font-size: 13px;
  color: var(--ink-faint);
}
</style>
