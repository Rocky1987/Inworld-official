<script setup lang="ts">
const steps = [
  {
    phase: 'PHASE 01',
    title: '現況調查',
    desc: '訪談使用者、盤點既有資料與系統介面，界定問題範圍。',
    dy: 0,
    active: true
  },
  {
    phase: 'PHASE 02',
    title: '架構設計',
    desc: '提出資料模型、系統架構與技術選型，附上取捨說明。',
    dy: -28
  },
  {
    phase: 'PHASE 03',
    title: '雛型驗證',
    desc: '以可點擊雛型確認介面與流程，降低後期變更成本。',
    dy: 20
  },
  {
    phase: 'PHASE 04',
    title: '分段開發',
    desc: '兩週一次交付可測試版本，逐段完成整合測試。',
    dy: -28
  },
  {
    phase: 'PHASE 05',
    title: '上線維運',
    desc: '完成教育訓練與文件交接，轉入長期監控與支援。',
    dy: 10
  }
]
</script>

<template>
  <section class="process">
    <div class="container">
      <div class="process__head" v-reveal>
        <div>
          <span class="process__kicker">
            <span class="process__kicker-line" aria-hidden="true"></span>
            SECTION 04
          </span>
          <h2 class="process__title">導入流程</h2>
        </div>
        <p class="process__note">五個階段皆設有查核點，未通過確認不進入下一階段。</p>
      </div>

      <div class="process__timeline" v-reveal>
        <svg class="process__wave" viewBox="0 0 1000 90" preserveAspectRatio="none" aria-hidden="true">
          <path class="process__wave-path is-active" d="M20,45 Q120,17 220,17" fill="none" />
          <path
            class="process__wave-path"
            d="M220,17 Q320,65 420,65 Q520,17 620,17 Q720,55 820,55"
            fill="none"
          />
        </svg>

        <ul class="process__nodes">
          <li v-for="step in steps" :key="step.phase" class="process__node" :style="{ '--dy': `${step.dy}px` }">
            <span class="process__dot" :class="{ 'is-active': step.active }"></span>
          </li>
        </ul>
      </div>

      <ul class="process__cols">
        <li v-for="step in steps" :key="step.title" v-reveal>
          <span class="process__phase" :class="{ 'is-active': step.active }">{{ step.phase }}</span>
          <h3 class="process__step-title">{{ step.title }}</h3>
          <p class="process__step-desc">{{ step.desc }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.process {
  position: relative;
  padding: clamp(72px, 10vw, 120px) 0;
}

.process__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: clamp(56px, 8vw, 96px);
}

.process__kicker {
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

.process__kicker-line {
  width: 28px;
  height: 2px;
  background: var(--gold);
}

.process__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(28px, 3.4vw, 38px);
  color: var(--ink);
  margin: 0;
}

.process__note {
  max-width: 34ch;
  text-align: right;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--ink-soft);
  margin: 0 0 6px;
}

.process__timeline {
  position: relative;
  height: 90px;
  margin-bottom: 24px;
}

.process__wave {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.process__wave-path {
  stroke: var(--blue-500);
  stroke-width: 2;
  stroke-dasharray: 1 12;
  stroke-linecap: round;
}

.process__wave-path.is-active {
  stroke: var(--gold);
}

.process__nodes {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}

.process__node {
  display: flex;
  align-items: flex-start;
  transform: translateY(calc(45px + var(--dy, 0px) - 15px));
}

.process__dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--panel);
  border: 2px solid var(--blue-500);
  box-shadow: 0 0 0 6px var(--bg);
}

.process__dot.is-active {
  background: var(--gold);
  border-color: var(--gold);
}

.process__cols {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.process__phase {
  display: block;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--blue-500);
  margin-bottom: 10px;
}

.process__phase.is-active {
  color: var(--gold);
}

.process__step-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 19px;
  color: var(--ink);
  margin: 0 0 10px;
}

.process__step-desc {
  font-size: 14px;
  line-height: 1.75;
  color: var(--ink-soft);
  margin: 0;
}

@media (max-width: 900px) {
  .process__head {
    flex-direction: column;
    align-items: flex-start;
  }

  .process__note {
    text-align: left;
  }

  .process__timeline {
    display: none;
  }

  .process__cols {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
