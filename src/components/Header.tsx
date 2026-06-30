import type { MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection, scrollToTop } from '../utils/scroll'

type NavItem =
  | { label: string; shortLabel?: string; type: 'home' }
  | { label: string; type: 'section'; sectionId: string }
  | { label: string; shortLabel?: string; type: 'page'; to: string }

const navItems: NavItem[] = [
  { label: 'Home', type: 'home' },
  { label: 'Design', type: 'section', sectionId: 'design' },
  { label: 'Motion', type: 'section', sectionId: 'motion' },
  { label: 'Foto', type: 'section', sectionId: 'foto' },
  { label: 'Mais de mim', shortLabel: 'Sobre', type: 'page', to: '/sobre' },
]

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleHomeClick = (e: MouseEvent) => {
    e.preventDefault()
    if (location.pathname === '/') {
      scrollToTop()
      window.history.replaceState(null, '', '/')
    } else {
      navigate('/')
    }
  }

  const handleSectionClick = (e: MouseEvent, sectionId: string) => {
    e.preventDefault()
    if (location.pathname === '/') {
      scrollToSection(sectionId)
      window.history.replaceState(null, '', `#${sectionId}`)
    } else {
      navigate(`/#${sectionId}`)
    }
  }

  const isActive = (item: NavItem) => {
    if (item.type === 'page') return location.pathname === item.to
    if (item.type === 'home') return location.pathname === '/' && !location.hash
    if (item.type === 'section') return location.pathname === '/' && location.hash === `#${item.sectionId}`
    return false
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-ink/40 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
        <Link
          to="/"
          onClick={handleHomeClick}
          className="font-display text-lg sm:text-xl tracking-tight shrink-0"
        >
          LZ<span className="text-purple">*</span>
        </Link>

        <nav className="flex items-center gap-0.5 sm:gap-1 md:gap-2 text-[10px] sm:text-xs md:text-sm overflow-x-auto scrollbar-none max-w-[min(100%,calc(100vw-4.5rem))]">
          {navItems.map((item) => {
            const active = isActive(item)
            const baseClass = `shrink-0 px-2 sm:px-3 py-1.5 rounded-full whitespace-nowrap transition-colors duration-300 ${
              active
                ? 'text-white bg-purple/20'
                : 'text-white/80 hover:text-white hover:bg-purple/30'
            }`

            if (item.type === 'home') {
              return (
                <a key={item.label} href="/" onClick={handleHomeClick} className={baseClass}>
                  {item.label}
                </a>
              )
            }

            if (item.type === 'section') {
              return (
                <a
                  key={item.label}
                  href={`/#${item.sectionId}`}
                  onClick={(e) => handleSectionClick(e, item.sectionId)}
                  className={baseClass}
                >
                  {item.label}
                </a>
              )
            }

            return (
              <Link key={item.label} to={item.to} className={baseClass}>
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.shortLabel ?? item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
