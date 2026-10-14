import { articles } from '../../app/data/articles'
import { caseStudies } from '../../app/data/caseStudies'

const SITE_URL = 'https://official.inworld.tw'

export default defineEventHandler((event) => {
  const staticPaths = ['/', '/contact', '/line', '/articles']
  const articlePaths = articles.map((item) => `/articles/${item.slug}`)
  const casePaths = caseStudies.map((item) => `/cases/${item.slug}`)

  const urls = [...staticPaths, ...articlePaths, ...casePaths]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n')}
</urlset>
`

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return body
})
