/** @type {import('tailwindcss').Config} */

export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
    screens: {
      'sm': '600px',
      'md': '900px',
      'lg': '1000px',
      'xl': '1500px',
      '2xl': '1800px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
};
export const plugins = [];