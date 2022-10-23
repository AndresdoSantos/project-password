/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        300: 'SpaceGrotesk_300Light',
        400: 'SpaceGrotesk_400Regular',
        500: 'SpaceGrotesk_500Medium',
        700: 'SpaceGrotesk_700Bold'
      },
      colors: {
        orange: {
          ubuntu: '#E95420'
        }
      }
    },
  },
  plugins: [],
}