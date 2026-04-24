'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const next = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      setProgress(next)
      frame = 0
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 z-50 h-[3px] w-full bg-slateBlue/10" aria-hidden="true">
      <span
        className="block h-full bg-gradient-to-r from-slateBlue to-goldSoft transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
