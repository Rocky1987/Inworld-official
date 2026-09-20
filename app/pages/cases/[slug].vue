<script setup lang="ts">
import { getCaseBySlug } from '~/data/caseStudies'

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const caseItem = computed(() => getCaseBySlug(slug.value))

if (!caseItem.value) {
  await navigateTo('/')
}

const activeId = ref(caseItem.value?.sections[0]?.id ?? '')
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!caseItem.value) return

  const els = caseItem.value.sections
    .map((section) => document.getElementById(section.id))
    .filter((el): el is HTMLElement => !!el)

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
  )

  els.forEach((el) => observer?.observe(el))
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <section v-if="caseItem" class="case">
    <div class="container">
      <!-- <NuxtLink to="/" class="case__back">
        <svg viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        回首頁
      </NuxtLink> -->

      <div class="case__head" v-reveal>
        <div class="case__head-content">
          <span class="case__kicker">
            <span class="case__kicker-line" aria-hidden="true"></span>
            {{ caseItem.code }} ／ {{ caseItem.category }}
          </span>
          <h1 class="case__title">{{ caseItem.title }}</h1>
          <p class="case__subtitle">{{ caseItem.subtitle }}</p>
          <p class="case__summary">{{ caseItem.summary }}</p>
          <ul class="case__tags">
            <li v-for="tag in caseItem.tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>

        <div v-if="caseItem.image" class="case__head-visual">
          <img :src="caseItem.image" :alt="caseItem.title" />
        </div>
      </div>

      <div class="case__layout">
        <aside class="case__sidebar">
          <nav class="case__toc" aria-label="章節目錄">
            <span class="case__toc-label">目錄</span>
            <ul>
              <li v-for="section in caseItem.sections" :key="section.id">
                <a
                  :href="`#${section.id}`"
                  class="case__toc-link"
                  :class="{ 'is-active': activeId === section.id }"
                >
                  <span class="case__toc-number">{{ section.number }}</span>
                  {{ section.title }}
                </a>
              </li>
            </ul>
          </nav>

          <div class="case__promo">
            <p class="case__promo-title">想要這套系統？</p>
            <p class="case__promo-desc">諮詢免費，依工時報價。</p>
            <a class="case__promo-link" href="/#contact">
              聯絡我們
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </div>
        </aside>

        <div class="case__content">
          <article
            v-for="section in caseItem.sections"
            :id="section.id"
            :key="section.id"
            class="case__section"
            v-reveal
          >
            <div class="case__section-head">
              <span class="case__section-number">{{ section.number }}</span>
              <h2 class="case__section-title">{{ section.title }}</h2>
            </div>

            <p v-for="(paragraph, i) in section.paragraphs" :key="i" class="case__section-text">
              {{ paragraph }}
            </p>

            <ul v-if="section.list" class="case__section-list">
              <li v-for="item in section.list" :key="item">{{ item }}</li>
            </ul>

            <div v-if="section.callout" class="case__callout">
              <p class="case__callout-title">{{ section.callout.title }}</p>
              <ul>
                <li v-for="item in section.callout.items" :key="item">{{ item }}</li>
              </ul>
            </div>

            <ul v-if="section.stats" class="case__stats">
              <li v-for="stat in section.stats" :key="stat.label" class="case__stat">
                <span class="case__stat-value">
                  {{ stat.value }}<span v-if="stat.unit" class="case__stat-unit">{{ stat.unit }}</span>
                </span>
                <span class="case__stat-label">{{ stat.label }}</span>
              </li>
            </ul>
          </article>

          <div class="case__cta">
            <a class="btn btn--primary" href="/#contact">
              需求諮詢
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <NuxtLink class="btn btn--ghost" to="/">查看其他應用實例</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.case {
  position: relative;
  padding: clamp(32px, 4vw, 56px) 0 clamp(72px, 10vw, 120px);
  /* 此頁為獨立長內容頁，不採用首頁單螢幕吸附式捲動 */
  scroll-snap-align: none;
  scroll-snap-stop: normal;
  min-height: auto;
}

.case__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ink-soft);
  margin-bottom: clamp(32px, 5vw, 56px);
  transition: color 0.2s ease;
}

.case__back svg {
  width: 16px;
  height: 16px;
}

.case__back:hover {
  color: var(--blue-700);
}

.case__head {
  position: relative;
  display: flex;
  align-items: center;
  gap: clamp(32px, 5vw, 56px);
  max-width: none;
  padding: clamp(32px, 5vw, 56px) clamp(28px, 5vw, 48px);
  margin-bottom: clamp(48px, 6vw, 72px);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, #17171c 0%, #23232b 50%, #14141a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.case__head-content {
  flex: 1;
  min-width: 0;
  max-width: 640px;
}

.case__head-visual {
  position: relative;
  flex-shrink: 0;
  width: clamp(220px, 26vw, 320px);
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 24px 48px -20px rgba(0, 0, 0, 0.45);
}

.case__head-visual::before {
  content: '';
  position: absolute;
  inset: -40px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.4), transparent 70%);
  filter: blur(24px);
  z-index: -1;
}

.case__head-visual img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case__kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.2em;
  color: var(--gold-soft);
  text-transform: uppercase;
  margin-bottom: 20px;
}

.case__kicker-line {
  width: 28px;
  height: 2px;
  background: var(--gold-soft);
}

.case__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(32px, 4vw, 46px);
  color: #eaf1f7;
  margin: 0 0 10px;
}

.case__subtitle {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.05em;
  color: var(--blue-100);
  margin: 0 0 22px;
}

.case__summary {
  font-size: 16px;
  line-height: 1.85;
  color: rgba(234, 241, 247, 0.78);
  margin: 0 0 24px;
}

.case__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.case__tags li {
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid rgba(234, 241, 247, 0.25);
  background: rgba(234, 241, 247, 0.08);
  font-size: 12.5px;
  color: rgba(234, 241, 247, 0.85);
}

/* ── 左側目錄 + 右側內容 ── */

.case__layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}

.case__sidebar {
  position: sticky;
  top: clamp(24px, 4vw, 48px);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.case__toc {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px 18px;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg-soft);
}

.case__toc-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.case__toc ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-left: 1px solid var(--line);
}

.case__toc-link {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 8px 14px;
  margin-left: -1px;
  border-left: 2px solid transparent;
  font-size: 13.5px;
  line-height: 1.5;
  color: var(--ink-soft);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.case__toc-number {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink-faint);
}

.case__toc-link:hover {
  color: var(--blue-700);
}

.case__toc-link.is-active {
  color: var(--blue-700);
  font-weight: 700;
  border-left-color: var(--gold);
}

.case__toc-link.is-active .case__toc-number {
  color: var(--gold);
}

.case__promo {
  padding: 22px 20px;
  border-radius: var(--radius-md);
  background: var(--blue-900);
  color: #eaf1f7;
}

.case__promo-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 4px;
}

.case__promo-desc {
  font-size: 13px;
  color: var(--blue-100);
  margin: 0 0 16px;
}

.case__promo-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--gold-soft);
}

.case__promo-link svg {
  width: 15px;
  height: 15px;
  transition: transform 0.2s ease;
}

.case__promo-link:hover svg {
  transform: translateX(3px);
}

/* ── 右側章節內容 ── */

.case__content {
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.case__section {
  padding: clamp(28px, 4vw, 40px) 0;
  border-bottom: 1px solid var(--line-soft);
  scroll-margin-top: 24px;
}

.case__content .case__section:first-child {
  padding-top: 0;
}

.case__content .case__section:last-child {
  border-bottom: none;
}

.case__section-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.case__section-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: var(--radius-sm);
  background: var(--blue-900);
  color: #eaf1f7;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  flex-shrink: 0;
}

.case__section-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(20px, 2.4vw, 26px);
  color: var(--ink);
  margin: 0;
}

.case__section-text {
  font-size: 15px;
  line-height: 1.85;
  color: var(--ink-soft);
  margin: 0 0 14px;
}

.case__section-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  margin: 0 0 8px;
  padding: 0;
}

.case__section-list li {
  position: relative;
  padding-left: 22px;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--ink-soft);
}

.case__section-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: var(--gold);
}

.case__callout {
  padding: 22px 24px;
  border-radius: var(--radius-md);
  background: var(--bg-soft);
  border: 1px solid var(--line);
  margin: 8px 0;
}

.case__callout-title {
  font-weight: 700;
  font-size: 14.5px;
  color: var(--ink);
  margin: 0 0 12px;
}

.case__callout ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.case__callout li {
  position: relative;
  padding-left: 18px;
  font-size: 14px;
  line-height: 1.7;
  color: var(--ink-soft);
}

.case__callout li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--blue-500);
}

.case__stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
}

.case__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 22px 16px;
  background: var(--panel);
  border-radius: var(--radius-md);
  box-shadow: 0 24px 48px -32px rgba(16, 29, 44, 0.35);
}

.case__stat-value {
  font-family: var(--font-display);
  font-size: clamp(22px, 2.6vw, 28px);
  font-weight: 700;
  color: var(--blue-700);
  line-height: 1;
}

.case__stat-unit {
  font-size: 14px;
  font-weight: 600;
  margin-left: 2px;
}

.case__stat-label {
  font-size: 12.5px;
  color: var(--ink-faint);
}

.case__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding-top: clamp(28px, 4vw, 40px);
}

@media (max-width: 700px) {
  .case__head {
    flex-direction: column;
    align-items: stretch;
  }

  .case__head-content {
    max-width: none;
  }

  .case__head-visual {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 900px) {
  .case__layout {
    grid-template-columns: 1fr;
  }

  .case__sidebar {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .case__toc ul {
    flex-direction: row;
    flex-wrap: wrap;
    border-left: none;
    gap: 8px;
  }

  .case__toc-link {
    border-left: none;
    border-bottom: 2px solid transparent;
    padding: 6px 10px;
    margin-left: 0;
  }

  .case__toc-link.is-active {
    border-bottom-color: var(--gold);
  }

  .case__promo {
    width: 100%;
  }

  .case__stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
