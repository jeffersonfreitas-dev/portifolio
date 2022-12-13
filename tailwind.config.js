/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "jeff-gray-1": "#DADCE0",
        "jeff-green-1": "#2E8B57",
      },
      boxShadow: {
        white: "0 0 3px 3px #FFFFFF",
      },
    },
  },
  plugins: [],
};
