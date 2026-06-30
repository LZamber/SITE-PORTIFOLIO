import { Header } from './Header'
import { Footer } from './Footer'
import { PageTransition } from './PageTransition'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
  return (
    <div className="min-h-screen bg-ink text-white overflow-x-hidden">
      <div className="noise-layer" aria-hidden="true" />
      <ScrollToTop />
      <Header />
      <main className="pt-14">
        <PageTransition />
      </main>
      <Footer />
    </div>
  )
}
