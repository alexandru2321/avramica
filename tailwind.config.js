const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [
    './index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
      }
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [plugin(function ({ addComponents, theme }) {
    const screens = theme("screens", {});
    addComponents([
      {
        ".container": {width: "100%"}
      },
      {
        [`@media (min-width: ${screens.sm})`]: {
          '.container': {
            'max-width': "540px",
          },
        },
      },
      {
        [`@media (min-width: ${screens.md})`]: {
          '.container': {
            'max-width': "720px",
          },
        },
      },
      {
        [`@media (min-width: ${screens.lg})`]: {
          '.container': {
            'max-width': "960px",
          },
        },
      },
      {
        [`@media (min-width: ${screens.xl})`]: {
          '.container': {
            'max-width': "1140px",
          },
        },
      },
      {
        [`@media (min-width: ${screens["2xl"]})`]: {
          '.container': {
            'max-width': "1140px",
          },
        },
      }
    ])
  }),],
}
