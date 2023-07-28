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
          'charcoal_grey': '#36384e',
          'grey': '#9294a0',
          'white': '#ffffff',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'title': '50px',
        'paragraph': '16px',
      },
      objectPosition: {
        'left-60': '60%',
      },
      borderRadius: {
        '4xl': '30px',
        '5xl': '35px',
      }
    },
  },
  plugins: [],
}

