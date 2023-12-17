/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily :{
        PricedownBl : ['var(--font-PricedownBl)'],
        Inter : ['var(--font-inter)'],
      },
      screens : {
        xl : '1440px',
      }
    },
  },
  plugins: [],
}
