/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

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
          'tomato_light': 'rgba(255, 97, 85, 0.15)',
          'tomato_gradient_left': '#FF6A3A',
          'tomato_gradient_right': '#FF527B',
          'tomato_shadow': '#ff615580',
        /* NEUTRAL */
          'dark_slate_grey': '#242742',
          'grey': '#9294a0',
          'grey-25%': '#19182B',
          'white': '#ffffff',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'title': '40px',
        'title_desktop': '56px',
      },
      lineHeight: {
        '18': '18px',
      },
      borderRadius: {
        '4xl': '36px',
      },
      boxShadow: {
        'shadow_tomato':'0px 16px 32px 0px #ff615580'
      }
    },
  },
  plugins: [],
}

