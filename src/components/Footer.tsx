const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#programming', label: 'Projects' },
  { href: '#photography', label: 'Photography' },
] as const

export default function Footer() {
  return (
    <footer className="bg-bark text-cream/55">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-2xl font-semibold tracking-wider text-parchment">
              Brandon Guergo
            </p>
            <p className="mt-2 max-w-xs text-sm leading-6 tracking-wide text-cream/45">
              Developer &amp; photographer in Florida. Building languages and data
              structures from scratch, shooting landscape and wildlife.
            </p>
          </div>

          <div className="flex gap-12">
            <nav aria-label="Footer">
              <p className="mb-3 text-[0.6rem] tracking-[0.28em] text-cream/30 uppercase">
                Sections
              </p>
              <ul className="space-y-2">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm tracking-wide transition-colors hover:text-parchment"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="mb-3 text-[0.6rem] tracking-[0.28em] text-cream/30 uppercase">
                Elsewhere
              </p>
              <a
                href="https://github.com/BrandonGuergo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wide text-sage-light transition-colors hover:text-parchment"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-cream/12 pt-6 text-[0.7rem] tracking-[0.2em] text-cream/35 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Brandon Guergo</p>
          <a href="#top" className="transition-colors hover:text-parchment">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
