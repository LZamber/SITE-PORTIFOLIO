import { HeroSection, AboutCta } from '../components/HeroSection'
import { Marquee } from '../components/Marquee'
import { WorkSection } from '../components/WorkSection'
import { DESIGN_PROJECTS, MOTION_PROJECTS, PHOTO_PROJECTS } from '../data/projects'
import { useHashScroll } from '../hooks/useHashScroll'

export function HomePage() {
  useHashScroll()

  return (
    <>
      <HeroSection />
      <Marquee />
      <WorkSection id="design" title="Design" projects={DESIGN_PROJECTS} aspect="4/3" />
      <WorkSection
        id="motion"
        title="Motion"
        projects={MOTION_PROJECTS}
        variant="light"
        gridCols="2"
        aspect="video"
        withNoise
      />
      <WorkSection
        id="foto"
        title="Fotografia"
        projects={PHOTO_PROJECTS}
        gridCols="photos"
        showYear={false}
        linkLabel="Ver mais fotos ↗"
        linkHref="https://www.flickr.com/photos/lzamber/"
      />
      <AboutCta />
    </>
  )
}
