/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        americana: [ "americana", "sans-serif" ],
        trash: [ "trash", "sans-serif"],
        inter: [ "Inter", "sans-serif"]
      },
      colors: {
        beaige: '#EFECEA',
        green: "#0AF2AD",
        lightblue: "#AAC6FD",
        grey: "#787675"
      },
      backgroundImage: {
        bgWhite: "linear-gradient(270deg, #FFF 0%, #FFF 100%)",
        bggradient: "linear-gradient(270deg, #A8C4EF 39.58%, #0AF2AD 100%)"
      }
    }
  },
  plugins: [],
}