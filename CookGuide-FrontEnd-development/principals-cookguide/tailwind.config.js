/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#2C45B4',
        secondary : '#009FDF',
        contrast: '#FF7152',
        snow: '#F1F6FF',
        white: '#FFFFFF',
        black: '#313131'
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
