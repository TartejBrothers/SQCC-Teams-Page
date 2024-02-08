/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: { max: "800px" },
      lgs: { max: "600px" },
      lgx: { max: "1200px" },
    },
    extend: {
      fontFamily: {
        Bungee: ["Bungee Outline", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        "custom-dark": "#141313",
        "header-green": "#41FFB7",
        "content-bg": "#171720",
        "fields-bg": "#67798A",
      },
    },
  },
  plugins: [],
};
