export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen px-8 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a140c] via-[#1a2e20] to-[#0e1f14]"></div>
      
      {/* Purple-ish overlay radials */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-50 animate-drift"
          style={{background: 'radial-gradient(circle, rgba(92,74,53,0.5) 0%, transparent 70%)'}}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(46,107,80,0.4) 0%, transparent 70%)',
            animation: 'drift 18s ease-in-out infinite alternate-reverse'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-56 h-56 rounded-full blur-3xl opacity-30 animate-pulse-orb transform -translate-x-1/2 -translate-y-1/2"
          style={{background: 'radial-gradient(circle, rgba(122,140,110,0.2) 0%, transparent 70%)'}}
        ></div>
      </div>

      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 rounded-full border border-sage-light/10 animate-slowSpin"></div>
          <div className="absolute inset-8 rounded-full border border-dashed border-emerald-pop/20 animate-slowSpin"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl">
        <p className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-sage-light mb-7 animate-fadeInUp opacity-0" style={{animationDelay: '0s'}}>
          <span className="block w-7 h-px bg-sage"></span>
          Developer &amp; Photographer
          <span className="block w-7 h-px bg-sage"></span>
        </p>
        
        <h1 className="font-serif text-6xl md:text-7xl font-medium text-parchment mb-6 leading-tight tracking-tighter animate-fadeInUp opacity-0" style={{animationDelay: '0.15s'}}>
          <em className="italic text-emerald-pop">Brandon</em><br />Guergo
        </h1>
        
        <p className="text-lg text-cream/55 max-w-sm mx-auto tracking-wide animate-fadeInUp opacity-0" style={{animationDelay: '0.3s'}}>
          Blending code with creativity, and moments with memories.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mt-11 animate-fadeInUp opacity-0" style={{animationDelay: '0.45s'}}>
          <a 
            href="#programming" 
            className="px-6 py-3 bg-emerald-mid text-parchment font-semibold uppercase tracking-widest text-xs rounded transition-all duration-300 hover:bg-emerald-pop hover:-translate-y-1 hover:shadow-2xl border border-emerald-mid"
          >
            View My Work
          </a>
          <a 
            href="#photography" 
            className="px-6 py-3 bg-transparent text-cream font-semibold uppercase tracking-widest text-xs rounded transition-all duration-300 hover:text-sage-light hover:border-sage-light hover:-translate-y-1 border border-cream/30"
          >
            See Photos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/35 text-xs tracking-widest uppercase animate-fadeIn opacity-0" style={{animationDelay: '1.2s'}}>
        <div className="w-px h-12 bg-gradient-to-b from-sage-light/50 to-transparent animate-scrollPulse"></div>
        <span>Scroll</span>
      </div>
    </div>
  )
}
