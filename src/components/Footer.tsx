const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lucasszamberlan/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/lzamber',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M7.443 5.349c.728 0 1.388.063 1.988.184.6.122 1.108.328 1.535.605.422.282.752.658.987 1.13.227.474.347 1.057.347 1.752 0 .751-.171 1.378-.514 1.876-.339.501-.846.913-1.516 1.234.913.264 1.594.724 2.043 1.378.448.654.676 1.443.676 2.367 0 .749-.146 1.395-.434 1.94-.291.546-.681.992-1.171 1.337-.487.348-1.045.604-1.671.769-.62.166-1.262.247-1.92.247H0V5.349h7.443zm-.435 5.439c.6 0 1.094-.144 1.481-.43.385-.286.578-.751.578-1.388 0-.359-.063-.652-.193-.877-.131-.227-.301-.404-.514-.535-.213-.131-.456-.222-.732-.275-.275-.057-.564-.082-.86-.082H3.246v3.587h3.762zm.211 5.7c.327 0 .642-.029.937-.097.302-.064.566-.169.802-.314.231-.146.418-.348.557-.605.135-.258.205-.589.205-.991 0-.795-.225-1.358-.674-1.696-.451-.339-1.054-.51-1.806-.51H3.246v4.213h3.973zM17.052 16.55c.439.43 1.075.642 1.901.642.593 0 1.105-.149 1.535-.45.428-.301.692-.621.793-.957h2.638c-.422 1.31-1.072 2.243-1.946 2.806-.875.564-1.939.846-3.186.846-.864 0-1.644-.139-2.342-.42-.692-.281-1.281-.682-1.766-1.205-.485-.523-.86-1.149-1.122-1.881-.262-.732-.395-1.538-.395-2.418 0-.852.135-1.643.408-2.376.273-.733.659-1.367 1.152-1.901.495-.535 1.083-.957 1.766-1.265.682-.31 1.444-.466 2.281-.466.937 0 1.756.181 2.452.547.696.366 1.27.86 1.717 1.482.451.621.781 1.337.99 2.144.211.808.286 1.658.232 2.547h-7.892c.045.94.286 1.659.726 2.124zM20.4 9.939c-.347-.382-.879-.574-1.594-.574-.467 0-.857.079-1.166.236-.31.158-.554.355-.738.59-.181.235-.305.481-.371.738-.067.258-.105.49-.119.7h4.704c-.067-.747-.319-1.314-.716-1.69zM15.075 6.49h6.13V8.005h-6.13V6.49z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/lucaszamber_/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
] as const

export function Footer() {
  return (
    <footer className="relative noise-block bg-paper text-ink overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 grid-bg-dark opacity-70" />
      <div aria-hidden="true" className="absolute -right-10 -top-20 font-display text-[8rem] min-[480px]:text-[14rem] sm:text-[22rem] lg:text-[28rem] leading-none text-purple/10 select-none pointer-events-none overflow-hidden">
        *
      </div>
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32 text-center">
        <p className="text-ink/60 uppercase tracking-[0.3em] text-[9px] sm:text-[10px] mb-4 sm:mb-6">Vamos conversar</p>
        <h2 className="font-display text-5xl min-[480px]:text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] mb-8 sm:mb-12 text-ink leading-[0.9]">
          Bora criar
          <br />
          <span className="text-purple">algo bom?</span>
        </h2>
        <a
          href="https://wa.me/5555996815492"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-purple text-white hover:bg-purple-glow transition-colors duration-300 px-8 sm:px-12 py-4 sm:py-6 rounded-full text-base sm:text-xl font-medium"
        >
          Fale comigo
          <span aria-hidden="true">→</span>
        </a>
        <div className="mt-12 sm:mt-16 flex items-center justify-center gap-4 sm:gap-5">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-purple hover:text-white hover:border-purple transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="mt-12 sm:mt-16 text-[10px] sm:text-xs text-ink/60">© 2026 Lucas Zamberlan — Estratégia & Design</p>
      </div>
    </footer>
  )
}
