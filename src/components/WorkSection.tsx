import type { Project } from '../data/projects'
import { ProjectCard } from './ProjectCard'

interface WorkSectionProps {
  id: string
  title: string
  projects: Project[]
  variant?: 'dark' | 'light'
  gridCols?: '3' | '2' | 'photos'
  aspect?: 'square' | 'video' | '4/3'
  showYear?: boolean
  linkLabel?: string
  linkHref?: string
  withNoise?: boolean
}

export function WorkSection({
  id,
  title,
  projects,
  variant = 'dark',
  gridCols = '3',
  aspect = 'square',
  showYear = true,
  linkLabel = 'Ver no Behance ↗',
  linkHref = 'https://www.behance.net/lzamber',
  withNoise = false,
}: WorkSectionProps) {
  const isLight = variant === 'light'

  const gridClass =
    gridCols === 'photos'
      ? 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1.5 sm:gap-2'
      : gridCols === '2'
        ? 'grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10'
        : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10'

  const linkButtonClass = isLight
    ? 'shrink-0 inline-flex items-center gap-2 max-md:text-sm max-md:px-5 max-md:py-2.5 text-xs sm:text-sm border rounded-full px-3 py-1.5 sm:px-4 sm:py-2 transition border-ink/20 text-ink hover:bg-purple hover:text-white hover:border-purple'
    : 'shrink-0 inline-flex items-center gap-2 max-md:text-sm max-md:px-5 max-md:py-2.5 text-xs sm:text-sm border rounded-full px-3 py-1.5 sm:px-4 sm:py-2 transition border-white/20 text-white hover:bg-purple hover:border-purple'

  const sectionClass = [
    'relative py-20 sm:py-32',
    withNoise ? 'noise-block' : '',
    isLight ? 'bg-paper text-ink' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={sectionClass}>
      {isLight ? (
        <>
          <div aria-hidden="true" className="absolute inset-0 grid-bg-dark opacity-70" />
          <div
            aria-hidden="true"
            className="hidden sm:block absolute -left-10 top-10 font-display text-[16rem] sm:text-[20rem] leading-none text-purple/15 select-none pointer-events-none"
          >
            *
          </div>
        </>
      ) : (
        <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-50" />
      )}

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
        <div
          id={id}
          className={`flex flex-col gap-4 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end pb-6 sm:pb-8 border-b mb-8 sm:mb-10 scroll-mt-20 ${
            isLight ? 'border-ink/15' : 'border-white/10'
          }`}
        >
          <div className="min-w-0">
            <p
              className={`max-md:text-[9px] text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2 ${
                isLight ? 'text-purple' : 'text-purple-glow'
              }`}
            >
              ✻ Meu trabalho
            </p>
            <h2 className="font-display uppercase max-md:text-5xl max-md:min-[480px]:text-6xl text-4xl sm:text-6xl md:text-8xl break-words">{title}</h2>
          </div>
          <a href={linkHref} target="_blank" rel="noreferrer" className={`${linkButtonClass} self-start sm:self-auto`}>
            {linkLabel}
          </a>
        </div>

        <div className={gridClass}>
          {gridCols === 'photos'
            ? projects.map((project, index) => (
                <a
                  key={`${project.url}-${index}`}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <div className="relative overflow-hidden bg-white/5 border border-white/10 aspect-square">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-purple/0 group-hover:bg-purple/40 transition duration-300 mix-blend-multiply pointer-events-none" />
                  </div>
                </a>
              ))
            : projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  aspect={aspect}
                  showYear={showYear}
                  light={isLight}
                />
              ))}
        </div>
      </div>
    </section>
  )
}
