<script setup lang="ts">
interface NavChild {
  label: string
  href: string
  desc?: string
}

interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

// 首頁／關於我們／聯絡我們為功能頁籤，直接對應獨立頁面路由（頁面待後續建立）
// 應用實例／產品與應用／解決方案／技術專欄為模組，保留下拉選單；子項目內容為暫定佔位，待確認後替換
const navItems: NavItem[] = [
  {
    label: '首頁',
    href: '/#top'
  },
  {
    label: '關於我們',
    href: '/#about'
  },
  {
    label: '應用實例',
    href: '/#cases',
    children: [
      { label: '地理資訊管理系統', href: '/cases/gis' },
      { label: '企業導入案例', href: '/#cases' },
      { label: '三維圖台案例', href: '/#cases' },
      { label: '系統整合案例', href: '/#cases' }
    ]
  },
  {
    label: '產品',
    href: '/#capabilities',
    children: [
      { label: '地理資訊系統整合', href: '/#capabilities', desc: 'GIS 資料介接與圖資治理' },
      { label: '三維圖台與數位孿生', href: '/#capabilities', desc: '3D Tile／BIM 整合展示' },
      { label: '企業系統客製開發', href: '/#capabilities', desc: '流程系統與內部工具建置' },
      { label: '雲端架構與部署', href: '/#capabilities', desc: '維運自動化與擴充規劃' },
      { label: '維運與技術支援', href: '/#capabilities', desc: '版本迭代與現場支援' }
    ]
  },
  // {
  //   label: '解決方案',
  //   href: '#solutions',
  //   children: [
  //     { label: '智慧城市與公部門', href: '#solutions' },
  //     { label: '製造與廠務管理', href: '#solutions' },
  //     { label: '基礎建設與工程', href: '#solutions' },
  //     { label: '環境監測與防災', href: '#solutions' }
  //   ]
  // },
  {
    label: '技術專欄',
    href: '/articles'
  },
  {
    label: '聯絡我們',
    href: '/contact'
  }
]

const { isScrolled } = useScrollHeader()

const isNavOpen = ref(false)
const openIndex = ref<number | null>(null)

const toggleDropdown = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const closeNav = () => {
  isNavOpen.value = false
  openIndex.value = null
}
</script>

<template>
  <!-- <div class="topbar">
    <div class="container topbar__inner">
      <span class="topbar__en">Inworld INFORMATION TECHNOLOGY ／ 尹渥資訊科技有限公司</span>
      <span class="topbar__coords"><span class="pulse-dot" aria-hidden="true"></span>TPE 25.0330°N 121.5654°E</span>
    </div>
  </div> -->

  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="container nav">
      <a class="brand" href="/#top" aria-label="尹渥資訊科技｜回到首頁">
        <span class="brand__mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M4 15L9.5 9.5L13.5 13.5L20 6" stroke="#eaf3fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.5 6H20V11.5" stroke="#eaf3fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="brand__text">
          <span class="brand__name">尹渥資訊科技</span>
          <span class="brand__tag">SYSTEM · GEOSPATIAL · 3D</span>
        </span>
      </a>

      <ul class="nav__links" :class="{ 'is-open': isNavOpen }">
        <li
          v-for="(item, index) in navItems"
          :key="item.label"
          class="nav-item"
          :class="{ 'has-dropdown': item.children, 'is-open': openIndex === index }"
          @mouseenter="item.children && (openIndex = index)"
          @mouseleave="item.children && openIndex === index && (openIndex = null)"
        >
          <div class="nav-item__row">
            <a :href="item.href" @click="closeNav">{{ item.label }}</a>
            <button
              v-if="item.children"
              type="button"
              class="nav-item__toggle"
              :aria-expanded="openIndex === index"
              :aria-label="`展開${item.label}選單`"
              @click="toggleDropdown(index)"
            >
              <svg viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>

          <ul v-if="item.children" class="nav-dropdown">
            <li v-for="child in item.children" :key="child.label">
              <a :href="child.href" @click="closeNav">
                <span class="nav-dropdown__label">{{ child.label }}</span>
                <span v-if="child.desc" class="nav-dropdown__desc">{{ child.desc }}</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="nav__actions">
        <NuxtLink class="btn btn--line btn--small" to="/line">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3C6.98 3 3 6.36 3 10.5c0 3.2 2.4 5.94 5.75 7.05-.13.5-.7 2.4-.8 2.77 0 0-.02.13.07.18a.28.28 0 0 0 .22 0c.28-.04 3.16-2.08 3.98-2.65.61.08 1.24.13 1.88.13 5.02 0 9-3.36 9-7.5S17.02 3 12 3Z" fill="currentColor"/></svg>
          LINE諮詢
        </NuxtLink>
        <a class="btn btn--primary" href="/#contact">
          聯絡我們
          <svg viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <button
          class="nav-toggle"
          :class="{ 'is-open': isNavOpen }"
          type="button"
          aria-label="開啟選單"
          :aria-expanded="isNavOpen"
          @click="isNavOpen = !isNavOpen"
        >
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>
