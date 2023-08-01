/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '340px',
        // => @media (min-width: 640px)
        'desktop': '1440px',
        // => @media (min-width: 1440px) 
      },
      colors: {
        /* PRIMARY */
          'tomato': '#ff6257',
          'tomato_light': '#ff625740',
          'tomato_gradient_left': '#FF6A3A',
          'tomato_gradient_right': '#FF527B',
          'tomato_shadow': '#ff615580',
        /* NEUTRAL */
          'dark_slate_grey': '#242742',
          'charcoal_grey': '#36384e',
          'grey': '#9294a0',
          'grey_25%': '#19182B',
          'white': '#ffffff',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'title': '40px',
        'title_desktop': '56px',
        'paragraph': '12px',
        'success': '14px',
        'inputTitle': '8px',
      },
      objectPosition: {
        'left-60': '60%',
      },
      borderRadius: {
        '4xl': '30px',
        '5xl': '36px',
      },
      boxShadow: {
        'shadow-tomato':'0px 16px 32px 0px #ff615580'
      }
    },
  },
  plugins: [
    // plugin(function({ matchUtilities, theme }) {
    //   matchUtilities(
    //       {
    //           'bg-gradient': (angle) => ({
    //               'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
    //           }),
    //       },
    //       {
    //           // values from config and defaults you wish to use most
    //           values: Object.assign(
    //               theme('bgGradientDeg', {}), // name of config key. Must be unique
    //               {
    //                   10: '10deg', // bg-gradient-10
    //                   15: '15deg',
    //                   20: '20deg',
    //                   25: '25deg',
    //                   30: '30deg',
    //                   45: '45deg',
    //                   60: '60deg',
    //                   90: '90deg',
    //                   120: '120deg',
    //                   135: '135deg',
    //                   225: '225deg',
    //               }
    //           )
    //       }
    //    )
    // })
  ],
}

