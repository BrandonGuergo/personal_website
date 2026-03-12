/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '99': '99',
        '100': '100',
      },
      colors: {
        parchment: '#f2ede4',
        cream: '#ede7d9',
        bark: '#2e2619',
        'bark-soft': '#3d3224',
        soil: '#5c4a35',
        clay: '#8b6c52',
        'clay-light': '#b89a7e',
        sage: '#7a8c6e',
        'sage-light': '#a8b89a',
        emerald: '#1f4d3a',
        'emerald-mid': '#2e6b50',
        'emerald-pop': '#3d8a63',
        ink: '#1e1a13',
        muted: '#6b5e4a',
        card: '#f8f4ed',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scaleY(1)' },
          '50%': { opacity: '1', transform: 'scaleY(0.65)' },
        },
        slowSpin: {
          'to': { transform: 'rotate(360deg)' },
        },
        drift: {
          'from': { transform: 'translate(0, 0)' },
          'to': { transform: 'translate(35px, 45px)' },
        },
        'pulse-orb': {
          '0%, 100%': { opacity: '0.15', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.25)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease forwards',
        scrollPulse: 'scrollPulse 2.5s ease-in-out infinite',
        slowSpin: 'slowSpin 40s linear infinite',
        drift: 'drift 14s ease-in-out infinite alternate',
        'drift-reverse': 'drift 18s ease-in-out infinite alternate-reverse',
        'pulse-orb': 'pulse-orb 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
