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
        'custom': ['Soleil', 'Objectivity', 'system-ui'],
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
