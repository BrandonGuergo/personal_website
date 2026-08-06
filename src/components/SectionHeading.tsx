type Props = {
  /** Small uppercase kicker above the title. */
  eyebrow: string
  /** Plain part of the title. */
  title: string
  /** Emphasised (italic, emerald) tail of the title. */
  accent: string
  /** Index shown at the far right, e.g. "01". */
  index: string
}

/**
 * Shared section header. Left-aligned with a rule running out to an index
 * number on the right — denser than a centred block, and it gives every
 * section the same horizontal anchor.
 */
export default function SectionHeading({ eyebrow, title, accent, index }: Props) {
  return (
    <div className="flex items-end gap-6 border-b border-soil/15 pb-5">
      <div>
        <p className="mb-2 text-[0.65rem] tracking-[0.3em] text-emerald-pop uppercase">
          {eyebrow}
        </p>
        <h2 className="font-serif text-4xl leading-none font-medium tracking-tight text-bark md:text-5xl">
          {title} <span className="text-emerald italic">{accent}</span>
        </h2>
      </div>
      <span
        aria-hidden="true"
        className="mb-1.5 ml-auto font-mono text-[0.65rem] tracking-[0.2em] text-soil/40"
      >
        {index}
      </span>
    </div>
  )
}
