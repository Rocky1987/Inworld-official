<script setup lang="ts">
import { articles } from '~/data/articles'
</script>

<template>
  <section class="articles">
    <div class="container">
      <div class="articles__head" v-reveal>
        <span class="articles__kicker">
          <span class="articles__kicker-line" aria-hidden="true"></span>
          ARTICLES ／ 技術專欄
        </span>
        <h1 class="articles__title">技術專欄</h1>
        <p class="articles__subtitle">產業快訊、技術筆記與維運心得，濃縮成好讀的區塊，點進全文看完整內容。</p>
      </div>

      <ul class="articles__list">
        <li v-for="item in articles" :key="item.slug" class="articles__card" v-reveal>
          <div class="articles__meta">
            <span class="articles__meta-item">
              <svg viewBox="0 0 24 24" fill="none"><path d="M7 3v3M17 3v3M4 9h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
              {{ item.date }}
            </span>
            <span class="articles__meta-item">
              <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M12 7.5V12l3 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
              約 {{ item.readTime }} 分鐘
            </span>
            <span class="articles__meta-tags">
              <svg viewBox="0 0 24 24" fill="none"><path d="M4 12.5 12.5 4H19a1 1 0 0 1 1 1v6.5L11.5 20 4 12.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15" cy="8" r="1.2" fill="currentColor"/></svg>
              {{ item.tags.join('・') }}
            </span>
          </div>

          <h2 class="articles__card-title">{{ item.title }}</h2>
          <p class="articles__card-excerpt">{{ item.excerpt }}</p>

          <NuxtLink :to="`/articles/${item.slug}`" class="articles__card-link">
            看全文
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.articles {
  position: relative;
  padding: clamp(72px, 10vw, 120px) 0;
}

.articles__head {
  max-width: 640px;
  margin-bottom: clamp(40px, 6vw, 64px);
}

.articles__kicker {
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

.articles__kicker-line {
  width: 28px;
  height: 2px;
  background: var(--gold);
}

.articles__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(28px, 3.4vw, 38px);
  color: var(--ink);
  margin: 0 0 14px;
}

.articles__subtitle {
  font-size: 15px;
  line-height: 1.8;
  color: var(--ink-soft);
  margin: 0;
}

.articles__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.articles__card {
  background: var(--panel);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-md);
  padding: 28px clamp(22px, 4vw, 32px);
  box-shadow: 0 24px 48px -32px rgba(16, 29, 44, 0.35);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.articles__card:hover {
  border-color: var(--blue-300);
  transform: translateY(-2px);
}

.articles__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--ink-faint);
  margin-bottom: 14px;
}

.articles__meta-item,
.articles__meta-tags {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.articles__meta-item svg,
.articles__meta-tags svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.articles__card-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(18px, 2vw, 21px);
  color: var(--ink);
  margin: 0 0 12px;
}

.articles__card-excerpt {
  font-size: 14.5px;
  line-height: 1.85;
  color: var(--ink-soft);
  margin: 0 0 18px;
}

.articles__card-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 700;
  color: var(--gold);
}

.articles__card-link svg {
  width: 15px;
  height: 15px;
  transition: transform 0.2s ease;
}

.articles__card-link:hover svg {
  transform: translateX(3px);
}

@media (max-width: 700px) {
  .articles__meta {
    gap: 12px;
    row-gap: 6px;
  }
}
</style>
