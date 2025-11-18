import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/app.vue',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/components/**/*.{vue,js,ts}',
    './app/plugins/**/*.{js,ts}',
    './app/assets/**/*.{css,pcss,scss}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        base: '#0B0A10',
        'ph-text': '#E8E6F2',
        'ph-violet': '#5B1AE3',
        'ph-violet-light': '#8E3EF8',
        'ph-emerald': '#19E6A8',
        'ph-neutral': '#161420'
      },
      fontFamily: {
        display: ['"Marcellus"', 'serif'],
        body: ['"Inter"', 'sans-serif']
      },
      backgroundImage: {
        'ph-hero':
          'linear-gradient(160deg, #0B0A10 0%, rgba(91,26,227,0.75) 45%, #8E3EF8 100%)'
      },
      boxShadow: {
        glow: '0 0 40px rgba(142, 62, 248, 0.35)'
      },
      borderRadius: {
        brand: '1.25rem'
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 0.61, 0.36, 1)'
      }
    }
  },
  plugins: []
} satisfies Config
