/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamil: {
        outfit: ['Outfit', "sans-serif"],
      }
    },
  },
  plugins: [],
}

