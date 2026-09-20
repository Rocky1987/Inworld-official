export interface CaseStat {
  value: string
  unit?: string
  label: string
}

export interface CaseCallout {
  title: string
  items: string[]
}

export interface CaseSection {
  id: string
  number: string
  title: string
  paragraphs?: string[]
  list?: string[]
  callout?: CaseCallout
  stats?: CaseStat[]
}

export interface CaseStudy {
  slug: string
  code: string
  category: string
  title: string
  subtitle: string
  summary: string
  tags: string[]
  image?: string
  sections: CaseSection[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'gis',
    code: 'CASE 01',
    category: '應用實例／公部門圖資',
    title: '地理資訊管理系統',
    subtitle: 'GIS Data Management Platform',
    summary:
      '整合公部門地籍、管線、地形等多來源圖資，建置可線上查詢、編輯、審核的地理資訊管理平台，取代人工比對圖紙的作業方式，並提供跨單位圖資共用與版本控管機制。',
    tags: ['WebGIS', '圖資治理', '空間資料庫', '公部門履約'],
    image: '/images/gis.png',
    sections: [
      {
        id: 'background',
        number: '01',
        title: '為什麼需要這套系統',
        paragraphs: [
          '公部門圖資長期分散在不同科室、不同格式（CAD 圖檔、Shapefile、紙本地籍圖），每次跨單位比對都要靠人工套圖，不但耗時，版本一多就容易對不齊，甚至發生用到舊圖施工的情形。',
          '既有做法多半是「誰要用誰去要圖」，沒有統一入口，也沒有變更紀錄可以追溯，稽核與交接時特別痛苦。'
        ],
        callout: {
          title: '導入前的三個痛點',
          items: [
            '圖資分散在各科室與個人電腦，沒有單一真實來源（single source of truth）',
            '圖紙比對靠人工肉眼，版本混淆、對不齊的風險高',
            '跨單位申請圖資流程冗長，無法即時查詢與標繪'
          ]
        }
      },
      {
        id: 'integration',
        number: '02',
        title: '系統架構與圖資整合',
        paragraphs: [
          '第一步是把既有的 Shapefile、GeoJSON、CAD 圖檔等多來源格式，統一轉入空間資料庫（PostGIS），並依圖層屬性（地籍、管線、地形、設施）建立分層管理機制，讓不同單位可以依權限存取對應圖層。'
        ],
        list: [
          '介接既有 Shapefile／GeoJSON／CAD 圖資，統一轉入空間資料庫',
          '依圖層屬性分類管理，支援後續擴充新圖層',
          '建立圖資中介 API，供其他內部系統查詢介接'
        ]
      },
      {
        id: 'operation',
        number: '03',
        title: '線上操作與審核流程',
        paragraphs: [
          '瀏覽器端即可完成查詢、量測、標繪與圖層套疊，不需要安裝專用 GIS 用戶端軟體，第一線同仁上手成本低。',
          '圖資異動採「編輯 → 送審 → 發布」流程，每次發布都會保留歷史版本，若發現問題可直接回溯比對、還原，避免資料被覆蓋後找不回來。'
        ],
        list: [
          '瀏覽器線上查詢、量測、標繪，免安裝用戶端',
          '圖資異動需經審核才會正式發布',
          '保留歷史版本，支援回溯比對與還原'
        ]
      },
      {
        id: 'outcome',
        number: '04',
        title: '導入成效',
        paragraphs: ['系統上線後，圖資查詢與比對作業時間大幅縮短，跨單位協作也不再需要靠人工傳遞圖檔。'],
        stats: [
          { value: '12', unit: '層', label: '整合圖資圖層' },
          { value: '3', unit: '年', label: '穩定維運經驗' },
          { value: '99', unit: '%', label: '圖資比對正確率' },
          { value: '24', unit: 'H', label: '線上服務不中斷' }
        ]
      },
      {
        id: 'delivery',
        number: '05',
        title: '導入方式與服務範圍',
        paragraphs: [
          '依單位既有圖資現況與需求規模報價，可採一次性建置或分期導入；上線後提供圖資治理顧問與系統維運支援，確保跨單位使用時圖層權限與資料品質一致。'
        ]
      }
    ]
  }
]

export function getCaseBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug)
}
