import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbfd] pb-10" id="hero">
      <div aria-hidden="true" className="floating-blur left-[-8rem] top-[8rem] h-64 w-64 opacity-80" />
      <div aria-hidden="true" className="floating-blur right-[-6rem] top-[14rem] h-56 w-56 opacity-70" />
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80"
          alt="Азат и Аружана"
          className="h-[65vh] w-full object-cover object-center animate-hero-zoom md:h-screen"
          width="1600"
          height="2000"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(91,115,138,0.1),rgba(91,115,138,0.34)_52%,rgba(248,251,253,0.96)_92%),radial-gradient(circle_at_24%_20%,rgba(255,245,238,0.26),transparent_20%)]" />
      </div>

      <Reveal className="section-container relative z-10 -mt-12 px-4 pt-[40vh] text-center text-ink md:pt-[54vh]">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-slateBlue">Свадебное приглашение</p>
        <h1 className="font-heading mx-auto mb-4 max-w-[9ch] text-5xl leading-[1.08] text-ink drop-shadow-[0_12px_24px_rgba(255,255,255,0.55)] md:text-7xl">
          Азат &amp; Аружана
        </h1>
        <p className="font-heading mx-auto mb-4 max-w-[20ch] text-3xl italic leading-[1.25] text-slateBlue/90 md:text-4xl">
          С радостью приглашают вас на день, где любовь станет нашей семейной историей
        </p>
        <div className="ornament-line mb-5" aria-hidden="true">
          <span className="text-sm">♡</span>
        </div>
        <div className="mx-auto mb-6 max-w-[760px] rounded-[28px] border border-white/70 bg-white/72 px-6 py-6 shadow-card backdrop-blur-[6px] md:px-10 md:py-8">
          <p className="mx-auto mb-5 max-w-[38rem] text-[15px] leading-8 text-ink/80 md:text-base">
            Будем счастливы, если вы разделите с нами один из самых нежных и важных дней нашей жизни, наполненный светом, музыкой и искренней радостью.
          </p>
          <div className="soft-ornament mb-5" aria-hidden="true">
            <span className="text-sm">✧</span>
          </div>
          <div className="mx-auto inline-flex min-h-10 items-center rounded-full border border-slateBlue/20 bg-white/80 px-5 text-sm text-ink shadow-card">
          25 августа 2026 • 17:00 • Астана
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#invitation" className="button-primary">Открыть приглашение</a>
          <a href="#rsvp" className="inline-flex min-h-12 items-center justify-center rounded-full border border-slateBlue/20 bg-white/80 px-6 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-slateBlue/35">Подтвердить участие</a>
        </div>
        <a href="#invitation" className="mx-auto mt-10 flex h-11 w-11 items-center justify-center rounded-full border border-slateBlue/20 bg-white/75 text-lg text-slateBlue transition hover:bg-white">
          ↓
        </a>
      </Reveal>
    </section>
  )
}
