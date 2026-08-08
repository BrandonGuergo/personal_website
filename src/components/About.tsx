import SectionHeading from './SectionHeading'
import WateringGarden from './WateringGarden'

const FACTS = [
  { label: 'Based in', value: 'Florida, USA' },
  {
    label: 'Focus',
    value: 'Systems, language tooling, data structures',
  },
  {
    label: 'GitHub',
    value: 'github.com/BrandonGuergo',
  },
] as const

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate mx-auto max-w-7xl select-none overflow-hidden px-6 py-20 md:px-8 md:py-24"
    >
      <WateringGarden className="absolute inset-0 z-10" />

      <SectionHeading
        eyebrow="Background"
        title="About"
        accent=""
        index="01"
      />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <p className="font-serif text-2xl leading-snug text-bark md:text-[1.75rem]">
            Software engineer focused on building systems from first principles.
          </p>

          <p className="mt-6 text-base leading-8 text-soil">
            I’m Brandon Guergo, a developer based in Florida. My work centers on
            understanding and implementing core systems—language interpreters,
            self-balancing data structures, and related tooling. I care about
            correctness, clear design, and the mechanics that sit underneath
            higher-level abstractions.
          </p>

          <p className="mt-4 text-base leading-8 text-soil">
            Outside of software I also shoot photography, which informs how I
            think about composition and attention to detail in the work I ship.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-px self-start overflow-hidden rounded-lg border border-soil/12 bg-soil/12 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="bg-card px-5 py-4"
            >
              <dt className="text-[0.6rem] tracking-[0.28em] text-muted uppercase">
                {fact.label}
              </dt>

              <dd className="mt-1 text-sm tracking-wide text-bark">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}