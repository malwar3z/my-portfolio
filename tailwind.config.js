// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend:{
        width: {
          '100':'30rem',
          '120':'40rem',
          '140':'50rem'
        },
        height: {
          '100':'30rem',
          '120':'40rem',
          '140':'50rem'
        }
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        aqua: "#0dfdd2",
      },
    },
  
    variants: {
      extend: {},
    },
    plugins: [],
  }

  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],