'use client'

import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current || visible) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px'
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [visible])

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  )
}
