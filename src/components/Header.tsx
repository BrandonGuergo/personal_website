import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = !isOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }

  const handleClickOutside = (e) => {
    const drawer = document.getElementById('mobileDrawer')
    const hamburger = document.querySelector('.hamburger')
    if (drawer && hamburger && isOpen && !drawer.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu()
    }
  }

  return (
    <>
      <header className="sticky top-0 z-100 bg-opacity-93 bg-parchment backdrop-blur-2xl border-b border-opacity-15 border-soil py-4">
        <nav className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="font-serif text-2xl font-semibold text-emerald tracking-wider">
            <span className="hidden sm:inline">Brandon </span>Guergo
          </div>
          
          {/* Desktop nav */}
          <ul className="hidden md:flex gap-10">
            <li><a href="#about" className="text-xs font-medium text-muted uppercase tracking-widest hover:text-emerald transition-colors relative pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-emerald before:transition-all before:duration-300 hover:before:w-full">About</a></li>
            <li><a href="#programming" className="text-xs font-medium text-muted uppercase tracking-widest hover:text-emerald transition-colors relative pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-emerald before:transition-all before:duration-300 hover:before:w-full">Projects</a></li>
            <li><a href="#photography" className="text-xs font-medium text-muted uppercase tracking-widest hover:text-emerald transition-colors relative pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-emerald before:transition-all before:duration-300 hover:before:w-full">Photography</a></li>
            <li><a href="https://github.com/BrandonGuergo" target="_blank" className="text-xs font-medium text-muted uppercase tracking-widest hover:text-emerald transition-colors relative pb-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-emerald before:transition-all before:duration-300 hover:before:w-full">GitHub</a></li>
          </ul>

          {/* Mobile hamburger */}
          <button 
            className="hamburger md:hidden w-10 h-10 flex flex-col justify-center gap-1 cursor-pointer p-1.5 rounded-2xl hover:bg-opacity-10 hover:bg-emerald transition-colors"
            aria-label="Toggle menu"
            onClick={toggleMenu}
            aria-expanded={isOpen}
          >
            <span className={`block h-0.5 w-6 bg-emerald rounded transition-all duration-300 ${isOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-emerald rounded transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-emerald rounded transition-all duration-300 ${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div 
        id="mobileDrawer"
        className={`hidden md:hidden fixed top-0 left-0 right-0 z-99 bg-parchment bg-opacity-98 backdrop-blur-3xl pt-20 px-8 transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        onClick={handleClickOutside}
      >
        <ul className="space-y-0">
          <li className="border-t border-opacity-10 border-soil"><a href="#about" onClick={closeMenu} className="block py-4 font-medium text-muted uppercase tracking-widest text-lg hover:text-emerald hover:pl-2 transition-all">About</a></li>
          <li className="border-t border-opacity-10 border-soil"><a href="#programming" onClick={closeMenu} className="block py-4 font-medium text-muted uppercase tracking-widest text-lg hover:text-emerald hover:pl-2 transition-all">Projects</a></li>
          <li className="border-t border-opacity-10 border-soil"><a href="#photography" onClick={closeMenu} className="block py-4 font-medium text-muted uppercase tracking-widest text-lg hover:text-emerald hover:pl-2 transition-all">Photography</a></li>
          <li className="border-t border-b border-opacity-10 border-soil"><a href="https://github.com/BrandonGuergo" target="_blank" className="block py-4 font-medium text-muted uppercase tracking-widest text-lg hover:text-emerald hover:pl-2 transition-all">GitHub</a></li>
        </ul>
      </div>
    </>
  )
}
