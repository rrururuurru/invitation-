import Reveal from './Reveal'

const program = [
  ['16:00', 'Сбор гостей', 'Лёгкая welcome-встреча, первые объятия и время почувствовать атмосферу вечера.'],
  ['17:00', 'Церемония', 'Самый трепетный момент дня, где прозвучат главные слова нашей истории.'],
  ['18:00', 'Банкет', 'Праздничный ужин, тёплые поздравления, искренние слова и красивые семейные воспоминания.'],
  ['21:00', 'Танцы', 'Музыка, свет, улыбки и продолжение вечера в атмосфере любви и радости.']
]

export default function ProgramSection() {
  return (
    <section className="section-shell bg-white/45" id="program">
      <div className="section-container">
        <Reveal>
          <div className="divider" aria-hidden="true" />
          <p className="section-tag">Программа дня</p>
          <h2 className="section-title">Спокойный ритм красивого свадебного вечера</h2>
        </Reveal>

        <Reveal className="mt-8 grid gap-4">
          {program.map(([time, title, copy]) => (
            <article key={time} className="card-soft grid gap-3 md:grid-cols-[120px_1fr] md:items-start">
              <span className="inline-flex w-fit rounded-full bg-slateBlue/10 px-4 py-2 text-sm font-semibold text-slateBlue">{time}</span>
              <div>
                <h3 className="font-heading mb-3 max-w-[80%] text-[2rem] leading-[1.2] text-ink">{title}</h3>
                <p className="section-copy">{copy}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
