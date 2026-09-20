import type { Ref } from 'vue'

interface ParallaxTargets {
  hero: Ref<HTMLElement | null>
  coreStage: Ref<HTMLElement | null>
  backdrop: Ref<HTMLElement | null>
  floatCard: Ref<HTMLElement | null>
  badgeChip: Ref<HTMLElement | null>
}

export function useParallaxTilt(targets: ParallaxTargets) {
  let mouseX = 0
  let mouseY = 0
  let currentX = 0
  let currentY = 0
  let rafId = 0

  const onMouseMove = (e: MouseEvent) => {
    const hero = targets.hero.value
    if (!hero) return
    const rect = hero.getBoundingClientRect()
    mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
  }

  const onMouseLeave = () => {
    mouseX = 0
    mouseY = 0
  }

  const animate = () => {
    currentX += (mouseX - currentX) * 0.06
    currentY += (mouseY - currentY) * 0.06

    const coreStage = targets.coreStage.value
    if (coreStage) {
      const tiltX = -currentY * 7
      const tiltY = currentX * 9
      const moveX = currentX * 14
      const moveY = currentY * 12
      coreStage.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${moveX}px, ${moveY}px, 0)`
    }

    const backdrop = targets.backdrop.value
    if (backdrop) {
      const bgMoveX = -currentX * 24
      const bgMoveY = -currentY * 18
      backdrop.style.transform = `translate3d(${bgMoveX}px, ${bgMoveY}px, 0) scale(1.02)`
    }

    const floatCard = targets.floatCard.value
    if (floatCard) {
      const cardMoveX = currentX * 20
      const cardMoveY = currentY * 18
      floatCard.style.transform = `translate3d(${cardMoveX}px, ${cardMoveY}px, 20px)`
    }

    const badgeChip = targets.badgeChip.value
    if (badgeChip) {
      const chipMoveX = currentX * -12
      const chipMoveY = currentY * -10
      badgeChip.style.transform = `translate3d(${chipMoveX}px, ${chipMoveY}px, 30px)`
    }

    rafId = requestAnimationFrame(animate)
  }

  onMounted(() => {
    const hero = targets.hero.value
    if (!hero || !window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return

    hero.addEventListener('mousemove', onMouseMove)
    hero.addEventListener('mouseleave', onMouseLeave)
    rafId = requestAnimationFrame(animate)
  })

  onUnmounted(() => {
    cancelAnimationFrame(rafId)
    targets.hero.value?.removeEventListener('mousemove', onMouseMove)
    targets.hero.value?.removeEventListener('mouseleave', onMouseLeave)
  })
}
