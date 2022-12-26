/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Roboto': ['Roboto', "sans-serif"],
        'Arvo': ['Arvo', "serif"],
        'Oswald': ['Oswald']
      }
    },
  },
  plugins: [
    require("tailwindcss-scrollbar"),
  ],
}