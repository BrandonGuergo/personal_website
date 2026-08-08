import { useEffect, useMemo, useRef } from 'react'

const WIDTH = 1000
const HEIGHT = 260

// Time spent actually moving, excluding pauses.
const TRAVEL_TIME = 14500

type Point = {
  x: number
  y: number
}

type Pause = {
  at: number
  duration: number
}

function randomGenerator(seed: number) {
  let value = seed

  return () => {
    value |= 0
    value = (value + 0x6d2b79f5) | 0

    let t = Math.imul(value ^ (value >>> 15), 1 | value)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function generateTunnel(seed: number) {
  const random = randomGenerator(seed)

  const levels = [55, 105, 155, 205]

  const points: Point[] = []

  let x = -80
  let y = levels[Math.floor(random() * levels.length)]

  points.push({ x, y })

  while (x < WIDTH + 80) {
    // Dig horizontally
    const distance = 120 + random() * 150

    x = Math.min(x + distance, WIDTH + 80)

    points.push({ x, y })

    if (x >= WIDTH + 70) break

    // Then move vertically to another Dig Dug-style row
    const availableLevels = levels.filter(
      (level) => level !== y,
    )

    y =
      availableLevels[
        Math.floor(random() * availableLevels.length)
      ]

    points.push({ x, y })
  }

  let d = `M ${points[0].x} ${points[0].y}`

  for (let i = 1; i < points.length; i++) {
    const previous = points[i - 1]
    const current = points[i]

    if (current.y === previous.y) {
      d += ` H ${current.x}`
    } else {
      d += ` V ${current.y}`
    }
  }

  return d
}

function generatePauses(seed: number): Pause[] {
  const random = randomGenerator(seed + 9284)

  return [
    {
      at: 0.18 + random() * 0.08,
      duration: 650 + random() * 600,
    },
    {
      at: 0.43 + random() * 0.1,
      duration: 800 + random() * 900,
    },
    {
      at: 0.68 + random() * 0.1,
      duration: 550 + random() * 750,
    },
  ]
}

export default function FooterMole() {
  const worldRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const moleRef = useRef<HTMLDivElement>(null)

  const pathRef = useRef<SVGPathElement>(null)
  const outerRef = useRef<SVGPathElement>(null)
  const innerRef = useRef<SVGPathElement>(null)
  const edgeRef = useRef<SVGPathElement>(null)

  const seed = useRef(
    Math.floor(Math.random() * 999999),
  ).current

  const path = useMemo(
    () => generateTunnel(seed),
    [seed],
  )

  const pauses = useMemo(
    () => generatePauses(seed),
    [seed],
  )

  useEffect(() => {
    const world = worldRef.current
    const svg = svgRef.current
    const mole = moleRef.current
    const measuringPath = pathRef.current

    const tunnelPaths = [
      outerRef.current,
      innerRef.current,
      edgeRef.current,
    ].filter(
      (item): item is SVGPathElement =>
        item !== null,
    )

    if (
      !world ||
      !svg ||
      !mole ||
      !measuringPath ||
      tunnelPaths.length === 0
    ) {
      return
    }

    const prefersReducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      )

    if (prefersReducedMotion.matches) {
      return
    }

    const totalLength =
      measuringPath.getTotalLength()

    tunnelPaths.forEach((tunnelPath) => {
      tunnelPath.style.strokeDasharray =
        `${totalLength} ${totalLength}`

      tunnelPath.style.strokeDashoffset =
        `${totalLength}`
    })

    const speed =
      totalLength / TRAVEL_TIME

    let distance = 0
    let lastTime = performance.now()

    let pauseIndex = 0
    let pauseUntil = 0

    let ending = false

    // Mole remains horizontal.
    // Vertical travel never changes this.
    let facing: 1 | -1 = 1

    let animationFrame = 0

    function render(distanceAlongPath: number) {
      const point =
        measuringPath.getPointAtLength(
          distanceAlongPath,
        )

      /*
        Look slightly ahead and behind.

        We ONLY use horizontal difference to
        determine whether he faces left/right.
      */
      const before =
        measuringPath.getPointAtLength(
          Math.max(0, distanceAlongPath - 3),
        )

      const after =
        measuringPath.getPointAtLength(
          Math.min(
            totalLength,
            distanceAlongPath + 3,
          ),
        )

      const horizontalMovement =
        after.x - before.x

      if (Math.abs(horizontalMovement) > 0.5) {
        facing =
          horizontalMovement > 0 ? 1 : -1
      }

      /*
        Convert the exact SVG path point to its
        actual rendered browser position.

        This keeps the HTML mole synced with the
        stretched SVG even with preserveAspectRatio="none".
      */
      const matrix = svg.getScreenCTM()

      if (matrix) {
        const screenPoint = new DOMPoint(
          point.x,
          point.y,
        ).matrixTransform(matrix)

        const worldRect =
          world.getBoundingClientRect()

        mole.style.left =
          `${screenPoint.x - worldRect.left}px`

        mole.style.top =
          `${screenPoint.y - worldRect.top}px`
      }

      /*
        Never rotate.

        Only flip horizontally.
      */
      mole.style.transform =
        `translate(-50%, -50%) scaleX(${facing})`

      /*
        Reveal the tunnel to the mole's exact
        current distance along the same SVG path.
      */
      const hiddenDistance =
        totalLength - distanceAlongPath

      tunnelPaths.forEach((tunnelPath) => {
        tunnelPath.style.strokeDashoffset =
          `${hiddenDistance}`
      })
    }

    function animate(now: number) {
      const delta = Math.min(
        now - lastTime,
        50,
      )

      lastTime = now

      /*
        FINISHED ROUTE

        Mole hangs around briefly before
        everything resets.
      */
      if (ending) {
        mole.classList.add('is-paused')

        if (now >= pauseUntil) {
          distance = 0
          pauseIndex = 0
          ending = false

          mole.classList.remove('is-paused')

          tunnelPaths.forEach((tunnelPath) => {
            tunnelPath.style.strokeDashoffset =
              `${totalLength}`
          })
        }

        render(distance)

        animationFrame =
          requestAnimationFrame(animate)

        return
      }

      /*
        CURRENTLY PAUSED
      */
      if (now < pauseUntil) {
        mole.classList.add('is-paused')

        render(distance)

        animationFrame =
          requestAnimationFrame(animate)

        return
      }

      mole.classList.remove('is-paused')

      /*
        Calculate the next movement amount.
      */
      const nextDistance = Math.min(
        distance + speed * delta,
        totalLength,
      )

      /*
        PROCEDURAL PAUSE

        Rather than blowing past the pause point,
        clamp exactly to it.
      */
      const nextPause =
        pauses[pauseIndex]

      if (nextPause) {
        const pauseDistance =
          totalLength * nextPause.at

        if (
          distance < pauseDistance &&
          nextDistance >= pauseDistance
        ) {
          distance = pauseDistance

          pauseUntil =
            now + nextPause.duration

          pauseIndex += 1

          mole.classList.add('is-paused')

          render(distance)

          animationFrame =
            requestAnimationFrame(animate)

          return
        }
      }

      distance = nextDistance

      /*
        End of tunnel.
      */
      if (distance >= totalLength) {
        distance = totalLength
        ending = true

        // Little pause before starting another run
        pauseUntil = now + 900
      }

      render(distance)

      animationFrame =
        requestAnimationFrame(animate)
    }

    render(0)

    animationFrame =
      requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [path, pauses])

  return (
    <div
      ref={worldRef}
      aria-hidden="true"
      className="footer-mole-world"
    >
      <svg
        ref={svgRef}
        className="footer-tunnel-svg"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id={`rough-tunnel-${seed}`}
            x="-20%"
            y="-30%"
            width="140%"
            height="160%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.065"
              numOctaves="3"
              seed={seed % 999}
              result="noise"
            />

            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        {/* Invisible path used for measurements */}
        <path
          ref={pathRef}
          d={path}
          fill="none"
          stroke="none"
        />

        {/* Rough outside dirt */}
        <path
          ref={outerRef}
          d={path}
          className="mole-tunnel-outer"
          filter={`url(#rough-tunnel-${seed})`}
        />

        {/* Dug interior */}
        <path
          ref={innerRef}
          d={path}
          className="mole-tunnel-inner"
        />

        {/* Rough inner dirt texture */}
        <path
          ref={edgeRef}
          d={path}
          className="mole-tunnel-edge"
          filter={`url(#rough-tunnel-${seed})`}
        />
      </svg>

      <div
        ref={moleRef}
        className="footer-mole"
      >
        <svg
          viewBox="0 0 54 38"
          className="h-full w-full"
          fill="none"
        >
          {/* tail */}
          <path
            d="M10 23 C3 24 3 18 7 16"
            stroke="#d59a89"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* body */}
          <ellipse
            cx="24"
            cy="22"
            rx="16"
            ry="11"
            fill="#725142"
          />

          {/* belly */}
          <ellipse
            cx="25"
            cy="25"
            rx="12"
            ry="7"
            fill="#805d4c"
          />

          {/* head */}
          <circle
            cx="37"
            cy="17"
            r="11"
            fill="#805c4a"
          />

          {/* ear */}
          <circle
            cx="31"
            cy="9"
            r="3.5"
            fill="#d49b8c"
          />

          <circle
            cx="31"
            cy="9"
            r="1.8"
            fill="#ad766d"
          />

          {/* eye */}
          <circle
            cx="37"
            cy="13.5"
            r="1.6"
            fill="#211714"
          />

          <circle
            cx="37.5"
            cy="13"
            r="0.5"
            fill="#fff5df"
          />

          {/* muzzle */}
          <ellipse
            cx="44"
            cy="18"
            rx="6.5"
            ry="4.8"
            fill="#c99182"
          />

          {/* nose */}
          <circle
            cx="49"
            cy="18"
            r="2.5"
            fill="#e3a1a2"
          />

          {/* smile */}
          <path
            d="M40 20.5 Q42.5 23 45 20.5"
            stroke="#50352e"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* rear paw */}
          <ellipse
            cx="17"
            cy="30"
            rx="5"
            ry="3"
            fill="#c88e7d"
          />

          {/* digging paw */}
          <ellipse
            cx="33"
            cy="30"
            rx="5.5"
            ry="3.2"
            fill="#daa08d"
          />
        </svg>
      </div>
    </div>
  )
}