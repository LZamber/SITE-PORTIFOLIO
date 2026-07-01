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
      className="relative z-30 pointer-events-none overflow-hidden -mt-6 mb-2 sm:-mt-16 sm:-mb-10 md:-mt-[90px] md:-mb-[60px]"
    >
      <div className="relative h-[100px] min-[480px]:h-[120px] sm:h-[160px] md:h-[180px] flex items-center justify-center">
        <div className="absolute inset-x-0 -rotate-[5deg] sm:-rotate-[8deg]">
          <div className="w-full sm:w-[140%] sm:-ml-[20%] md:w-[160%] md:-ml-[30%] py-1.5 sm:py-2 bg-purple-glow text-ink shadow-[0_8px_24px_rgba(0,0,0,0.5)] overflow-hidden">
            <MarqueeTrack />
          </div>
        </div>
        <div className="absolute inset-x-0 rotate-[5deg] sm:rotate-[8deg]">
          <div className="w-full sm:w-[140%] sm:-ml-[20%] md:w-[160%] md:-ml-[30%] py-1.5 sm:py-2 bg-ink text-white border-y border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.5)] overflow-hidden">
            <MarqueeTrack reverse />
          </div>
        </div>
      </div>
    </section>
  )
}
