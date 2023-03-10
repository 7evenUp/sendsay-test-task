/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iris: '#5D5FEF',
        'gray-bg': '#F3F4F6',
        'gray-text': '#4D5562',
        outline: '#E2E3E5',
        display: '#111827',
        'border-dashed': '#C4C4C4'
      }
    },
  },
  plugins: [],
}