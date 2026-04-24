'use client'

import Reveal from './Reveal'

const whatsappNumber = '77000000000'

export default function RsvpSection() {
  const onSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const guestName = String(formData.get('guestName') || '').trim()
    const attendance = String(formData.get('attendance') || '').trim()
    const comment = String(formData.get('comment') || '').trim()

    const lines = [
      'Здравствуйте! Отправляю ответ на свадебное приглашение.',
      `Имя: ${guestName}`,
      `Ответ: ${attendance}`
    ]

    if (comment) {
      lines.push(`Комментарий: ${comment}`)
    }

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
  }

  return (
    <section className="section-shell" id="rsvp">
      <div className="section-container grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <Reveal>
          <div className="divider" aria-hidden="true" />
          <p className="section-tag">Подтверждение</p>
          <h2 className="section-title">Подтвердите, пожалуйста, ваше участие</h2>
          <p className="section-copy">Мы будем благодарны, если вы заранее дадите знать, сможете ли присоединиться к нашему празднику. Это поможет нам подготовить вечер с особой заботой.</p>
        </Reveal>

        <Reveal>
          <form onSubmit={onSubmit} className="card-soft grid gap-4 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(236,243,248,0.55))]">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-ink">Ваше имя</span>
              <input className="rounded-2xl border border-slateBlue/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-slateBlue/45 focus:ring-4 focus:ring-slateBlue/10" type="text" name="guestName" placeholder="Например, Айгерим" required />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-ink">Ваш ответ</span>
              <select className="rounded-2xl border border-slateBlue/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-slateBlue/45 focus:ring-4 focus:ring-slateBlue/10" name="attendance" required>
                <option value="С радостью приду">С радостью приду</option>
                <option value="Буду с парой">Буду с парой</option>
                <option value="К сожалению, не смогу">К сожалению, не смогу</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-ink">Комментарий</span>
              <textarea className="rounded-2xl border border-slateBlue/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-slateBlue/45 focus:ring-4 focus:ring-slateBlue/10" name="comment" rows="4" placeholder="Если хотите, можно оставить пожелание или уточнение" />
            </label>
            <button className="button-primary w-full" type="submit">Отправить ответ в WhatsApp</button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
