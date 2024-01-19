/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { transitionProperty: {
      'left': 'left',
      'opacity': 'opacity',},
  },
  keyframes: {
    moveOutLeft: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-100%)' },
    },
  },
  animation: {
    'move-out-left': 'moveOutLeft 0.5s ease-in-out',
  },
  plugins: [],
}
}