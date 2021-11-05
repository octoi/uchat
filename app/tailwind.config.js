const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      green: colors.teal,
      red: colors.rose,
      app: {
        darkest: '#0e0e10',
        darker: '#19191b',
        dark: '#1f1e22',
        purpleLight: '#A971FE',
        purple: '#9146ff',
        purpleDark: '#772ce8',
        white: '#ffffff',
        grey: '#f7f7f8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
