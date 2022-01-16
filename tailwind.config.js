module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        midnight: '#011526',
        midnight_light: '#142841',
        'accent-500': '#06b6d4',
        'accent-600': '#0891B2',
        'accent-900': '#164e63',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 3s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography', require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')),
  ],
}
