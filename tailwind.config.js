const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    future: {
      removeDeprecatedGapUtilities: true,
    },
    extend: {
      colors: {
        heron: {
          500: '#f2f1ee',
        },
        cushing: {
          500: '#b6afa7',
        },
        bbpink: {
          300: '#E92567',
          500: '#DF165A',
        },
      },
      fontFamily: {
        logoFont: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        headerFont: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        navFont: [...defaultTheme.fontFamily.sans],
        defaultFont: [...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        75: '0.75rem',
        87: '0.875rem',
        100: '1rem',
        125: '1.25rem',
        150: '1.5rem',
        175: '1.75rem',
        200: '2rem',
        300: '3rem',
      },
      spacing: {
        px2: '2px',
        72: '18rem',
        78: '19.5rem',
        84: '21rem',
        96: '24rem',
      },
      padding: {
        '2px': '2px',
      },
      opacity: {
        82: '0.82',
        90: '0.9',
      },
      inset: {
        '-8': '-8px',
        '-4': '-4px',
        '-3': '-3px',
        '-2': '-2px',
        '-1': '-1px',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        8: '8px',
      },
      variants: {
        backgroundColor: [
          'responsive',
          'first',
          'odd',
          'even',
          'hover',
          'focus',
        ],
      },
    },
  },
}
