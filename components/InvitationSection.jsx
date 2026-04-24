import Reveal from './Reveal'

export default function InvitationSection() {
  return (
    <section className="section-shell" id="invitation">
      <div className="section-container max-w-[840px]">
        <Reveal className="text-center">
          <div className="divider mx-auto" aria-hidden="true" />
          <p className="section-tag">Приглашение</p>
          <h2 className="section-title mx-auto">Будем счастливы разделить этот день в кругу самых близких и дорогих людей</h2>
        </Reveal>

        <Reveal className="card-soft mt-6 text-center md:mt-8">
          <p className="section-copy mx-auto">
            С нежностью и благодарностью приглашаем вас стать частью дня, который навсегда останется в нашей памяти. Для нас особенно важно встретить этот вечер рядом с теми, кто умеет искренне радоваться, бережно хранить тёплые моменты и быть рядом сердцем.
          </p>
          <p className="section-copy mx-auto mt-5">
            Мы мечтаем о светлом, красивом и душевном празднике, наполненном мягкой музыкой, спокойным светом, счастливыми взглядами и атмосферой, в которой любовь чувствуется в каждом мгновении.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
