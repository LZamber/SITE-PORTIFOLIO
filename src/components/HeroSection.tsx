import { Link } from 'react-router-dom'

function HeroDecorations() {
  return (
    <>
      <div className="absolute left-[5%] top-[40%] w-48 lg:w-56 rotate-[-6deg] bg-ink border border-white/20 shadow-2xl z-30">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="ml-2 text-[10px] text-white/50">folder.psd</span>
        </div>
        <div className="p-3 grid grid-cols-3 gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square bg-purple/40 border border-purple-glow/30" />
          ))}
        </div>
      </div>

      <div className="absolute right-[5%] top-[35%] w-40 lg:w-48 rotate-[4deg] bg-purple text-white p-3 border border-purple-glow shadow-2xl z-30">
        <p className="font-display text-lg lg:text-xl leading-tight">
          Direção
          <br />
          de Arte
        </p>
        <p className="text-[10px] mt-2 uppercase tracking-widest">v.2026</p>
      </div>
    </>
  )
}

function HeroBioCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-ink/90 backdrop-blur-md border border-white/15 shadow-2xl ${className}`}>
      <p className="text-xs md:text-sm text-white leading-snug md:leading-relaxed">
        Visão macro para resolver o micro. Entender de várias disciplinas é o que me permite criar direções de arte
        que não são apenas estéticas, mas que funcionam e resolvem problemas reais.
      </p>
      <p className="mt-2 md:mt-3 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-purple-glow">
        Lucas Zamberlan, 22 — RS
      </p>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hard-radial noise-block">
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-60" />

      {/* ── Mobile ── */}
      <div className="relative px-3 pb-3 md:hidden">
        <div className="relative z-20 flex flex-col gap-1.5 pt-3 text-[9px] uppercase tracking-widest text-white/80">
          <span className="inline-flex w-fit items-center gap-2 border border-white/40 bg-ink/40 backdrop-blur-md rounded-full px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-glow animate-pulse" />
            Open for projects
          </span>
        </div>

        <div className="relative mt-2 w-full">
          <h1
            aria-hidden="true"
            className="font-display absolute inset-x-0 top-10 z-[1] text-center text-white select-none pointer-events-none drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)] text-[clamp(3.75rem,20vw,6rem)] leading-[0.84]"
          >
            <span className="block">Estratégia</span>
            <span className="block text-purple-glow">& Design</span>
          </h1>

          <div className="relative z-10 mx-auto flex w-full max-w-[300px] flex-col items-center pt-[8.5rem]">
            <div className="flex w-full justify-center overflow-visible">
              <img
                src="/images/lucas.png"
                alt="Lucas Zamberlan"
                className="block h-auto w-auto max-h-[min(44vh,330px)] origin-bottom scale-[1.1] translate-x-[3%] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(107,39,205,0.45)] pointer-events-none"
              />
            </div>
            <HeroBioCard className="w-full rounded-b-2xl rounded-t-md px-4 py-3 -mt-px" />
          </div>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="relative hidden md:block min-h-screen pb-28">
        {/* Degradê escuro entre a foto e o marquee */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-[55%] pointer-events-none z-[15]"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(11,11,12,0.45) 35%, rgba(11,11,12,0.85) 65%, #0b0b0c 100%)',
          }}
        />

        <div className="absolute top-24 left-6 z-30 flex flex-col gap-2 text-xs uppercase tracking-widest text-white/80">
          <span className="inline-flex w-fit items-center gap-2 border border-white/40 bg-ink/40 backdrop-blur-md rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-glow animate-pulse" />
            Open for projects
          </span>
          <span>Portfolio / 2026</span>
        </div>

        <h1
          aria-hidden="true"
          className="font-display absolute inset-x-0 top-[8%] z-[5] text-center text-white select-none pointer-events-none drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)] px-2 text-[clamp(2.75rem,14vw,20rem)] leading-[0.85]"
        >
          <span className="block">Estratégia</span>
          <span className="block text-purple-glow -translate-x-[12%]">& Design</span>
        </h1>

        <img
          src="/images/lucas.png"
          alt="Lucas Zamberlan"
          className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 h-[82%] lg:h-[92%] w-auto max-w-[95vw] object-contain object-bottom drop-shadow-[0_30px_60px_rgba(107,39,205,0.55)] pointer-events-none"
        />

        <HeroDecorations />

        <div className="absolute bottom-10 right-6 z-40 max-w-md">
          <HeroBioCard className="rounded-2xl p-5 text-right" />
        </div>
      </div>
    </section>
  )
}

export function AboutCta() {
  return (
    <section className="relative bg-hard-radial py-20 sm:py-32 lg:py-48 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-40" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[8rem] min-[480px]:text-[14rem] sm:text-[28rem] lg:text-[40rem] leading-none text-purple/15 select-none pointer-events-none overflow-hidden"
      >
        *
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm sm:text-xl lg:text-2xl text-white font-medium mb-4 sm:mb-6 leading-snug">
          Quer entender como eu penso e
        </p>
        <h2 className="font-display text-purple-glow text-3xl min-[480px]:text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-[0.9]">
          quem eu sou
          <br />
          fora do grid?
        </h2>
        <Link
          to="/sobre"
          className="mt-8 sm:mt-12 inline-flex items-center gap-3 bg-purple hover:bg-purple-glow transition-colors duration-300 px-6 sm:px-10 py-3.5 sm:py-5 rounded-full text-sm sm:text-lg font-medium text-white"
        >
          Mais de mim
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
