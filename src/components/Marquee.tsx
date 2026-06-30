import { MARQUEE_ITEMS } from '../data/projects'

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className={`flex whitespace-nowrap ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
      {items.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className="inline-flex items-center gap-3 px-4 text-sm sm:text-base font-medium uppercase tracking-[0.18em]"
        >
          <span>✻</span>
          {item}
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <section
      aria-hidden="false"
      className="relative z-30 pointer-events-none overflow-visible"
      style={{ marginTop: '-90px', marginBottom: '-60px' }}
    >
      <div className="relative h-[140px] sm:h-[180px] flex items-center justify-center">
        <div className="absolute inset-x-0" style={{ transform: 'rotate(-8deg)' }}>
          <div className="w-[160%] -ml-[30%] py-2 bg-purple-glow text-ink shadow-[0_8px_24px_rgba(0,0,0,0.5)] overflow-hidden">
            <MarqueeTrack />
          </div>
        </div>
        <div className="absolute inset-x-0" style={{ transform: 'rotate(8deg)' }}>
          <div className="w-[160%] -ml-[30%] py-2 bg-ink text-white border-y border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.5)] overflow-hidden">
            <MarqueeTrack reverse />
          </div>
        </div>
      </div>
    </section>
  )
}
