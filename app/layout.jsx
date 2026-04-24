import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

const headingFont = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-heading',
  display: 'swap'
})

const bodyFont = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap'
})

export const metadata = {
  title: 'Азат & Аружана | Свадебное приглашение',
  description: 'Премиальное цифровое свадебное приглашение Азата и Аружаны. 25 августа 2026 года, Казахстан.',
  openGraph: {
    title: 'Азат & Аружана | Свадебное приглашение',
    description: 'С любовью приглашаем вас разделить с нами день, в котором начнётся наша новая семейная история.',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-soft-radial font-body text-ink antialiased`}>
        {children}
      </body>
    </html>
  )
}
