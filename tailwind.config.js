/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'korus-navy': '#161A79',
        'korus-cyan': '#4AB9DB',
        'korus-beige': '#EEE',
        'korus-sun': '#FFB54A',
        'korus-pink-light': '#E2C4C4',
        'korus-pink-mid': '#EE8787',
        'korus-pink-dark': '#C15F5F',
      },
      fontFamily: {
        'noto-serif': ['"Noto Serif"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'crimson': ['"Crimson Text"', 'serif'],
        'work-sans': ['"Work Sans"', 'sans-serif'],
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
      letterSpacing: {
        'tight-custom': '-0.96px',
        'tight-custom-2': '-1.6px',
        'tight-custom-3': '-3.2px',
      },
    },
  },
  plugins: [],
}
