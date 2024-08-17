/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        softElevatedShadow: '0px 10px 25px 0px #1525481A',
        subtleDeepShadow: '0px 0px 52.88px 0px #0B24481F'

      },

      colors: {
        cloudBurst: '#1B2559',
        lightSlateGrey: '#6D7A8D',
        ghost: '#C3CAD9',
        davyGrey: '#4B5564',
        paleGrey: '#FDFDFF',
        funBlue: '#1E55A8',
        alabaster: '#F9FAFF',
        blueChalk: '#E9EEF6'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Stoshi: ['Satoshi', 'sans-serif'],
        Satoshi_Bold: ['Satoshi_Bold', 'sans-serif'],
        Satoshi_Semi_Bold: ['Satoshi_Semi_Bold', 'sans-serif']


       
      },
    },
  },
  plugins: [],
};
