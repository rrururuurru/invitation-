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
    <section className="section-shell bg-white/40" id="details">
      <div className="section-container">
        <Reveal className="text-center">
          <div className="divider mx-auto" aria-hidden="true" />
          <p className="section-tag">Место и время</p>
          <h2 className="section-title mx-auto">Красивый вечер в сердце Астаны</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:mx-auto md:max-w-[860px] md:grid-cols-2 md:gap-5">
          {details.map((item) => (
            <Reveal key={item.title}>
              <article className={`card-soft h-full ${item.title === 'Настроение' ? 'md:col-span-2 md:text-center' : ''} ${item.title === 'Место' ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(232,240,247,0.72))]' : item.title === 'Дата и время' ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(245,239,231,0.8))]' : 'bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(238,245,249,0.74))]'}`}>
                <div className={`mb-4 h-[2px] w-11 bg-gradient-to-r from-slateBlue to-goldSoft ${item.title === 'Настроение' ? 'md:mx-auto' : ''}`} />
                <p className="section-tag">{item.title}</p>
                <h3 className={`font-heading mb-3 text-[2rem] leading-[1.2] text-ink ${item.title === 'Настроение' ? 'mx-auto max-w-[60%]' : 'max-w-[80%]'}`}>{item.headline}</h3>
                <p className={`section-copy ${item.title === 'Настроение' ? 'mx-auto' : ''}`}>{item.copy}</p>
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
