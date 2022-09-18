/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
     screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px'
    },
    extend: {
      colors: {
        darkBlueMail: 'hsl(217, 28%, 15%)',
        darkBlueMb: 'hsl(218, 28%, 13%)',
        darkBlueFb: 'hsl(216, 53%, 9%)',
        darkBlueTb: 'hsl(219, 30%, 18%)',
        cyan: 'hsl(176, 68%, 64%)',
        blue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
        white: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}
