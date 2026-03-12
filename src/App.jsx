import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const updateScrollOffsets = () => {
      const header = document.querySelector('header')
      if (!header) return
      const offset = header.offsetHeight + 8
      document.querySelectorAll('section').forEach(s => {
        s.style.scrollMarginTop = offset + 'px'
      })
    }
    window.addEventListener('load', updateScrollOffsets)
    window.addEventListener('resize', updateScrollOffsets)
    updateScrollOffsets()
    return () => {
      window.removeEventListener('load', updateScrollOffsets)
      window.removeEventListener('resize', updateScrollOffsets)
    }
  }, [])

  return (
    <div className="bg-parchment text-ink">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Footer />
    </div>
  )
}
