/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      michroma: ["Michroma", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
