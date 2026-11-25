/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: '#556442',
          dark: '#425033',
          deep: '#333F26',
          soft: '#6D7D57',
          tint: '#E9ECE3',
        },
        cream: {
          DEFAULT: '#F7F4ED',
          card: '#FCFBF7',
          warm: '#EFEAE0',
        },
        espresso: '#1F241B',
        muted: '#5A6054',
        gold: '#C8A96A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
