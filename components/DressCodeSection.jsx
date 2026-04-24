import Reveal from './Reveal'

const colors = [
  ['Молочный', '#f6f2eb'],
  ['Бежевый', '#ddd0bf'],
  ['Пудровый', '#d9c1cf'],
  ['Шампань', '#e3d3b0']
]

export default function DressCodeSection() {
  return (
    <section className="section-shell" id="dresscode">
      <div className="section-container grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <Reveal className="overflow-hidden rounded-[24px] shadow-card">
          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80"
            alt="Невеста в белом платье"
            className="h-full min-h-[320px] w-full object-cover"
            loading="lazy"
            width="1000"
            height="1250"
          />
        </Reveal>

        <Reveal className="card-soft bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(232,240,247,0.52))]">
          <div className="divider" aria-hidden="true" />
          <p className="section-tag">Пожелания</p>
          <h2 className="section-title">Будем рады, если образы поддержат воздушную палитру нашего вечера</h2>
          <p className="section-copy">Если вы захотите поддержать настроение праздника, нам будет особенно приятно видеть мягкие светлые оттенки и элегантные классические силуэты. А вместо букетов мы будем рады вашим тёплым словам и добрым пожеланиям.</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {colors.map(([label, color]) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-slateBlue/10 bg-white/80 px-3 py-3">
                <span className="h-7 w-7 shrink-0 rounded-full border border-ink/5" style={{ backgroundColor: color }} />
                <span className="text-sm font-medium text-ink">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
