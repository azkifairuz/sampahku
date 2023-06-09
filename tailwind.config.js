/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        greenMain:'#25B56D',
        blueMain:'#025464',
        surface:'#F8F1F1',
        molecular:{orange:'#E57C23'}
      },
      fontFamily:{
        poppins:["Poppins","sans-serif"]
      }
    },
  },
  plugins: [],
}

