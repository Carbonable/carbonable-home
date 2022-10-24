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
        grey: "#787675",
        footerBg: "#272727"
      },
      backgroundImage: {
        'home-video': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), linear-gradient(0deg, rgba(0, 42, 45, 0.6), rgba(0, 42, 45, 0.6)), url('/assets/images/home/home-header-bg.jpg')",
        'home-b2b': "linear-gradient(0deg, rgba(0, 0, 0, 0) 20%, #000000 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, #000000 100%), linear-gradient(0deg, rgba(0, 42, 45, 0), rgba(0, 42, 45, 0)), url('/assets/images/home/home-b2b-bg.png')",
        'carousel-button': "linear-gradient(90.2deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.13) 0.01%, rgba(255, 255, 255, 0.2) 0.02%, rgba(255, 255, 255, 0.1) 43.23%, rgba(255, 255, 255, 0) 70.83%, rgba(255, 255, 255, 0.24) 100%);",
        'carousel-button-border': "radial-gradient(100% 100% at 100% 100%, #E8E7E7 12%, #BAD3CB 25%, #0AF2AD 37%, #27EABA 50%, #C3C2FF 62%, #FFFCFC 75%, #E8E3E3 87%, #B2B2B2 100%),conic-gradient(from 0deg at 50% 50%, #E8E7E7 12%, #BAD3CB 25%, #0AF2AD 37%, #27EABA 50%, #C3C2FF 62%, #FFFCFC 75%, #E8E3E3 87%, #B2B2B2 100%)",
        'green-blue': 'linear-gradient(270deg, #A8C4EF 39.58%, #0AF2AD 100%);',
        'waiting-list': "url('/assets/images/home/bg-map.svg'), linear-gradient(270deg, #A8C4EF 39.58%, #0AF2AD 100%)",
        'home-b2b-gradient': 'linear-gradient(90.2deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.13) 0.01%, rgba(255, 255, 255, 0.2) 0.02%, rgba(255, 255, 255, 0.1) 43.23%, rgba(255, 255, 255, 0) 70.83%, rgba(255, 255, 255, 0.24) 100%);'
      },
      boxShadow: {
        'home': '0px 4px 20px rgba(0, 0, 0, 0.08);',
      }
    }
  },
  plugins: [require("tailwindcss-radix")()],
}