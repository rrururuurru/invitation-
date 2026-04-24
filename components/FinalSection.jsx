import Reveal from './Reveal'

export default function FinalSection() {
  return (
    <section className="section-shell pt-10" id="final">
      <div className="section-container max-w-[840px]">
        <Reveal className="card-soft text-center bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(240,246,250,0.62))]">
          <div className="divider mx-auto" aria-hidden="true" />
          <p className="section-tag">Финальный аккорд</p>
          <h2 className="section-title mx-auto">С любовью, Азат и Аружана</h2>
          <p className="section-copy mx-auto">Спасибо, что разделяете с нами радость этого дня. Для нас бесконечно ценно знать, что самые тёплые лица, добрые слова и искренние сердца будут рядом именно в этот вечер.</p>
          <div className="ornament-line mt-6" aria-hidden="true"><span className="text-sm">♡</span></div>
        </Reveal>
      </div>
    </section>
  )
}
