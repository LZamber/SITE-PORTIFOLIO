import { MARQUEE_ITEMS } from '../data/projects'

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className={`marquee-track flex whitespace-nowrap ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
      {items.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className="inline-flex items-center gap-2.5 px-3.5 py-0.5 text-[13px] sm:text-xs md:gap-3 md:px-4 md:py-0 md:text-sm lg:text-base font-medium uppercase tracking-[0.18em] antialiased"
        >
          <span>✻</span>
          {item}
        </span>
      ))}
    </div>
  )
}

function MarqueeStrip({ reverse = false, variant }: { reverse?: boolean; variant: 'purple' | 'dark' }) {
  const stripClass =
    variant === 'purple'
      ? 'bg-purple-glow text-ink shadow-[0_4px_16px_rgba(0,0,0,0.35)] md:shadow-[0_8px_24px_rgba(0,0,0,0.5)]'
      : 'bg-ink text-white border-y border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.35)] md:shadow-[0_8px_24px_rgba(0,0,0,0.5)]'

  return (
    <div className={`w-full py-2.5 md:py-2 overflow-hidden ${stripClass}`}>
      <MarqueeTrack reverse={reverse} />
    </div>
  )
}

export function Marquee() {
  return (
    <section
      aria-hidden="false"
      className="relative z-30 pointer-events-none overflow-hidden md:overflow-visible isolate mt-3 mb-9 md:mt-0 md:-mt-[90px] md:-mb-[60px]"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-ink to-transparent z-10 md:hidden"
      />

      <div className="relative h-[128px] sm:h-[132px] md:h-[180px] flex items-center justify-center">
        <div className="marquee-layer transform-gpu absolute left-1/2 top-[58%] w-[152%] sm:top-1/2 sm:w-[132%] md:w-[160%] md:top-1/2 -translate-x-1/2 -translate-y-[calc(50%+14px)] sm:-translate-y-[calc(50%+4px)] md:-translate-y-1/2 -rotate-[9deg] sm:-rotate-[6deg] md:-rotate-[8deg]">
          <MarqueeStrip variant="purple" />
        </div>
        <div className="marquee-layer transform-gpu absolute left-1/2 top-[58%] w-[152%] sm:top-1/2 sm:w-[132%] md:w-[160%] md:top-1/2 -translate-x-1/2 -translate-y-[calc(50%-14px)] sm:-translate-y-[calc(50%-4px)] md:-translate-y-1/2 rotate-[9deg] sm:rotate-[6deg] md:rotate-[8deg]">
          <MarqueeStrip variant="dark" reverse />
        </div>
      </div>
    </section>
  )
}
