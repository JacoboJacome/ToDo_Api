const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      purple: colors.purple,
      violet: colors.violet,
      sky: colors.sky,
      cyan: colors.cyan
    },
    extend: {},
  },
  plugins: [],
}
