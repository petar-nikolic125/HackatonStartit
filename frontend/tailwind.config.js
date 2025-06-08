module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark1: '#0F0D1A',
        dark2: '#1A1A2E',
        primary: '#FF3CAC',
        secondary: '#784BA0',
        accent: '#2B86C5',
        'dark-overlay': 'rgba(0, 0, 0, 0.5)',
        'insta-yellow': '#FEDA77',
        'insta-orange': '#FA7E1E',
        'insta-pink': '#D62976',
        'insta-purple': '#962FBF',
        'insta-blue': '#4F5BD5',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
