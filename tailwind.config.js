/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta empresarial: azul-marinho profundo + acento ambar/dourado
        navy: {
          50: '#f1f5fb',
          100: '#dde7f3',
          200: '#c0d1e8',
          300: '#93b1d6',
          400: '#5f88bd',
          500: '#3d68a4',
          600: '#2d5089',
          700: '#26406f',
          800: '#22375d',
          900: '#0f2a4a',
          950: '#0a1c33',
        },
        amber: {
          400: '#e0a94a',
          500: '#c8892a',
          600: '#a86f1f',
        },
        ivory: '#faf8f3',
        sand: '#f3efe6',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 42, 74, 0.06), 0 12px 32px -12px rgba(15, 42, 74, 0.18)',
        'card-hover': '0 4px 12px rgba(15, 42, 74, 0.10), 0 24px 48px -16px rgba(15, 42, 74, 0.28)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
