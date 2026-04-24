'use client'

import { useEffect, useRef, useState } from 'react'

const MUSIC_URL = 'https://www.chosic.com/wp-content/uploads/2026/03/Roa-Beloved(chosic.com).mp3'
const TARGET_VOLUME = 0.28

export default function MusicToggle() {
  const audioRef = useRef(null)
  const frameRef = useRef(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!audioRef.current) return

    const audio = audioRef.current
    audio.volume = TARGET_VOLUME

    const tryAutoplay = async () => {
      try {
        await audio.play()
        setPlaying(true)
      } catch {
        setPlaying(false)
      }
    }

    tryAutoplay()

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      audio.pause()
    }
  }, [])

  const fadeTo = (from, to, duration) => {
    if (!audioRef.current) return
    const audio = audioRef.current
    const startTime = performance.now()

    if (frameRef.current) cancelAnimationFrame(frameRef.current)

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      audio.volume = from + (to - from) * progress
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      }
    }

    frameRef.current = requestAnimationFrame(step)
  }

  const toggle = async () => {
    if (!audioRef.current) return
    const audio = audioRef.current

    if (audio.paused) {
      try {
        audio.volume = 0
        await audio.play()
        fadeTo(0, TARGET_VOLUME, 800)
        setPlaying(true)
      } catch {
        setPlaying(false)
      }
      return
    }

    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    audio.pause()
    audio.volume = TARGET_VOLUME
    setPlaying(false)
  }

  return (
    <>
      <audio ref={audioRef} src={MUSIC_URL} preload="metadata" loop />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Пауза музыки' : 'Включить музыку'}
        aria-pressed={playing}
        className={`fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full border border-goldSoft/35 bg-white/85 text-ink shadow-card transition hover:-translate-y-0.5 ${playing ? 'shadow-glow' : ''}`}
      >
        <span className={`absolute inset-[-5px] rounded-full border border-slateBlue/20 ${playing ? 'animate-pulse-ring' : 'opacity-0'}`} aria-hidden="true" />
        <span className="relative z-10 text-base">{playing ? '❚❚' : '▶'}</span>
      </button>
    </>
  )
}
