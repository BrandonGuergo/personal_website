export default function Projects() {
  const projects = [
    {
      icon: '⚙️',
      title: 'CustomLang Interpreter',
      description: 'A fully custom programming language built from scratch in Java — from lexer to evaluator.',
      link: 'https://github.com/BrandonGuergo/CustomLang-Java-Interpreter',
    },
    {
      icon: '🌳',
      title: 'Custom AVL Tree',
      description: 'A robust, self-balancing AVL Tree data structure implemented with full rotation logic.',
      link: 'https://github.com/BrandonGuergo/Custom-AVL-Tree',
    },
  ]

  return (
    <>
      <hr className="max-w-7xl mx-auto my-0 px-8 border-t border-opacity-10 border-soil" />
      <section id="programming" className="max-w-7xl mx-auto my-32 px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-emerald-pop mb-2">What I've Built</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-bark">
            My <span className="italic text-emerald">Projects</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-emerald to-sage mx-auto mt-3 mb-8 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-card p-10 rounded-lg border border-soil/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-left relative overflow-hidden group"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 w-0.5 h-0 bg-gradient-to-b from-emerald to-sage group-hover:h-full transition-all duration-300"></div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald to-emerald-pop flex items-center justify-center mb-4 flex-shrink-0 text-2xl">
                {project.icon}
              </div>
              
              <h3 className="font-serif text-2xl font-semibold text-bark mb-3">
                {project.title}
              </h3>
              
              <p className="text-sm leading-7 text-soil mb-6 flex-grow">
                {project.description}
              </p>
              
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-emerald border-b border-emerald-pop pb-0.5 hover:text-emerald-pop transition-colors"
              >
                View on GitHub
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
