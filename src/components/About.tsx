import SectionHeading from './SectionHeading'

const FACTS = [
  { label: 'Location', value: 'Florida, USA' },
  { label: 'Writing', value: 'Java, from lexer to evaluator' },
  { label: 'Carrying', value: 'A camera, most places' },
  { label: 'Elsewhere', value: 'github.com/BrandonGuergo' },
] as const

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
      <SectionHeading eyebrow="The Short Version" title="About" accent="Me" index="01" />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <p className="font-serif text-2xl leading-snug text-bark md:text-[1.75rem]">
            I like building things from the ground up, whether that's an interpreter
            in Java or a photograph I waited an hour to take.
          </p>
          <p className="mt-6 text-base leading-8 text-soil">
            I'm Brandon Guergo, a developer and photographer based in Florida. Most of
            what I make starts with wanting to understand how something works underneath:
            how a language turns text into behavior, how a tree keeps itself balanced,
            how a frame holds together before the light changes.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-px self-start overflow-hidden rounded-lg border border-soil/12 bg-soil/12 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {FACTS.map((fact) => (
            <div key={fact.label} className="bg-card px-5 py-4">
              <dt className="text-[0.6rem] tracking-[0.28em] text-muted uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm tracking-wide text-bark">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
