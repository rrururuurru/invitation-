import Reveal from './Reveal'

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    alt: 'Свадебная пара',
    caption: 'Тёплый взгляд в новую семейную главу',
    wide: true
  },
  {
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
    alt: 'Невеста в белом платье',
    caption: 'Белое платье, свет и тишина момента'
  },
  {
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80',
    alt: 'Кольца и свадебные детали',
    caption: 'Кольца и детали, в которых живёт смысл дня'
  },
  {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
    alt: 'Свадебный декор',
    caption: 'Цветы, свечи и настроение вечера'
  },
  {
    src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=80',
    alt: 'Цветы и романтичные детали',
    caption: 'Нежные штрихи свадебной атмосферы',
    tall: true
  }
]

export default function GallerySection() {
  return (
    <section className="section-shell bg-white/40" id="gallery">
      <div className="section-container">
        <Reveal className="text-center">
          <div className="divider mx-auto" aria-hidden="true" />
          <p className="section-tag">Галерея</p>
          <h2 className="section-title mx-auto">Свет, нежность и детали нашего дня</h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-[1.25fr_0.75fr_1fr] md:auto-rows-[230px]">
          {gallery.map((item) => (
            <Reveal key={item.src} className={`${item.wide ? 'col-span-2' : ''} ${item.tall ? 'md:col-start-3 md:row-span-2' : ''}`}>
              <figure className="group relative overflow-hidden rounded-[22px] border border-white/70 shadow-card transition hover:-translate-y-0.5 hover:shadow-glow">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`w-full object-cover transition duration-300 group-hover:scale-[1.03] ${item.wide ? 'aspect-[1.3] md:h-[230px]' : item.tall ? 'aspect-[0.8] md:h-[474px]' : 'aspect-square md:h-[230px]'}`}
                  width="1000"
                  height="1200"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/75 to-transparent px-4 pb-4 pt-8 text-sm leading-6 text-white">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
