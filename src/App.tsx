import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top" className="bg-parchment text-ink">
      {/* The header is fixed so it can float transparently over the hero, which
          therefore starts at the very top of the document rather than below it. */}
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
