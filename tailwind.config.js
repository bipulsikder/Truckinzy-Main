/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'truck': 'truck-drive 20s linear infinite',
      },
    },
  },
  plugins: [],
};