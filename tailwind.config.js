/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {

    extend: {
      colors:{
        'color-text': '#00C893',
        'bg-from': '#202324',
        'w-from': '22%',
      }
    },
  },
  plugins: [],
}

