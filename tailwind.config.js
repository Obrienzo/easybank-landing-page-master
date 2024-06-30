/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'DarkBlue': 'hsl(233, 26%, 24%)',
      'LimeGreen': 'hsl(136, 65%, 51%)',
      'BrightCyan': 'hsl(192, 70%, 51%)',
      'Grayishblue': 'hsl(233, 8%, 62%)',
      'LightGrayishBlue': 'hsl(220, 16%, 96%)',
      'VeryLightGray': 'hsl(0, 0%, 98%)',
      'White': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      Public: ['Public Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

