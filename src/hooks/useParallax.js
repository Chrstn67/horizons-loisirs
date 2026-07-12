import { useEffect, useRef } from "react"

/**
 * Applique un effet de parallaxe leger sur les enfants d'un conteneur
 * qui portent un attribut data-speed (ex: data-speed="0.2").
 * Optimise via requestAnimationFrame et desactive si l'utilisateur
 * prefere reduire les animations.
 */
export function useParallax() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const layers = container.querySelectorAll("[data-speed]")
    let ticking = false

    const update = () => {
      const rect = container.getBoundingClientRect()
      const offset = rect.top
      layers.forEach((layer) => {
        const speed = Number.parseFloat(layer.getAttribute("data-speed")) || 0
        layer.style.transform = `translate3d(0, ${offset * speed}px, 0)`
      })
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return ref
}
