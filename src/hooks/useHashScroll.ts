import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../utils/scroll'

export function useHashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (pathname !== '/' || !hash) return

    const sectionId = hash.replace('#', '')
    const timer = window.setTimeout(() => scrollToSection(sectionId), 150)

    return () => window.clearTimeout(timer)
  }, [pathname, hash])
}
