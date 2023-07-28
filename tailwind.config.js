/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* PRIMARY */
          'tomato': '#ff6257',
        /* NEUTRAL */
          'dark_slate_grey': '#242742',
          'Charcoal Grey': '#36384e',
          'Grey': '#9294a0',
          'White': '#ffffff',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'title': '45px',
        'paragraph': '16px',
      },
      objectPosition: {
        'left-60-top-30': '60% 90%',
      },
      borderRadius: {
        '4xl': '30px',
        '5xl': '35px',
      }
    },
  },
  plugins: [],
}

