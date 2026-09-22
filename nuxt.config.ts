// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-Hant' },
      title: '尹渥資訊科技有限公司｜全端軟體開發・GIS地理資訊整合・企業系統客製',
      meta: [
        {
          name: 'description',
          content:
            '尹渥資訊科技專注於現代全端軟體研發、邊緣 AI 與空間資訊整合，提供軟體開發、AI 整合、舊系統翻新、軟硬體整合、紙本流程電子化與維運顧問服務，以嚴謹工程方法打造穩健高效的企業數位系統。'
        },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: '尹渥資訊科技有限公司' },
        { property: 'og:locale', content: 'zh_TW' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700;900&family=Noto+Sans+TC:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap'
        }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
