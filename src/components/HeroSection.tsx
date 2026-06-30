import { Link } from 'react-router-dom'

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] sm:min-h-[92vh] lg:min-h-screen overflow-hidden bg-hard-radial noise-block pb-44 sm:pb-32">
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-[45%] bg-gradient-to-b from-transparent via-ink/70 to-ink pointer-events-none z-30"
      />
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-60" />

      <h1
        aria-hidden="true"
        className="font-display absolute inset-x-0 top-[12%] sm:top-[10%] md:top-[8%] text-center text-white select-none pointer-events-none drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)] z-[5] px-2"
        style={{ fontSize: 'clamp(2.75rem, 14vw, 20rem)', lineHeight: 0.85 }}
      >
        <span className="block">Estratégia</span>
        <span className="block text-purple-glow -translate-x-[4%] sm:-translate-x-[6%] md:-translate-x-[12%]">
          & Design
        </span>
      </h1>

      <img
        src="/images/lucas.png"
        alt="Lucas Zamberlan"
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 h-[68%] sm:h-[78%] md:h-[82%] lg:h-[92%] w-auto max-w-[95vw] object-contain object-bottom drop-shadow-[0_30px_60px_rgba(107,39,205,0.55)] pointer-events-none"
      />

      <div className="hidden md:block absolute left-[5%] top-[40%] w-48 lg:w-56 rotate-[-6deg] bg-ink border border-white/20 shadow-2xl z-20">
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

      <div className="hidden md:block absolute right-[5%] top-[35%] w-40 lg:w-48 rotate-[4deg] bg-purple text-white p-3 border border-purple-glow shadow-2xl z-20">
        <p className="font-display text-lg lg:text-xl leading-tight">
          Direção
          <br />
          de Arte
        </p>
        <p className="text-[10px] mt-2 uppercase tracking-widest">v.2026</p>
      </div>

      <div className="absolute top-[4.5rem] sm:top-24 left-3 sm:left-6 z-30 flex flex-col gap-1.5 sm:gap-2 text-[9px] sm:text-xs uppercase tracking-widest text-white/80">
        <span className="inline-flex w-fit items-center gap-2 border border-white/40 bg-ink/40 backdrop-blur-md rounded-full px-2.5 sm:px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-glow animate-pulse" />
          Open for projects
        </span>
        <span>Portfolio / 2026</span>
      </div>

      <div className="absolute z-40 bottom-4 sm:bottom-10 right-3 sm:right-6 left-3 sm:left-auto sm:max-w-md">
        <div className="bg-ink/85 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 sm:p-5 shadow-2xl sm:text-right">
          <p className="text-[11px] sm:text-sm text-white leading-relaxed">
            Visão macro para resolver o micro. Entender de várias disciplinas é o que me permite criar direções de arte
            que não são apenas estéticas, mas que funcionam e resolvem problemas reais.
          </p>
          <p className="mt-2 sm:mt-3 text-[9px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-purple-glow">
            Lucas Zamberlan, 22 — RS
          </p>
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
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[14rem] sm:text-[28rem] lg:text-[40rem] leading-none text-purple/15 select-none pointer-events-none"
      >
        *
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm sm:text-xl lg:text-2xl text-white font-medium mb-4 sm:mb-6 leading-snug">
          Quer entender como eu penso e
        </p>
        <h2 className="font-display text-purple-glow text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-[0.9]">
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
