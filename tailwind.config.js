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
