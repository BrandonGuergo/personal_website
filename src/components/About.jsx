export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto my-32 px-8">
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest uppercase text-emerald-pop mb-2">Who I Am</p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-bark">
          About <span className="italic text-emerald">Me</span>
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-emerald to-sage mx-auto mt-3 mb-8 rounded"></div>
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg leading-8 text-soil">
          Hello! I'm Brandon Guergo, a developer and photographer based in Florida. 
          I love building things from the ground up — whether that's a programming language 
          interpreter or a perfect photograph.
        </p>
      </div>
    </section>
  )
}
