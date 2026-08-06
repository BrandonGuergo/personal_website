export default function Gallery() {
  const photos = [
    {
      src: 'images/BlackAndWhiteBoat.jpg',
      alt: 'Black and White Boat',
    },
    {
      src: 'images/CaliforniaSkyline.png',
      alt: 'California Skyline',
    },
    {
      src: 'images/CuriousFox.png',
      alt: 'Curious Fox',
    },
  ]

  return (
    <>
      <hr className="max-w-7xl mx-auto my-0 px-8 border-t border-opacity-10 border-soil" />
      <section id="photography" className="max-w-7xl mx-auto my-32 px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-emerald-pop mb-2">Through the Lens</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-bark">
            My <span className="italic text-emerald">Photography</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-emerald to-sage mx-auto mt-3 mb-8 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {photos.map((photo, idx) => (
            <div 
              key={idx}
              className="relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-cream group cursor-pointer"
            >
              <img 
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(15,25,17,0.55)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
