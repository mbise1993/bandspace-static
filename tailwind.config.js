/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        accent: '#51fa9f',
        primary: '#210641',
      },
      fontFamily: {
        lato: 'lato-regular',
        'lato-light': 'lato-light',
        'lato-thin': 'lato-thin',
      },
    },
  },
  plugins: [],
};
