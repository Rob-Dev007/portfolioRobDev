/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',   
    './public/**/*.html'            
  ],
  theme: {
    fontFamily: {
      primary: ['Orbitron', 'sans-serif'],
      secondary: ['Rajdhani', 'sans-serif'],
      tertiary: ['Aldrich', 'sans-serif'],
    },
    container: {
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
    },
  },
  plugins: [],
};