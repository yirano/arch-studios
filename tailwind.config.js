/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': '#1B1D23',
        'dark-grey': '#60636D',
        'medium-grey': '#7D828F',
        'light-grey': '#C8CCD8', 
        'very-light-grey': '#EEEFF4',
        'red': '#DF5656',
        'secondary': '#FFFFFF',
        'primary':'#1B1D23'
      },
      fontFamily: {
        sans: ['var(--font-leagueSpartan)'],
      },
      fontSize: {
        'heading-xl': ['250px', {
          lineHeight: '226px',
          letterSpacing: '-5px',
          fontWeight: '700'
        }],
        'heading-lg': ['96px', {
          lineHeight: '80px',
          letterSpacing: '-2px',
          fontWeight: '700'
        }],
        'heading-md': ['72px', {
          lineHeight: '64px',
          letterSpacing: '-2px',
          fontWeight: '700'
        }],
        'heading-sm': ['32px', {
          lineHeight: '40px',
          letterSpacing: '0px',
          fontWeight: '700'
        }],
        'body': ['18px', {
          lineHeight: '24px',
          letterSpacing: '0px',
          fontWeight: '500'
        }],
      }
    },
  },
  plugins: [],
}
