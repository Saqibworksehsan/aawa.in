/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brown': {
          100: '#F5F0E6',
          200: '#E6D8C9',
          300: '#D2B48C',
          400: '#C19A6B',
          500: '#A67B5B',
          600: '#8B4513',
          700: '#6B3811',
          800: '#59300F',
          900: '#3D210A',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};