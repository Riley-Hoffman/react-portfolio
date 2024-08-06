/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.js', './src/components/*.{js,}', './src/components/**/*.{js,}'],
  theme: {
    extend: {
      colors: {
        zinc: {
          900: '#12121c',
        },
        pink: {
          100: '#eee3f2',
          200: '#e5d4ed',
        },
        offwhite: {
          100: '#f5eef7',
        },
        purple: {
          100: '#a8a0d9',
          200: '#794e8d',
        },
        gradientpurple: {
          100: '#794e8e',
        },
        gradientpink: {
          100: '#ae4971',
        },
        gradientlightpurple: {
          100: '#a8a1d9',
        }
        
      }
    },
  },
  plugins: [],
}