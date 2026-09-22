<script setup lang="ts">
import { getArticleBySlug } from '~/data/articles'

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const article = computed(() => getArticleBySlug(slug.value))

if (!article.value) {
  await navigateTo('/articles')
}

useSeo({
  title: () => `${article.value?.title ?? '技術專欄'}｜尹渥資訊科技技術專欄`,
  description: () => article.value?.excerpt ?? '尹渥資訊科技技術專欄，分享全端開發、AI 整合、邊緣物聯網與地理資訊系統架構的產業快訊與實務筆記。',
  path: () => `/articles/${slug.value}`,
  type: 'article'
})

const activeId = ref(article.value?.sections[0]?.id ?? '')
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!article.value) return

  const els = article.value.sections
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
  <section v-if="article" class="article">
    <div class="container">
      <NuxtLink to="/articles" class="article__back">
        <svg viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        回技術專欄
      </NuxtLink>

      <div class="article__head" v-reveal>
        <span class="article__kicker">
          <span class="article__kicker-line" aria-hidden="true"></span>
          {{ article.date }} ／ 約 {{ article.readTime }} 分鐘
        </span>
        <h1 class="article__title">{{ article.title }}</h1>
        <p class="article__excerpt">{{ article.excerpt }}</p>
        <ul class="article__tags">
          <li v-for="tag in article.tags" :key="tag">{{ tag }}</li>
        </ul>
      </div>

      <div class="article__layout">
        <aside class="article__sidebar">
          <nav class="article__toc" aria-label="章節目錄">
            <span class="article__toc-label">目錄</span>
            <ul>
              <li v-for="section in article.sections" :key="section.id">
                <a
                  :href="`#${section.id}`"
                  class="article__toc-link"
                  :class="{ 'is-active': activeId === section.id }"
                >
                  <span class="article__toc-number">{{ section.number }}</span>
                  {{ section.title }}
                </a>
              </li>
            </ul>
          </nav>

          <!-- <div class="article__promo">
            <p class="article__promo-title">需要技術顧問？</p>
            <p class="article__promo-desc">諮詢免費，依需求報價。</p>
            <a class="article__promo-link" href="/#contact">
              聯絡我們
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </div> -->
        </aside>

        <div class="article__content">
          <article
            v-for="section in article.sections"
            :id="section.id"
            :key="section.id"
            class="article__section"
            v-reveal
          >
            <div class="article__section-head">
              <span class="article__section-number">{{ section.number }}</span>
              <h2 class="article__section-title">{{ section.title }}</h2>
            </div>

            <p v-for="(paragraph, i) in section.paragraphs" :key="i" class="article__section-text">
              {{ paragraph }}
            </p>

            <ul v-if="section.list" class="article__section-list">
              <li v-for="item in section.list" :key="item">{{ item }}</li>
            </ul>

            <div v-if="section.callout" class="article__callout">
              <p class="article__callout-title">{{ section.callout.title }}</p>
              <ul>
                <li v-for="item in section.callout.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </article>

          <!-- <div class="article__cta">
            <a class="btn btn--primary" href="/#contact">
              需求諮詢
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <NuxtLink class="btn btn--ghost" to="/articles">查看其他技術專欄</NuxtLink>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.article {
  position: relative;
  padding: clamp(32px, 4vw, 56px) 0 clamp(72px, 10vw, 120px);
  scroll-snap-align: none;
  scroll-snap-stop: normal;
  min-height: auto;
}

.article__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ink-soft);
  margin-bottom: clamp(32px, 5vw, 56px);
  transition: color 0.2s ease;
}

.article__back svg {
  width: 16px;
  height: 16px;
}

.article__back:hover {
  color: var(--blue-700);
}

.article__head {
  position: relative;
  padding: clamp(32px, 5vw, 56px) clamp(28px, 5vw, 48px);
  margin-bottom: clamp(48px, 6vw, 72px);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, #17171c 0%, #23232b 50%, #14141a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.article__kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.15em;
  color: var(--gold-soft);
  text-transform: uppercase;
  margin-bottom: 20px;
}

.article__kicker-line {
  width: 28px;
  height: 2px;
  background: var(--gold-soft);
}

.article__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(26px, 3.4vw, 36px);
  line-height: 1.4;
  color: #eaf1f7;
  margin: 0 0 16px;
}

.article__excerpt {
  font-size: 15px;
  line-height: 1.85;
  color: rgba(234, 241, 247, 0.78);
  margin: 0 0 24px;
}

.article__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.article__tags li {
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid rgba(234, 241, 247, 0.25);
  background: rgba(234, 241, 247, 0.08);
  font-size: 12.5px;
  color: rgba(234, 241, 247, 0.85);
}

.article__layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}

.article__sidebar {
  position: sticky;
  top: clamp(24px, 4vw, 48px);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.article__toc {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px 18px;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg-soft);
}

.article__toc-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

.article__toc ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-left: 1px solid var(--line);
}

.article__toc-link {
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

.article__toc-number {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink-faint);
}

.article__toc-link:hover {
  color: var(--blue-700);
}

.article__toc-link.is-active {
  color: var(--blue-700);
  font-weight: 700;
  border-left-color: var(--gold);
}

.article__toc-link.is-active .article__toc-number {
  color: var(--gold);
}

.article__promo {
  padding: 22px 20px;
  border-radius: var(--radius-md);
  background: var(--blue-900);
  color: #eaf1f7;
}

.article__promo-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 4px;
}

.article__promo-desc {
  font-size: 13px;
  color: var(--blue-100);
  margin: 0 0 16px;
}

.article__promo-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--gold-soft);
}

.article__promo-link svg {
  width: 15px;
  height: 15px;
  transition: transform 0.2s ease;
}

.article__promo-link:hover svg {
  transform: translateX(3px);
}

.article__content {
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.article__section {
  padding: clamp(28px, 4vw, 40px) 0;
  border-bottom: 1px solid var(--line-soft);
  scroll-margin-top: 24px;
}

.article__content .article__section:first-child {
  padding-top: 0;
}

.article__content .article__section:last-child {
  border-bottom: none;
}

.article__section-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.article__section-number {
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

.article__section-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(20px, 2.4vw, 26px);
  color: var(--ink);
  margin: 0;
}

.article__section-text {
  font-size: 15px;
  line-height: 1.85;
  color: var(--ink-soft);
  margin: 0 0 14px;
}

.article__section-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  margin: 0 0 8px;
  padding: 0;
}

.article__section-list li {
  position: relative;
  padding-left: 22px;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--ink-soft);
}

.article__section-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: var(--gold);
}

.article__callout {
  padding: 22px 24px;
  border-radius: var(--radius-md);
  background: var(--bg-soft);
  border: 1px solid var(--line);
  margin: 8px 0;
}

.article__callout-title {
  font-weight: 700;
  font-size: 14.5px;
  color: var(--ink);
  margin: 0 0 12px;
}

.article__callout ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.article__callout li {
  position: relative;
  padding-left: 18px;
  font-size: 14px;
  line-height: 1.7;
  color: var(--ink-soft);
}

.article__callout li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--blue-500);
}

.article__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding-top: clamp(28px, 4vw, 40px);
}

@media (max-width: 900px) {
  .article__layout {
    grid-template-columns: 1fr;
  }

  .article__sidebar {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .article__toc ul {
    flex-direction: row;
    flex-wrap: wrap;
    border-left: none;
    gap: 8px;
  }

  .article__toc-link {
    border-left: none;
    border-bottom: 2px solid transparent;
    padding: 6px 10px;
    margin-left: 0;
  }

  .article__toc-link.is-active {
    border-bottom-color: var(--gold);
  }

  .article__promo {
    width: 100%;
  }
}
</style>
