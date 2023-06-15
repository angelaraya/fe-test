/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#f6f5f3',
          600: '#ccaa6b',
          700: '#c5a993',
          900: '#b9967b',
        },
        'gray': {
          800: '#a4a099',
        }
      },
      fontFamily: {
        heading: ['"Source Serif 4"'],
        copy: ['Questrial'],
      }
    },
  },
  plugins: [],
}

