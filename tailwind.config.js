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
      },
      clipPath: {
        'cut-corners': 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
      },
      backgroundImage: {
        'diamonds': "url('data:image/svg+xml,%3Csvg id=%27patternId%27 width=%27100%25%27 height=%27100%25%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cdefs%3E%3Cpattern id=%27a%27 patternUnits=%27userSpaceOnUse%27 width=%2750%27 height=%2750%27 patternTransform=%27scale(11) rotate(0)%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27hsla(0, 0%, 96%, 1)%27/%3E%3Cpath d=%27M50 25L37.5 50 25 25 37.5 0zm-25 0L12.5 50 0 25 12.5 0z%27 stroke-width=%271%27 stroke=%27hsla(247, 46%, 88%, 1)%27 fill=%27none%27/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%27800%25%27 height=%27800%25%27 transform=%27translate(0,0)%27 fill=%27url(%23a)%27/%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const clipPathUtilities = theme('clipPath');
      const newUtilities = Object.keys(clipPathUtilities).reduce((acc, key) => {
        acc[`.clip-path-${key}`] = { clipPath: clipPathUtilities[key] };
        return acc;
      }, {});
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
