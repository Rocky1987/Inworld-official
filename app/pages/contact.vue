<script setup lang="ts">
const services = [
  '軟體開發',
  'AI 整合',
  '舊系統翻新',
  '軟硬體整合',
  '紙本流程電子化',
  '維運與技術顧問'
]

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: ''
})

const formError = ref('')

const handleSubmit = () => {
  formError.value = ''

  if (!form.email && !form.phone) {
    formError.value = 'Email 跟電話至少填一個，方便我們回覆。'
    return
  }

  const subject = `[網站諮詢] ${form.name} 的需求`
  const body = [
    `姓名：${form.name}`,
    `公司／單位：${form.company || '未填寫'}`,
    `Email：${form.email || '未填寫'}`,
    `電話／手機：${form.phone || '未填寫'}`,
    '',
    '想聊的事：',
    form.message
  ].join('\n')

  window.location.href = `mailto:decievemyself@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <section class="contact-page">
    <div class="contact-page__banner">
      <div class="container">
        <h1 class="contact-page__banner-title">將複雜的工程難題，轉化為穩健落地的數位資產</h1>
        <p>
          歡迎留下您的專案需求與現況，我們將以核心工程師的視野為您進行可行性與架構評估，提供最具性價比的實踐建議。
        </p>
      </div>
    </div>

    <div class="container contact-page__body">
      <div class="contact-page__grid">
        <div class="contact-card contact-card--form" v-reveal>
          <h2 class="contact-card__title">線上表單</h2>
          <p class="contact-card__desc">我們會在 1-2 個工作日內回覆。急的話直接打電話／LINE 比較快。</p>

          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="contact-form__row">
              <label class="contact-form__field">
                <span>姓名 <em>*</em></span>
                <input v-model="form.name" type="text" required />
              </label>
              <label class="contact-form__field">
                <span>公司／單位</span>
                <input v-model="form.company" type="text" />
              </label>
            </div>

            <div class="contact-form__row">
              <label class="contact-form__field">
                <span>Email</span>
                <input v-model="form.email" type="email" placeholder="example@example.com" />
              </label>
              <label class="contact-form__field">
                <span>電話／手機</span>
                <input v-model="form.phone" type="tel" placeholder="0912xxxxxx" />
              </label>
            </div>

            <p class="contact-form__hint" :class="{ 'is-error': formError }">
              {{ formError || 'Email 跟電話至少填一個，方便我們回覆。' }}
            </p>

            <label class="contact-form__field">
              <span>想聊的事 <em>*</em></span>
              <textarea
                v-model="form.message"
                required
                rows="5"
                placeholder="例如：我有一套 30 年的 VFP 老 ERP，想搬到 web，想評估費用／時間。"
              ></textarea>
            </label>

            <div class="contact-form__footer">
              <p class="contact-form__note">諮詢免費，依工作報價。我們不會把你的資料給第三方。</p>
              <button class="btn btn--gold" type="submit">
                送出
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
            </div>
          </form>
        </div>

        <div class="contact-page__side" v-reveal>
          <div class="contact-card">
            <h2 class="contact-card__subtitle">直接聯絡</h2>
            <ul class="contact-direct">
              <li>
                <span class="contact-direct__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.2 2.2Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <span>
                  <a href="tel:+886987623537">+886-987-623-537</a>
                  <small>行動電話</small>
                </span>
              </li>
              <li>
                <span class="contact-direct__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3C6.98 3 3 6.36 3 10.5c0 3.2 2.4 5.94 5.75 7.05-.13.5-.7 2.4-.8 2.77 0 0-.02.13.07.18a.28.28 0 0 0 .22 0c.28-.04 3.16-2.08 3.98-2.65.61.08 1.24.13 1.88.13 5.02 0 9-3.36 9-7.5S17.02 3 12 3Z" fill="currentColor"/></svg>
                </span>
                <span>
                  <a href="https://line.me/R/ti/p/@709mqmed" target="_blank" rel="noopener noreferrer">@709mqmed</a>
                  <small>LINE 官方帳號</small>
                </span>
              </li>
              <li>
                <span class="contact-direct__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4V6Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <span>
                  <a href="mailto:decievemyself@gmail.com">decievemyself@gmail.com</a>
                  <small>Email</small>
                </span>
              </li>
              <li>
                <span class="contact-direct__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-7.58 7-12a7 7 0 1 0-14 0c0 4.42 7 12 7 12Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="9" r="2.2" stroke="currentColor" stroke-width="1.6"/></svg>
                </span>
                <span>
                  <a href="https://www.google.com/maps/place/新北市新莊區富貴路502號4樓" target="_blank" rel="noopener noreferrer">新北市新莊區富貴路502號4樓</a>
                  <small>公司地址</small>
                </span>
              </li>
            </ul>
          </div>

          <div class="contact-card">
            <h2 class="contact-card__subtitle">我們做什麼</h2>
            <ul class="contact-services">
              <li v-for="item in services" :key="item">{{ item }}</li>
            </ul>
            <a class="contact-services__link" href="/#services">看完整服務 →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  position: relative;
  padding-bottom: clamp(72px, 10vw, 120px);
}

.contact-page__banner {
  background: linear-gradient(135deg, var(--blue-900), var(--blue-700));
  padding: clamp(40px, 6vw, 56px) 0;
  margin-bottom: clamp(40px, 6vw, 64px);
}

.contact-page__banner-title {
  max-width: 760px;
  margin: 0 0 14px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(22px, 2.8vw, 30px);
  color: #ffffff;
  line-height: 1.4;
}

.contact-page__banner p {
  max-width: 760px;
  margin: 0;
  color: #eaf3fa;
  font-size: clamp(15px, 1.6vw, 17px);
  line-height: 1.8;
}

.contact-page__grid {
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: clamp(20px, 3vw, 32px);
  align-items: start;
}

.contact-card {
  background: var(--panel);
  border-radius: var(--radius-lg);
  padding: clamp(28px, 4vw, 40px);
  box-shadow: 0 24px 48px -32px rgba(16, 29, 44, 0.35);
}

.contact-card__title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(24px, 2.8vw, 30px);
  color: var(--ink);
  margin: 0 0 10px;
}

.contact-card__desc {
  font-size: 14px;
  color: var(--ink-soft);
  margin: 0 0 28px;
}

.contact-card__subtitle {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  color: var(--ink);
  margin: 0 0 18px;
}

.contact-page__side {
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 32px);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.contact-form__field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ink);
}

.contact-form__field em {
  color: var(--gold);
  font-style: normal;
}

.contact-form__field input,
.contact-form__field textarea {
  font: inherit;
  font-weight: 400;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--line);
  background: var(--bg);
  color: var(--ink);
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact-form__field input:focus,
.contact-form__field textarea:focus {
  outline: none;
  border-color: var(--blue-500);
  box-shadow: 0 0 0 3px var(--blue-100);
}

.contact-form__hint {
  margin: -8px 0 0;
  font-size: 12.5px;
  color: var(--ink-faint);
}

.contact-form__hint.is-error {
  color: #c0392b;
}

.contact-form__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 6px;
}

.contact-form__note {
  margin: 0;
  font-size: 12.5px;
  color: var(--ink-faint);
}

.contact-direct {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-direct li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.contact-direct__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--bg-soft);
  color: var(--blue-700);
}

.contact-direct__icon svg {
  width: 17px;
  height: 17px;
}

.contact-direct a {
  display: block;
  font-size: 14.5px;
  font-weight: 600;
  color: var(--ink);
}

.contact-direct a:hover {
  color: var(--blue-700);
}

.contact-direct small {
  display: block;
  font-size: 12px;
  color: var(--ink-faint);
  margin-top: 2px;
}

.contact-services {
  list-style: none;
  margin: 0 0 18px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  color: var(--ink-soft);
}

.contact-services li::before {
  content: '・';
  color: var(--gold);
  margin-right: 4px;
}

.contact-services__link {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--blue-700);
}

.contact-services__link:hover {
  color: var(--blue-900);
}

@media (max-width: 900px) {
  .contact-page__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .contact-form__row {
    grid-template-columns: 1fr;
  }

  .contact-form__footer {
    flex-direction: column;
    align-items: stretch;
  }

  .contact-form__footer .btn {
    justify-content: center;
  }
}
</style>
