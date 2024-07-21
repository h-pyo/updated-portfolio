/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#222831',
        dark2: '#393E46',
        light: '#EEEEEE',
        light2: '#00ADB5',
        primary: '#1d1d1d'
      },
      flexGrow: {
        '1': 1,
        '2': 2,
      },
    },
    screens: {
      'lg': {'max':'1200px'},
      'md': {'max': '900px'},
      'sm': {'max': '775px'}
    },
  },
  plugins: [],
} 

