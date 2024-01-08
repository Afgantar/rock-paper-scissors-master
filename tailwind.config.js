/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': '1440px',
        'mobile': '420px',
        'laptop': '1024px',
      },
      colors: {
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle farthest-corner at 50% 0%, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
        'gradient-scissors': 'linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'gradient-paper': 'linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        'gradient-rock': 'linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        'gradient-lizard': 'linear-gradient(to top, hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
        'gradient-cyan': 'linear-gradient(to top, hsl(189, 59%, 53%), hsl(189, 58%, 57%))'
      },
      keyframes: {
        'summon': {
          'from': { transform: 'scale(0.5)', opacity: 0 },
          'to': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        'summon': 'summon ease-in-out 0.5s forwards'
      }
    },
  },
  plugins: [],
}

