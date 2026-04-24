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

        <Reveal className="card-soft card-glow relative mt-8 text-center md:mt-10">
          <div className="ornament-line mb-6" aria-hidden="true"><span className="text-sm">♡</span></div>
          <div aria-hidden="true" className="mx-auto mb-6 h-px w-full max-w-[620px] bg-gradient-to-r from-transparent via-slateBlue/20 to-transparent" />
          <p className="section-copy mx-auto">
            С нежностью и благодарностью приглашаем вас стать частью дня, который навсегда останется в нашей памяти. Для нас особенно важно встретить этот вечер рядом с теми, кто умеет искренне радоваться, хранить тёплые воспоминания и быть рядом сердцем.
          </p>
          <p className="section-copy mx-auto mt-5">
            Мы мечтаем о светлом, красивом и душевном празднике, наполненном мягкой музыкой, спокойным светом, улыбками близких и атмосферой, в которой любовь чувствуется в каждом мгновении.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
