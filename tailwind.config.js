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
          'tomato_light': '#ff625740',
          'tomato_gradient': '#FF3E80',
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
        'title': '40px',
        'paragraph': '12px',
        'input_title': '8px',
      },
      objectPosition: {
        'left-60': '60%',
      },
      borderRadius: {
        '4xl': '30px',
        '5xl': '35px',
      },
      boxShadow: {
        'shadow-tomato':'5px 15px 25px -15px #ff5059'
      }
    },
  },
  plugins: [],
}

