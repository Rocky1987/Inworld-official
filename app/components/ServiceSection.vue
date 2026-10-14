<script setup lang="ts">
const services = [
  {
    icon: 'M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3H4V7Zm0 5h16v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5Z',
    title: '軟體開發',
    desc: '客製系統、企業網站，從規劃書到上線一條龍。'
  },
  {
    icon: 'M12 3v3m0 12v3m9-9h-3M6 12H3m14.14-6.14-2.12 2.12M8.98 15.02l-2.12 2.12m0-10.28 2.12 2.12m6.04 6.04 2.12 2.12M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
    title: 'AI 整合',
    desc: '把 AI 接進業務流程，開源/閉源 Model 都接。'
  },
  {
    icon: 'M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 0v5h5M9 13h6m-6 4h6',
    title: '舊系統翻新',
    desc: 'VB.NET／VB6 老系統搬上 Web，原資料無痛遷移。'
  },
  {
    icon: 'M9 15l6-6M10 6l1.5-1.5a3.5 3.5 0 0 1 5 5L15 11M14 18l-1.5 1.5a3.5 3.5 0 0 1-5-5L9 13',
    title: '軟硬體整合',
    desc: '感測器、設備與雲端系統串接，現場數據即時回傳、遠端可控。'
  },
  {
    icon: 'M6 4h8l4 4v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm8 0v4h4M9 15l3 3 3-3M12 11v7',
    title: '紙本流程電子化',
    desc: '紙本表單、簽核與人工作業改造成線上系統，資料留存、追蹤有據。'
  },
  {
    icon: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8Z',
    title: '維運與技術顧問',
    desc: '系統上線後的長期維運、效能優化與技術諮詢，一站式支援。'
  }
]

// const stats = [
//   { value: '10', unit: '年', label: '經營至今' },
//   { value: '3', label: '核心團隊' },
//   { value: '50+', label: '客戶與合作' },
//   { value: '6+', label: '上線中系統' }
// ]
</script>

<template>
  <section class="service">
    <div class="container">
      <div class="service__head" v-reveal>
        <span class="service__kicker">
          <span class="service__kicker-line" aria-hidden="true"></span>
          SECTION 03 ／ 服務
        </span>
        <h2 class="service__title">服務項目</h2>
      </div>

      <ul class="service__grid">
        <li v-for="item in services" :key="item.title" class="service__card" v-reveal>
          <span class="service__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path :d="item.icon" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <h3 class="service__card-title">{{ item.title }}</h3>
          <p class="service__card-desc">{{ item.desc }}</p>
        </li>
      </ul>

      <!-- <ul class="service__stats" v-reveal>
        <li v-for="stat in stats" :key="stat.label" class="service__stat">
          <span class="service__stat-value">
            {{ stat.value }}<span v-if="stat.unit" class="service__stat-unit">{{ stat.unit }}</span>
          </span>
          <span class="service__stat-label">{{ stat.label }}</span>
        </li>
      </ul> -->
    </div>
  </section>
</template>

<style scoped>
.service {
  position: relative;
  display: flex;
  align-items: center;
  padding: clamp(72px, 10vw, 120px) 0;
}

.service > .container {
  width: 100%;
}

.service__head {
  margin-bottom: clamp(40px, 6vw, 64px);
}

.service__kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.2em;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 16px;
}

.service__kicker-line {
  width: 28px;
  height: 2px;
  background: var(--gold);
}

.service__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(28px, 3.4vw, 38px);
  color: var(--ink);
  margin: 0;
}

.service__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
  margin: 0 0 clamp(40px, 6vw, 64px);
  padding: 0;
}

.service__card {
  background: var(--panel);
  border-radius: var(--radius-md);
  padding: 28px 26px;
  box-shadow: 0 24px 48px -32px rgba(16, 29, 44, 0.35);
}

.service__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--bg-soft);
  color: var(--blue-700);
  margin-bottom: 18px;
}

.service__icon svg {
  width: 22px;
  height: 22px;
}

.service__card-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 17px;
  color: var(--ink);
  margin: 0 0 8px;
}

.service__card-desc {
  font-size: 14px;
  line-height: 1.75;
  color: var(--ink-soft);
  margin: 0;
}

.service__stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.service__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 28px 20px;
  background: var(--panel);
  border-radius: var(--radius-md);
  box-shadow: 0 24px 48px -32px rgba(16, 29, 44, 0.35);
}

.service__stat-value {
  font-family: var(--font-display);
  font-size: clamp(26px, 3vw, 34px);
  font-weight: 700;
  color: var(--blue-700);
  line-height: 1;
}

.service__stat-unit {
  font-size: 16px;
  font-weight: 600;
  margin-left: 2px;
}

.service__stat-label {
  font-size: 13px;
  color: var(--ink-faint);
}

@media (max-width: 900px) {
  .service__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .service__stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .service__grid {
    grid-template-columns: 1fr;
  }
}
</style>
