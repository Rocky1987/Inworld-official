// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-Hant' },
      title: '尹渥資訊科技有限公司｜地理資訊整合・三維圖台開發・企業系統客製',
      meta: [
        {
          name: 'description',
          content:
            '尹渥資訊科技：把現場、圖資與資料庫，接成一張看得懂的作業圖。提供地理資訊整合、三維圖台開發與企業系統客製，以工程方法管理專案。'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'alternate icon', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700;900&family=Noto+Sans+TC:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap'
        }
      ]
    }
  }
})
