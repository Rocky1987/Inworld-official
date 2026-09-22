export const SITE_URL = 'https://official.inworld.tw'
export const SITE_NAME = '尹渥資訊科技有限公司'
export const DEFAULT_OG_IMAGE = '/images/ai-core-cropped.png'

interface SeoOptions {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  path: MaybeRefOrGetter<string>
  image?: MaybeRefOrGetter<string | undefined>
  type?: MaybeRefOrGetter<'website' | 'article'>
}

export function useSeo(options: SeoOptions) {
  const url = computed(() => `${SITE_URL}${toValue(options.path)}`)
  const ogImage = computed(() => {
    const image = toValue(options.image) || DEFAULT_OG_IMAGE
    return image.startsWith('http') ? image : `${SITE_URL}${image}`
  })

  useSeoMeta({
    title: () => toValue(options.title),
    description: () => toValue(options.description),
    ogTitle: () => toValue(options.title),
    ogDescription: () => toValue(options.description),
    ogUrl: () => url.value,
    ogImage: () => ogImage.value,
    ogType: () => toValue(options.type) ?? 'website',
    ogSiteName: SITE_NAME,
    ogLocale: 'zh_TW',
    twitterCard: 'summary_large_image',
    twitterTitle: () => toValue(options.title),
    twitterDescription: () => toValue(options.description),
    twitterImage: () => ogImage.value
  })

  useHead({
    link: [{ rel: 'canonical', href: () => url.value }]
  })
}
