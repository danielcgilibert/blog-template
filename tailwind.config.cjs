/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/banner.webp')",
      },
      colors: {
        white: '#f8f9fa',
      },
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
