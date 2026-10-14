<script setup lang="ts">
useSeo({
  title: 'LINE 官方帳號｜尹渥資訊科技有限公司',
  description: '加入尹渥資訊科技 LINE 官方帳號，掃描 QRCode 或點擊連結即可快速取得專案諮詢與客服回覆。',
  path: '/line'
})

// 佔位資訊：待提供正式 LINE 官方帳號 QRCode 圖檔與好友連結後替換
const lineFriendUrl = 'https://line.me/R/ti/p/@709mqmed'
const lineId = '@709mqmed'
</script>

<template>
  <section class="line-page">
    <div class="container">
      <div class="line-page__head" v-reveal>
        <span class="line-page__kicker">
          <span class="line-page__kicker-line" aria-hidden="true"></span>
          LINE ／ 官方帳號諮詢
        </span>
        <h1 class="line-page__title">加入 LINE 好友，快速取得諮詢回覆</h1>
        <p class="line-page__subtitle">掃描 QRCode 或點擊下方按鈕加入官方帳號，我們會盡快回覆您的需求。</p>
      </div>

      <div class="line-page__card" v-reveal>
        <div class="line-page__qr">
          <div class="line-page__qr-box">
            <img src="/images/L_Line_Official.png" alt="LINE 官方帳號 QRCode" class="line-page__qr-img" />
          </div>
          <p class="line-page__qr-caption">請以 LINE App 掃描上方 QRCode</p>
        </div>

        <div class="line-page__info">
          <p class="line-page__id-label">LINE ID</p>
          <p class="line-page__id">{{ lineId }}</p>

          <a class="btn btn--line line-page__cta" :href="lineFriendUrl" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3C6.98 3 3 6.36 3 10.5c0 3.2 2.4 5.94 5.75 7.05-.13.5-.7 2.4-.8 2.77 0 0-.02.13.07.18a.28.28 0 0 0 .22 0c.28-.04 3.16-2.08 3.98-2.65.61.08 1.24.13 1.88.13 5.02 0 9-3.36 9-7.5S17.02 3 12 3Z" fill="currentColor"/></svg>
            加入 LINE 好友
          </a>

          <ul class="line-page__notes">
            <li>服務時間：週一至週五 09:00–18:00</li>
            <li>非服務時間留言，我們將於次一個工作日回覆</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-page {
  position: relative;
  padding: clamp(72px, 10vw, 120px) 0;
}

.line-page__head {
  max-width: 640px;
  margin: 0 auto clamp(40px, 6vw, 64px);
  text-align: center;
}

.line-page__kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.2em;
  color: #06c755;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.line-page__kicker-line {
  width: 28px;
  height: 2px;
  background: #06c755;
}

.line-page__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(26px, 3.4vw, 34px);
  color: var(--ink);
  margin: 0 0 14px;
}

.line-page__subtitle {
  font-size: 15px;
  line-height: 1.8;
  color: var(--ink-soft);
  margin: 0;
}

.line-page__card {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: clamp(28px, 5vw, 48px);
  align-items: center;
  max-width: 720px;
  margin: 0 auto;
  padding: clamp(28px, 5vw, 40px);
  border-radius: var(--radius-lg);
  background: var(--panel);
  border: 1px solid var(--line-soft);
  box-shadow: 0 24px 48px -32px rgba(16, 29, 44, 0.35);
}

.line-page__qr {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.line-page__qr-box {
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  border: 1px solid var(--line-soft);
  background: #ffffff;
  padding: 12px;
}

.line-page__qr-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.line-page__qr-caption {
  font-size: 12.5px;
  color: var(--ink-faint);
  margin: 0;
}

.line-page__info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.line-page__id-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin: 0;
}

.line-page__id {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 18px;
}

.line-page__cta {
  align-self: flex-start;
  margin-bottom: 20px;
  background: #06c755;
  border-color: #06c755;
  color: #ffffff;
}

.line-page__cta:hover {
  background: #05a648;
  border-color: #05a648;
  color: #ffffff;
}

.line-page__notes {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13.5px;
  line-height: 1.7;
  color: var(--ink-soft);
}

@media (max-width: 700px) {
  .line-page__card {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  .line-page__cta {
    align-self: center;
  }
}
</style>
