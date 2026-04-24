/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        skyMist: '#e8f0f7',
        skySoft: '#d8e7f3',
        cloud: '#f8fbfd',
        slateBlue: '#6f8ca8',
        powderBlue: '#bcd0e3',
        goldSoft: '#d9c59d',
        ink: '#354552'
      },
      boxShadow: {
        glow: '0 18px 40px rgba(111, 140, 168, 0.16)',
        card: '0 18px 40px rgba(53, 69, 82, 0.08)'
      },
      backgroundImage: {
        'soft-radial': 'radial-gradient(circle at top left, rgba(188, 208, 227, 0.55), transparent 26%), radial-gradient(circle at top right, rgba(217, 197, 157, 0.35), transparent 20%), linear-gradient(180deg, #fcfeff 0%, #f4f8fb 100%)'
      },
      keyframes: {
        heroZoom: {
          '0%': { transform: 'scale(1.04)' },
          '100%': { transform: 'scale(1.1)' }
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(111, 140, 168, 0.22)' },
          '70%': { boxShadow: '0 0 0 12px rgba(111, 140, 168, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(111, 140, 168, 0)' }
        }
      },
      animation: {
        'hero-zoom': 'heroZoom 22s ease-in-out infinite alternate',
        'pulse-ring': 'pulseRing 1.8s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
