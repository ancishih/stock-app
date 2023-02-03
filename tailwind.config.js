/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    colors: {
      ...colors,
      indigo: {
        900: "#19216c",
        800: "#2d3a8c",
        700: "#35469c",
        600: "#4055a8",
        500: "#4c63b6",
        400: "#647acb",
        300: "#7b93db",
        200: "#bed0f7",
        100: "#e0e8f9",
      },
      grey: {
        900: "#1f2933",
        800: "#323f4b",
        700: "#3e4c59",
        600: "#52606d",
        500: "#616e7c",
        400: "#7b8794",
        300: "#9aa5b1",
        200: "#cbd2d9",
        100: "#e4e7eb",
        50: "#f5f7fa",
      },
      lightBlue: {
        900: "#035388",
        800: "#0b69a3",
        700: "#127fbf",
        600: "#1992d4",
        500: "#2bb0ed",
        400: "#40c3f7",
        300: "#5ed0fa",
        200: "#81defd",
        100: "#b3ecff",
        50: "#e3f8ff",
      },
      red: {
        900: "#610316",
        800: "#8a041a",
        700: "#ab091e",
        600: "#cf1124",
        500: "#e12d39",
        400: "#ef4e4e",
        300: "#f86a6a",
        200: "#ff9b9b",
        100: "#ffbdbd",
        50: "#ffe3e3",
      },
      yellow: {
        900: "#8d2b0b",
        800: "#b44d12",
        700: "#cb6e17",
        600: "#de911d",
        500: "#f0b429",
        400: "#f7c948",
        300: "#fadb5f",
        200: "#fce588",
        100: "#fff3c4",
        50: "#fffbea",
      },
      teal: {
        900: "#014d40",
        800: "#0c6b58",
        700: "#147d64",
        600: "#199473",
        500: "#27ab83",
        400: "#3ebd93",
        300: "#65d6ad",
        200: "#8eedc7",
        100: "#c6f7e2",
        50: "#effcf6",
      },
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addComponents({}), addUtilities({});
    }),
  ],
};
