const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        coolGray: colors.coolGray,
      },

      container: {
        center: true,
      },

      fontFamily: {
        'custom': ['Poppins', 'Soleil', 'system-ui'],
      },

    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      animation: ['hover', 'focus'],

    },
  },
  plugins: [],
}
