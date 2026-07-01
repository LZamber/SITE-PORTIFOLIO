import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  aspect?: 'square' | 'video' | '4/3'
  showYear?: boolean
  light?: boolean
}

export function ProjectCard({ project, aspect = 'square', showYear = true, light = false }: ProjectCardProps) {
  const aspectClass =
    aspect === 'video' ? 'aspect-video' : aspect === '4/3' ? 'aspect-[4/3]' : 'aspect-square'

  return (
    <a href={project.url} target="_blank" rel="noreferrer" className="group block">
      <div className={`relative overflow-hidden border ${aspectClass} ${light ? 'bg-ink/5 border-ink/15' : 'bg-white/5 border-white/10'}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden="true"
            className={`w-full h-full ${light ? 'bg-white' : 'bg-ink/40'}`}
          />
        )}
        <div className="absolute inset-0 bg-purple/0 group-hover:bg-purple/40 transition duration-300 mix-blend-multiply pointer-events-none" />
      </div>
      <div className="flex items-start justify-between gap-2 sm:gap-4 pt-3">
        <h3 className="font-display text-lg sm:text-2xl md:text-3xl leading-[1.15] min-w-0 break-words">{project.title}</h3>
        <span className="text-purple-glow text-lg sm:text-xl shrink-0 mt-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition">
          ↗
        </span>
      </div>
      {showYear && project.year && (
        <p className={`text-xs uppercase tracking-widest mt-1 ${light ? 'text-ink/40' : 'text-white/40'}`}>
          {project.year}
        </p>
      )}
    </a>
  )
}
