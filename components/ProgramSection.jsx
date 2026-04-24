import Reveal from './Reveal'

const program = [
  ['16:00', 'Сбор гостей', 'Лёгкая welcome-встреча, первые объятия и время почувствовать атмосферу вечера.'],
  ['17:00', 'Церемония', 'Самый трепетный момент дня, где прозвучат главные слова нашей истории.'],
  ['18:00', 'Банкет', 'Праздничный ужин, тёплые поздравления, искренние слова и красивые семейные воспоминания.'],
  ['21:00', 'Танцы', 'Музыка, свет, улыбки и продолжение вечера в атмосфере любви и радости.']
]

export default function ProgramSection() {
  return (
    <section className="section-shell bg-white/40" id="program">
      <div className="section-container max-w-[860px]">
        <Reveal className="text-center">
          <div className="divider mx-auto" aria-hidden="true" />
          <p className="section-tag">Программа дня</p>
          <h2 className="section-title mx-auto">Спокойный ритм красивого свадебного вечера</h2>
        </Reveal>

        <Reveal className="relative mt-8 grid gap-4 before:absolute before:bottom-4 before:left-[42px] before:top-4 before:w-px before:bg-gradient-to-b before:from-slateBlue/20 before:to-goldSoft/20 md:before:left-[62px]">
          {program.map(([time, title, copy]) => (
            <article key={time} className="relative grid gap-3 rounded-[24px] border border-slateBlue/10 bg-white/82 px-5 py-6 shadow-card md:grid-cols-[120px_1fr] md:items-start md:px-8">
              <span className="relative z-10 inline-flex w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold text-slateBlue shadow-sm">{time}</span>
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
