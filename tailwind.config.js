const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1D2224",
        "dark-white": "#F4F4F4",
        "dark-gold": "#CE975C",
      },
    },
  },
  variants: {
    extend: {
      fontFamily: {
        sans: ["Domine", ...fontFamily.sans],
        display: ["Domine", ...fontFamily.sans],
        body: ["Domine", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
