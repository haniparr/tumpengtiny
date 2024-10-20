/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./event/index.html",
    "./cara-order/**/*.{html,js}",
  ],
  theme: {
    colors: {
      black: "#1D1D1D",
      white: "#FFFFFF",
      gray: {
        100: "#ECECEC",
        200: "#CAC9C8",
        300: "#A8A6A2",
        400: "#86837E",
        500: "#64615B",
        600: "#423F3A",
      },
      blue: {
        100: "#F2F6FF",
        200: "#BAD0FE",
        300: "#7A9FEC",
        400: "#5475B9",
        500: "#344F86",
        600: "#1B2D53",
      },
      orange: {
        100: "#FFF5ED",
        200: "#FFC79E",
        300: "#EE9049",
        400: "#BB6A2C",
        500: "#884716",
        600: "#552908",
      },
      taupe: {
        100: "#F3F1EE",
        200: "#EBDEC3",
        300: "#C2B59B",
        400: "#998D75",
        500: "#706653",
        600: "#484132",
      },
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"], // Adds a new `font-display` class
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
