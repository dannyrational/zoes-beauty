const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        'garamond': ['EB Garamond', 'serif'],
        'jost': ['Jost', 'sans-serif'],
      },
      colors: {
        blueGray: colors.blueGray,
        trueGray: colors.trueGray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}