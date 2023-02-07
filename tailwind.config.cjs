/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161853",
        secondary: "#292C6D",
        tertiary: "#EC255A",
        "custom-white": "#FAEDF0",
      },
    },
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      sans: ["Source Sans Pro", "sans - serif"],
    },
    textShadow: {
      DEFAULT: "-4px 5px 4px rgba(22, 24, 83, 0.85)",
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
