/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Bungee: ["Bungee Outline", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },
      colors: {
        "custom-dark": "#141313",
        "header-green": "#41FFB7",
      },
    },
  },
  plugins: [],
};
