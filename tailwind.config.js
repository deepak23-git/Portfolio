const { Outfit, Ovo } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      colors:{
        lightHover:'#fcf4ff',
        darkHover:'#2a004a',
        darkTheme:'#11001F',
      },
      fontFamily:{
        Outfit:["Outfit","sans-serif"],
        Ovo:["Ovo","serif"],
      },
      boxShadow:{
        'black':'4px 4px 0px #000',
        'white':'4px 4px 0px #fff',
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}

