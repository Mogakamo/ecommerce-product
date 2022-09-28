/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ff7d1a",
        "secondary": "#ffede0",
        "blue": "#1d2025",
        "darkgrayblue":"#68707d",
        "lightgrayblue":"#f7f8fd",
      },
      fontSize: {
        
      }
    },
  },
  plugins: [],
}
