/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: "jit",
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addComponents({}), addUtilities({});
    }),
  ],
};
