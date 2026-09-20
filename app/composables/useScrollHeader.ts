export function useScrollHeader(threshold = 8) {
  const isScrolled = ref(false)

  const onScroll = () => {
    isScrolled.value = window.scrollY > threshold
  }

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { isScrolled }
}
