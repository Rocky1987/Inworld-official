<script setup lang="ts">
const openSections = reactive({
  services: true,
  company: true,
  contact: true
})

const toggleSection = (key: keyof typeof openSections) => {
  openSections[key] = !openSections[key]
}

onMounted(() => {
  if (window.matchMedia('(max-width: 560px)').matches) {
    openSections.services = false
    openSections.company = false
    openSections.contact = false
  }
})
</script>

<template>
  <footer class="site-footer" id="contact">
    <div class="footer__accent" aria-hidden="true"></div>

    <div class="container footer__top">
      <div class="footer__brand">
        <a class="brand" href="/#top" aria-label="尹渥資訊科技｜回到首頁">
          <span class="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 15L9.5 9.5L13.5 13.5L20 6" stroke="#eaf3fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.5 6H20V11.5" stroke="#eaf3fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="brand__text">
            <span class="brand__name">尹渥資訊科技</span>
            <span class="brand__tag">SYSTEM · Integration</span>
          </span>
        </a>
        <p class="footer__desc">整合AI技術與工具，提供智慧服務</p>
        <!-- <div class="footer__coords">
          <span class="pulse-dot" aria-hidden="true"></span>TPE 25.0330°N 121.5654°E
        </div> -->
      </div>

      <div class="footer__cols">
        <div class="footer__col footer__acc" :class="{ 'is-open': openSections.services }">
          <button type="button" class="footer__acc-summary" :aria-expanded="openSections.services" @click="toggleSection('services')">
            <h4>服務項目</h4>
            <svg class="footer__acc-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="footer__acc-body">
            <ul>
              <li><a href="/#services">軟體、AI 整合開發</a></li>
              <li><a href="/#services">舊系統翻新</a></li>
              <li><a href="/#services">軟硬體整合</a></li>
              <li><a href="/#services">維運與技術顧問</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__col footer__acc" :class="{ 'is-open': openSections.company }">
          <button type="button" class="footer__acc-summary" :aria-expanded="openSections.company" @click="toggleSection('company')">
            <h4>公司資訊</h4>
            <svg class="footer__acc-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="footer__acc-body">
            <ul>
              <li><a href="/#about">關於尹渥</a></li>
              <li><a href="/cases/gis">專案案例</a></li>
              <li><a href="/articles">技術專欄</a></li>
              <li><a href="/#process">導入流程</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__col footer__acc" :class="{ 'is-open': openSections.contact }">
          <button type="button" class="footer__acc-summary" :aria-expanded="openSections.contact" @click="toggleSection('contact')">
            <h4>聯絡我們</h4>
            <svg class="footer__acc-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="footer__acc-body">
            <ul class="footer__contact">
              <li><a href="mailto:decievemyself@gmail.com">decievemyself@gmail.com</a></li>
              <li><a href="tel:+886987623537">+886-987-623-537</a></li>
              <li><span><a href="https://www.google.com/maps/place/新北市新莊區富貴路502號4樓" target="_blank" rel="noopener noreferrer">新北市新莊區富貴路502號4樓</a></span></li>
            </ul>
            <a class="btn btn--primary btn--small footer__cta" href="mailto:decievemyself@gmail.com">
              需求諮詢
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="container footer__bottom">
      <span>© 2026 尹渥資訊科技有限公司．All Rights Reserved.</span>
      <div class="footer__legal">
        <a href="#">隱私權政策</a>
        <a href="#">服務條款</a>
      </div>
      <a class="footer__top-btn" href="/#top" aria-label="回到頂端">
        <svg viewBox="0 0 24 24" fill="none"><path d="M12 19V5M12 5L6 11M12 5L18 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>
  </footer>
</template>
