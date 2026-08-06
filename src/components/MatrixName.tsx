import { useEffect, useState } from 'react'

const FIRST = 'Brandon '
const LAST = 'Guergo'
const NAME = FIRST + LAST

/** Frames between each character locking in, and ms per frame. */
const RESOLVE_STAGGER = 2
const FRAME_MS = 45
/** Frames of pure static before the first character resolves. */
const LEAD_IN = 4

const randomBit = () => (Math.random() < 0.5 ? '0' : '1')

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * The header wordmark, rendered as a matrix-style binary decode: characters
 * flicker through 1s and 0s before locking into the name. Re-scrambles every
 * time `decodeKey` changes (i.e. when the header flips between its
 * top-of-page and scrolled states).
 */
export default function MatrixName({ decodeKey }: { decodeKey: boolean }) {
  const [chars, setChars] = useState<string[]>(() => NAME.split(''))

  // Full decode sweep whenever the header state flips (and once on mount).
  useEffect(() => {
    if (prefersReducedMotion()) {
      setChars(NAME.split(''))
      return
    }
    let frame = 0
    const id = window.setInterval(() => {
      frame += 1
      let done = true
      setChars(
        NAME.split('').map((ch, i) => {
          if (ch === ' ') return ch
          if (frame >= LEAD_IN + i * RESOLVE_STAGGER) return ch
          done = false
          return randomBit()
        }),
      )
      if (done) window.clearInterval(id)
    }, FRAME_MS)
    return () => window.clearInterval(id)
  }, [decodeKey])

  const renderChars = (from: number, to: number) =>
    chars.slice(from, to).map((ch, i) => (
      <span key={from + i} aria-hidden="true">
        {ch}
      </span>
    ))

  return (
    <span className="whitespace-nowrap">
      {/* Real name for screen readers; the animated glyphs are decorative. */}
      <span className="sr-only">{NAME.trim()}</span>
      <span className="hidden sm:inline">{renderChars(0, FIRST.length)}</span>
      {renderChars(FIRST.length, NAME.length)}
    </span>
  )
}
