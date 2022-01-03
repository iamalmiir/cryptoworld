module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
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
  plugins: [
    require('@tailwindcss/typography', require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')),
  ],
}
