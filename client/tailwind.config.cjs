/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF385C",
        primaryDark: "#CC2D4A",
      },
      fontFamily: {
        primaryFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
