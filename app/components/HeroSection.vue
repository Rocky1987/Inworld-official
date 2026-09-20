<script setup lang="ts">
const heroRef = ref<HTMLElement | null>(null)
const coreStageRef = ref<HTMLElement | null>(null)
const backdropRef = ref<HTMLElement | null>(null)
const floatCardRef = ref<HTMLElement | null>(null)
const badgeChipRef = ref<HTMLElement | null>(null)

useParallaxTilt({
  hero: heroRef,
  coreStage: coreStageRef,
  backdrop: backdropRef,
  floatCard: floatCardRef,
  badgeChip: badgeChipRef
})
</script>

<template>
  <section class="hero" ref="heroRef">
    <!-- 全景科技氛圍延伸背景 (Ambient Aura & Panoramic Backdrop) -->
    <div class="hero__ambient" aria-hidden="true">
      <div class="hero__glow hero__glow--core"></div>
      <div class="hero__glow hero__glow--spread"></div>
      <div class="hero__glow hero__glow--accent"></div>

      <!-- 全景巨幅淡化純核心脈絡底圖 -->
      <div class="hero__backdrop-wrap">
        <img class="hero__backdrop-img" ref="backdropRef" src="/images/ai-core-pure.png" alt="" />
      </div>

      <svg class="hero__circuit-svg" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="streamGrad1" x1="1150" y1="450" x2="100" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#35688c" stop-opacity="0.65" />
            <stop offset="50%" stop-color="#9ec2dc" stop-opacity="0.3" />
            <stop offset="100%" stop-color="#35688c" stop-opacity="0.05" />
          </linearGradient>
          <linearGradient id="streamGrad2" x1="1150" y1="480" x2="100" y2="720" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#1f4763" stop-opacity="0.6" />
            <stop offset="60%" stop-color="#9ec2dc" stop-opacity="0.25" />
            <stop offset="100%" stop-color="#1f4763" stop-opacity="0.05" />
          </linearGradient>
          <linearGradient id="streamGrad3" x1="1200" y1="420" x2="1580" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#c9862f" stop-opacity="0.55" />
            <stop offset="100%" stop-color="#c9862f" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="streamGrad4" x1="1180" y1="520" x2="1580" y2="820" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#35688c" stop-opacity="0.5" />
            <stop offset="100%" stop-color="#35688c" stop-opacity="0" />
          </linearGradient>
        </defs>

        <!-- 向全景發散的數據光流路徑 -->
        <path class="stream-line stream-line--1" d="M 1160 450 C 960 400, 720 230, 360 220 C 240 216, 120 250, 20 280" stroke="url(#streamGrad1)" stroke-width="1.5" />
        <path class="stream-line stream-line--2" d="M 1150 490 C 920 510, 680 710, 340 710 C 200 710, 80 660, 0 630" stroke="url(#streamGrad2)" stroke-width="1.5" />
        <path class="stream-line stream-line--3 stream-line--reverse" d="M 1250 420 C 1360 330, 1440 230, 1600 170" stroke="url(#streamGrad3)" stroke-width="1.5" />
        <path class="stream-line stream-line--4" d="M 1220 530 C 1310 630, 1420 760, 1580 840" stroke="url(#streamGrad4)" stroke-width="1.2" />
        <path class="stream-line stream-line--5 stream-line--reverse" d="M 1100 420 C 820 320, 560 410, 280 370 C 180 355, 90 375, 0 390" stroke="url(#streamGrad1)" stroke-width="1" stroke-opacity="0.45" />

        <!-- 脈衝信號節點 -->
        <circle class="pulse-node pulse-node--1" cx="720" cy="230" r="3.5" fill="#35688c" />
        <circle class="pulse-node pulse-node--2" cx="340" cy="710" r="3" fill="#c9862f" />
        <circle class="pulse-node pulse-node--3" cx="1400" cy="270" r="3" fill="#9ec2dc" />
        <circle class="pulse-node pulse-node--4" cx="560" cy="410" r="2.5" fill="#35688c" />
      </svg>
    </div>

    <div class="container hero__grid">

      <div class="hero__content">
        <span class="kicker" v-reveal>
          <span class="kicker__bracket">◆</span>PRECISION ENGINEERING · RELIABLE CODE ／ SINCE 2016
        </span>

        <h1 v-reveal>
          以嚴謹系統架構，
          築造
          <span class="accent">穩健高效</span><br />
          的數位基石。
        </h1>

        <p class="hero__desc" v-reveal>
          專注於現代全端軟體研發、邊緣 AI 與空間資訊整合。以高可靠度架構，協助完成智慧化升級。
        </p>

        <div class="hero__ctas" v-reveal>
          <a class="btn btn--primary" href="#capabilities">
            檢視系統能力
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <a class="btn btn--ghost" href="#cases">瀏覽專案案例</a>
        </div>

        <div class="hero__scroll" v-reveal>
          SCROLL
          <span class="hero__scroll-line" aria-hidden="true"></span>
        </div>
      </div>

      <div class="hero__visual hero__visual--pure" v-reveal>
        <div class="hologram-grid" aria-hidden="true"></div>
        <div class="orbit orbit--a" aria-hidden="true"></div>
        <div class="orbit orbit--b" aria-hidden="true"></div>

        <div class="hero__core-stage" ref="coreStageRef">
          <div class="core-glow-halo" aria-hidden="true"></div>
          <span class="core-telemetry telemetry--tl">SYSTEM CORE ／ INTEGRATION ENGINE</span>
          <span class="core-telemetry telemetry--br">SYNC · 跨系統整合 · LIVE</span>
          <img class="hero__pure-img" src="/images/ai-core-cropped.png" alt="系統整合核心與跨系統資料脈絡全像示意圖" loading="eager" />
        </div>

        <div class="badge-chip" ref="badgeChipRef">
          <span class="badge-chip__dot" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/></svg>
          </span>
          <span class="badge-chip__text">
            <b>跨域整合架構</b>
            <span>SYSTEM INTEGRATION</span>
          </span>
        </div>

        <div class="float-card" ref="floatCardRef">
          <div class="float-card__label">系統穩定度 ／ 近 12 個月</div>
          <div class="float-card__value">99.9%</div>
          <svg viewBox="0 0 180 40" fill="none" preserveAspectRatio="none">
            <path d="M0 28C14 28 14 14 28 14C42 14 42 24 56 24C70 24 70 8 84 8C98 8 98 20 112 20C126 20 126 12 140 12C154 12 154 22 168 22C174 22 176 20 180 18" stroke="#c9862f" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>

    </div>
  </section>
</template>
