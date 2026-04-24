import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="relative grid min-h-[65vh] place-items-center overflow-hidden md:min-h-screen" id="hero">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80"
          alt="Азат и Аружана"
          className="h-full w-full object-cover animate-hero-zoom"
          width="1600"
          height="2000"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,233,224,0.24),transparent_18%),linear-gradient(180deg,rgba(31,48,69,0.18),rgba(31,48,69,0.52)_50%,rgba(31,48,69,0.78)_100%),linear-gradient(90deg,rgba(39,58,83,0.34),rgba(39,58,83,0.1)_60%,rgba(39,58,83,0.24))]" />
      </div>

      <Reveal className="section-container relative z-10 px-4 text-center text-white">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">Свадебное приглашение</p>
        <h1 className="font-heading mx-auto mb-4 max-w-[8ch] text-5xl leading-[1.08] drop-shadow-[0_10px_24px_rgba(15,20,30,0.28)] md:text-7xl">
          Азат &amp; Аружана
        </h1>
        <p className="font-heading mx-auto mb-4 max-w-[18ch] text-3xl italic leading-[1.2] text-white/90 drop-shadow-[0_8px_18px_rgba(15,20,30,0.2)] md:text-4xl">
          Приглашают вас на свою свадьбу
        </p>
        <div className="mx-auto mb-6 inline-flex min-h-10 items-center rounded-full border border-white/35 bg-white/10 px-4 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
          25 августа 2026 • 17:00 • Астана
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#invitation" className="button-primary">Открыть приглашение</a>
          <a href="#rsvp" className="button-secondary">Подтвердить участие</a>
        </div>
        <a href="#invitation" className="mx-auto mt-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg text-white/90 transition hover:bg-white/15">
          ↓
        </a>
      </Reveal>
    </section>
  )
}
