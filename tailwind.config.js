/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height : {
        '55screen': '55vh',
      },
      width:{
        '99.2screen': '99.2vw',
        '56screen': '56vw'
      }
    },
  },
  plugins: [],
}

