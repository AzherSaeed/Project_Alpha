/** @type {import('tailwindcss').Config} */
module.exports = {
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
        subtleDeepShadow: '0px 8px 28px 0px #1E55A812'
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
      },
    },
  },
  plugins: [],
};
