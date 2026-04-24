'use client'

import { useEffect, useState } from 'react'
import Reveal from './Reveal'

const targetDate = new Date(2026, 7, 25, 18, 0, 0)

function getTimeLeft() {
  const diff = targetDate.getTime() - Date.now()

  if (diff <= 0) {
    return { days: '0', hours: '00', minutes: '00', seconds: '00' }
  }

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    days: String(days),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0')
  }
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="section-shell" id="countdown">
      <div className="section-container grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <Reveal>
          <div className="divider" aria-hidden="true" />
          <p className="section-tag">Таймер</p>
          <h2 className="section-title">До нашей встречи осталось</h2>
          <p className="section-copy">Совсем скоро наступит день, который мы будем вспоминать с особенной нежностью. До встречи 25 августа 2026 года.</p>
        </Reveal>

        <Reveal className="rounded-[28px] border border-slateBlue/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(232,240,247,0.55))] p-4 shadow-card md:p-6">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            ['дней', timeLeft.days],
            ['часов', timeLeft.hours],
            ['минут', timeLeft.minutes],
            ['секунд', timeLeft.seconds]
          ].map(([label, value]) => (
            <div key={label} className="rounded-[18px] border border-slateBlue/10 bg-white/80 px-3 py-5 text-center">
              <span className="font-heading block text-5xl leading-none text-slateBlue md:text-6xl">{value}</span>
              <span className="mt-1 block text-xs text-ink/60 md:text-sm">{label}</span>
            </div>
          ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
