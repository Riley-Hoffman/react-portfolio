/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.js', './src/components/*.{js,}', './src/components/**/*.{js,}'],
  theme: {
    extend: {
      colors: {
        zinc: '#12121c',
        pink: {
          100: '#eee3f2',
          200: '#e5d4ed',
        },
        offwhite: '#f5eef7',
        purple: {
          100: '#a8a0d9',
          200: '#794e8d',
        },
        gradientpurple: '#794e8e',
        gradientpink: '#ae4971',
        gradientlightpurple: '#a8a1d9',     
      },
      fontFamily: {
        'poppins': ['"Poppins", sans-serif'],
        'inconsolata': ['"Inconsolata", monospace'],
        'source-sans': ['"Source Sans 3", sans-serif'],
        'urbanist': ['"Urbanist", sans-serif'],
      }
    },
  },
  plugins: [],
}