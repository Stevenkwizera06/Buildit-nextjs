/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-text': '#678C92',
        'secondary-text': '#486A6F',
        'primary-green': '#5BCCDE',
        'secondary-green':'#486A6F'
        
        
        

      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      backgroundImage: {
        blur: 'linear-gradient(42.43deg, #C6DBFF 0%, #E1EBFA 52.25%)',
        greenBlur:' linear-gradient(42.43deg, #C6DBFF 0%, #E1EBFA 52.25%)'
        
      },
      backgroundColor:{
        'dark-green':'#4397A4',
        'dark-blue':'#C6DBFF',
        'dark-white':'#E1EBFA',
        'blur-green':'#486A6F',
        'light-green': '#4397A4',

      },
      width:{
        "100":"540px",
       "120":"1200px"
      }
    },
  },
  plugins: [],
}
