/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./views/**/*.ejs", "./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        0: "0px",
        "2xs": "0.625rem",
      },
    },
  },
  plugins: [],
};
