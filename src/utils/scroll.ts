const HEADER_OFFSET = 80

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'instant' : 'smooth' })
}

export function scrollToTop(smooth = true) {
  const useSmooth = smooth && !prefersReducedMotion()
  window.scrollTo({ top: 0, behavior: useSmooth ? 'smooth' : 'instant' })
}
