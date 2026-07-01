import { POLAROIDS } from '../data/projects'

const SKILLS = ['Estratégia', 'Direção de arte', 'Branding', 'Pesquisa', 'Motion', 'Fotografia'] as const

const INTERESTS = [
  'Academia',
  'Vôlei',
  'Chimarrão',
  'Estádios',
  'Festivais',
  'Cinema',
  'Rap nacional',
  'MPB',
] as const

export function SobrePage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[70vh] sm:min-h-[80vh] flex items-end noise-block">
        <img
          src="/images/lucas-camera.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/60 to-ink" />
        <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-40 mix-blend-overlay" />
        <div
          aria-hidden="true"
          className="absolute -right-4 sm:-right-10 bottom-[15%] sm:bottom-[35%] font-display text-[6rem] sm:text-[18rem] lg:text-[24rem] leading-none text-purple-glow/40 sm:text-purple-glow/60 select-none pointer-events-none overflow-hidden"
        >
          *
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-28 sm:pt-32">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-purple-glow mb-4 sm:mb-6">
            ✻ Mais de mim
          </p>
          <h1 className="font-display uppercase text-5xl min-[480px]:text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] leading-[0.85] text-white">
            Fora
            <br />
            <span className="text-purple-glow">do grid</span>
          </h1>
        </div>
      </section>

      <section className="relative noise-block bg-paper text-ink">
        <div aria-hidden="true" className="absolute inset-0 grid-bg-dark opacity-70" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] hidden lg:block">
              {POLAROIDS.map((pola) => (
                <figure
                  key={pola.caption}
                  className="absolute w-44 xl:w-60 bg-white text-ink p-3 pb-10 shadow-2xl"
                  style={{ top: pola.top, left: pola.left, transform: `rotate(${pola.rotate}deg)` }}
                >
                  <img src={pola.src} alt={pola.alt} loading="lazy" className="w-full aspect-square object-cover" />
                  <figcaption className="absolute bottom-2 left-0 right-0 text-center text-xs font-mono">
                    {pola.caption}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
              {POLAROIDS.map((pola) => (
                <img
                  key={pola.caption}
                  src={pola.src}
                  alt={pola.alt}
                  loading="lazy"
                  className="w-full aspect-square object-cover border-2 sm:border-4 border-white shadow-lg"
                />
              ))}
            </div>

            <div className="space-y-8 sm:space-y-12">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-purple mb-3">✻ Apresentação</p>
                <p className="text-base sm:text-xl lg:text-2xl leading-relaxed text-ink">
                  Sou um <span className="text-purple font-medium">estrategista de comunicação e designer</span>. Tenho
                  22 anos, sou do Rio Grande do Sul, graduado em Comunicação Empresarial pela PUCRS e atuo na
                  intersecção entre a pesquisa, o planejamento e o design. Ter uma base sólida em comunicação me ajuda
                  a olhar para a direção de arte não apenas como estética, mas como função.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span key={skill} className="border border-ink/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative noise-block bg-hard-radial border-y border-white/10 py-16 sm:py-24 lg:py-32">
        <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-display uppercase text-4xl min-[480px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9]">
              Fora
              <br />
              das telas,
              <br />
              <span className="text-purple-glow">o ritmo continua.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-lg lg:text-xl leading-relaxed text-white/90">
              Minha rotina envolve treinos na academia, vôlei e sempre preparar um chimarrão. Gosto de frequentar
              estádios, ir a festivais de música e acompanhar cinema e premiações de perto. Consumo bastante rap nacional
              e música brasileira.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="bg-white/10 border border-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
