import Reveal from './Reveal'

const details = [
  {
    title: 'Дата и время',
    headline: '25 августа 2026, 17:00',
    copy: 'Пожалуйста, приходите немного заранее, чтобы спокойно встретиться, насладиться атмосферой и разделить с нами самые первые мгновения этого вечера.'
  },
  {
    title: 'Место',
    headline: 'Sapphire Hall, Астана',
    copy: 'Праздник состоится в банкетном зале Sapphire Hall по адресу: проспект Мәңгілік Ел, 47, Астана. Место выбрано для светлого и элегантного семейного вечера.',
    link: 'https://maps.google.com/?q=проспект Мәңгілік Ел 47 Астана'
  },
  {
    title: 'Настроение',
    headline: 'Нежность, музыка и свет',
    copy: 'Вас ждёт спокойная красивая атмосфера, искренние поздравления, вечерний ужин, танцы и тёплое чувство, что самые важные люди рядом.'
  }
]

export default function DetailsSection() {
  return (
    <section className="section-shell bg-white/45" id="details">
      <div className="section-container">
        <Reveal className="text-center">
          <div className="divider mx-auto" aria-hidden="true" />
          <p className="section-tag">Место и время</p>
          <h2 className="section-title mx-auto">Красивый вечер в сердце Астаны</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
          {details.map((item) => (
            <Reveal key={item.title}>
              <article className="card-soft h-full">
                <div className="mb-4 h-[2px] w-11 bg-gradient-to-r from-slateBlue to-goldSoft" />
                <p className="section-tag">{item.title}</p>
                <h3 className="font-heading mb-3 max-w-[80%] text-[2rem] leading-[1.2] text-ink">{item.headline}</h3>
                <p className="section-copy">{item.copy}</p>
                {item.link ? (
                  <a className="mt-4 inline-flex text-sm font-semibold text-slateBlue transition hover:text-ink" href={item.link} target="_blank" rel="noreferrer">
                    Открыть карту
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
