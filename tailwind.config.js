module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        midnight: '#011526',
        midnight_light: '#032340',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
