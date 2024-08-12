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
        'diamonds': "url('data:image/svg+xml,<svg id=\"patternId\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><defs><pattern id=\"a\" patternUnits=\"userSpaceOnUse\" width=\"50\" height=\"50\" patternTransform=\"scale(11) rotate(0)\"><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"hsla(0, 0%, 96%, 1)\"/><path d=\"M50 25L37.5 50 25 25 37.5 0zm-25 0L12.5 50 0 25 12.5 0z\" stroke-width=\"1\" stroke=\"hsla(247, 46%, 88%, 1)\" fill=\"none\"/></pattern></defs><rect width=\"800%\" height=\"800%\" transform=\"translate(0,0)\" fill=\"url(%23a)\"/></svg>')",
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
