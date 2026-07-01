import { MARQUEE_ITEMS } from '../data/projects'

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className={`flex whitespace-nowrap ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
      {items.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className="inline-flex items-center gap-2 px-3 py-0.5 text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.16em] md:tracking-[0.18em]"
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
      className="relative z-30 pointer-events-none overflow-hidden -mt-2 mb-7 md:mt-0 md:-mt-[52px] md:mb-9"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-ink to-transparent z-10 md:hidden"
      />

      <div className="relative h-[84px] sm:h-[92px] md:h-[118px] lg:h-[128px] flex items-center justify-center">
        <div className="absolute inset-x-0 top-1/2 -translate-y-[calc(50%+4px)] -rotate-[4deg] sm:-rotate-[6deg] md:-rotate-[7deg]">
          <div className="w-full sm:w-[132%] sm:-ml-[16%] md:w-[158%] md:-ml-[29%] py-1.5 bg-purple-glow text-ink shadow-[0_6px_20px_rgba(0,0,0,0.4)] overflow-hidden">
            <MarqueeTrack />
          </div>
        </div>
        <div className="absolute inset-x-0 top-1/2 -translate-y-[calc(50%-4px)] rotate-[4deg] sm:rotate-[6deg] md:rotate-[7deg]">
          <div className="w-full sm:w-[132%] sm:-ml-[16%] md:w-[158%] md:-ml-[29%] py-1.5 bg-ink text-white border-y border-white/15 shadow-[0_6px_20px_rgba(0,0,0,0.4)] overflow-hidden">
            <MarqueeTrack reverse />
          </div>
        </div>
      </div>
    </section>
  )
}
