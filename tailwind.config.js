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
        'home-video': "linear-gradient(0deg, rgba(0, 0, 0, 0) 20%, #000000 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, #000000 100%), linear-gradient(0deg, rgba(0, 42, 45, 0), rgba(0, 42, 45, 0)), url('/assets/images/home/home-header-bg.jpg')"
      }
    }
  },
  plugins: [],
}