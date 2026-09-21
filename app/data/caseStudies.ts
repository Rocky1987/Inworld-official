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
    category: '應用實例／空間資訊與圖資治理',
    title: '地理資訊管理系統',
    subtitle: '空間數據的數位基石：現代 GIS Platform 架構與實務',
    summary:
      '在實體場域管理與工程營運中，超過 80% 的業務數據都具備「空間位置」屬性。傳統將數據孤立於 Excel、紙本或分散 CAD 圖檔的模式，已無法應對高強度的協同管理需求。現代地理資訊管理系統（GIS Platform）不僅是一張電子地圖，而是將異質空間資料、屬性資料庫、即時物聯網與人工智慧深度融合的數位決策中樞。',
    tags: ['WebGIS', '圖資治理', '空間資料庫', 'GeoAI', '邊緣物聯網', '數位孿生'],
    image: '/images/gis.png',
    sections: [
      {
        id: 'definition',
        number: '01',
        title: '什麼是地理資訊管理系統？',
        paragraphs: [
          '地理資訊管理系統（Geographic Information System, GIS）是一套能夠對空間地理分佈數據進行採集、儲存、管理、空間運算、分析與視覺化呈現的整合性資訊系統。',
          '與一般企業管理系統（如 ERP、CRM）最大的差異，在於「空間維度」的深度結合：',
          '當空間幾何與業務屬性透過空間索引（Spatial Index）緊密綁定時，地圖便不再只是靜態背景圖，而是一個具備點擊查詢、空間疊加、路徑分析與環域檢索能力的動態業務操作平台。'
        ],
        list: [
          '空間幾何（Geometry）：定義物件在哪裡，涵蓋點、線、面與 3D 體積模型（例如：地下管線走向、地籍邊界、道路中線、設施坐標）',
          '業務屬性（Attributes）：定義物件是什麼，包含規格型號、建造年份、歷次巡檢紀錄、維護合約、權屬單位與狀態'
        ]
      },
      {
        id: 'why-adopt',
        number: '02',
        title: '為什麼現代組織必須導入？（核心痛點與價值）',
        paragraphs: [
          '未導入標準化系統前，多數組織在圖資管理上面臨三大核心痛點：',
          '導入 GIS 的核心價值在於「將空間數據資產化」：將靜態封閉的圖檔轉化為組織共用的線上雲端資源，實現圖資即查即用、權限精準劃分、變更歷史透明可溯。'
        ],
        callout: {
          title: '導入前的三大核心痛點',
          items: [
            '圖資孤島與版本混亂：圖檔長期分散於各科室、個人電腦或專案硬碟中，缺乏「單一真實來源（Single Source of Truth）」，常發生現場施工誤用舊版圖資而導致挖損的風險',
            '格式壁壘與對齊成本高昂：CAD（DWG/DXF）、Shapefile、GeoJSON、紙本藍圖、空拍正射影像等格式各異，且常夾雜 TWD97、WGS84 等不同坐標系統，每次跨單位圖資比對皆需依賴專業製圖人員人工轉檔套疊，耗時費力',
            '資料缺乏生命週期異動追溯：傳統圖面修改多採直接覆蓋存檔，缺乏稽核審核機制（Audit Log），無法追溯是誰在何時、因何專案變更了管線走向，交接與責任釐清極為困難'
          ]
        }
      },
      {
        id: 'architecture',
        number: '03',
        title: '系統核心技術架構與數據整合鏈路',
        paragraphs: [
          '現代化 WebGIS 系統通常採用高內聚、低耦合的分層架構設計，確保百萬級幾何圖元的流暢運算：'
        ],
        list: [
          '前端展示與視覺化層：基於 WebGL／GPU 加速技術建構 2D 向量圖台與 3D 地形場景，提供自適應儀表板、空間量測工具、屬性檢索面板與自訂圖層控制器',
          '應用服務與空間分析層：提供 RESTful API、GraphQL 與國際標準 OGC 服務（WMS、WFS、WMTS、Vector Tiles），整合空間拓撲檢查引擎、動態投影坐標轉換演算法與審核工作流（Workflow Engine）',
          '空間資料治理層：以專業空間資料庫（如 PostgreSQL + PostGIS）為核心，建立 R-Tree 空間索引，支援向量圖磚快取切片（MVT）、檔案儲存服務與歷程版本控管'
        ]
      },
      {
        id: 'features',
        number: '04',
        title: '關鍵功能模組與全流程協同',
        paragraphs: ['系統圍繞空間數據生命週期，提供完整的標準作業閉環：'],
        list: [
          '圖層分級與動態套疊（Multi-layer Overlay）：支援自由勾選套疊地形底圖、高解析正射航照、地籍線、管線網路與現勘設施點位，快速進行透視對比',
          '空間條件查詢與環域分析（Spatial Query & Buffer）：支援框選行政區統計資產、沿道路中心線向外 50 公尺進行施工影響範圍緩衝分析等進階空間運算',
          '線上編修與審核簽核流（Online Editing & Workflow）：第一線人員可在瀏覽器直接進行幾何繪製、點位校正並提送變更申請；主管經在線比對確認無誤後一鍵審核入庫，自動生成版本歷史',
          '細緻的權限管控（Role-Based Access Control, RBAC）：精細劃分「瀏覽檢視」、「向量下載」、「編輯修訂」、「審核發布」等多級權限，確保機敏圖資安全不外流'
        ]
      },
      {
        id: 'outcomes',
        number: '05',
        title: '導入成效與數位資產沉澱',
        list: [
          '跨單位協同效率提升 70%：徹底省去公文調閱紙本圖面的往返時間，各單位皆能以單一入口即時查詢最新共用圖資',
          '工程決策零時差：現場人員利用平板或行動裝置連線圖台，即時確認地下設施分佈，大幅降低誤挖風險與工安意外',
          '建立永久空間數據資產庫：所有的管線汰換、設備履歷與維運巡查數據，皆以精確坐標沉澱於系統資料庫中，徹底解決人員輪調導致的經驗斷層'
        ]
      },
      {
        id: 'geoai',
        number: '06',
        title: '次世代革新：GIS × 人工智慧（GeoAI）深度融合',
        paragraphs: [
          '結合生成式大語言模型（LLM）與電腦視覺（CV），將傳統 GIS 由「圖資查詢工具」進化為「具備語意推理能力的智慧決策平台」：'
        ],
        list: [
          '自然語言空間對話檢索（NL2GIS／Text-to-Spatial Query）：整合 LLM 與空間資料庫，使用者無需學習複雜的 SQL 語法，直接以自然語言提問（例如：「找出轄區內三年以上未檢修且直徑大於 300mm 的自來水管線」），AI 即自動轉換為空間查詢指令並在地圖上高亮標示',
          '空間多模態 RAG 知識庫檢索：將歷年竣工圖說、法規條文、巡檢照片與空間坐標一併進行向量化（Vector Embedding），點選圖面特定街廓，系統自動檢索相應法規與工程限制，生成土地評估摘要',
          '航照與影像特徵自動辨識（Computer Vision）：透過神經網路模型自動辨識空拍圖或無人機影像，快速抓取違規建築邊界、農地工廠異動、光電板分佈或邊坡崩塌痕跡，並自動向量化轉為 GIS 圖層，大幅節省人力巡檢成本'
        ]
      },
      {
        id: 'digital-twin-iot',
        number: '07',
        title: '實體世界感知：空間數位孿生與邊緣物聯網（IoT）串接',
        paragraphs: ['擺脫靜態圖資限制，將實體世界運行的動態數據即時映射於數位空間：'],
        list: [
          '車載與動態目標即時軌跡追蹤：串接車載 GPS 終端與 4G/5G 通訊模組，透過動態坐標轉換與地圖匹配（Map Matching）演算法，在圖台上即時展示巡檢車輛、施工機具的當前位置、行駛速率與歷史作業軌跡',
          '感測器即時熱區與聯動預警：無縫串接現地淹水水位計、機房溫濕度、邊坡傾角等邊緣感測器（IoT Nodes），當數值超越警戒閥值時，圖台自動縮放至告警位置並觸發環域受災分析，同步推播警戒訊息至管理端'
        ]
      },
      {
        id: 'future-outlook',
        number: '08',
        title: '未來展望：從被動管理到預測型主動決策',
        paragraphs: ['次世代 GIS 的核心價值在於從「記錄歷史事實」邁向「預判未知風險」：'],
        list: [
          '設施損壞與老化趨勢預測（Predictive Maintenance）：結合管材材質、使用年限、土壤環境與維修紀錄建立預測模型，主動標定高風險管段，提前安排預防性修繕',
          '極端氣候災防動態模擬：結合 3D 高程模型（DEM/DSM）與氣象降雨數值，在圖台模擬強降雨情境下的淹水擴散趨勢與排水管網負載極限，為防災疏散提供科學化數據支撐'
        ]
      }
    ]
  }
]

export function getCaseBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug)
}
