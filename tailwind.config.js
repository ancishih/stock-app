/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const container = require("@tailwindcss/container-queries");
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
      coolGrey: {
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
      grey: {
        900: "#222222",
        800: "#3b3b3b",
        700: "#515151",
        600: "#626262",
        500: "#7e7e7e",
        400: "#9e9e9e",
        300: "#b1b1b1",
        200: "#cfcfcf",
        100: "#e1e1e1",
        50: "#f7f7f7",
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
    container,
    plugin(function ({ addUtilities, addComponents }) {
      addComponents({
        ".news_card": {
          display: "flex",
          "flex-direction": "column",
          overflow: "hidden",
          // height: "13rem",
          "border-top": "1px solid #7e7e7e",
          "padding-top": "1rem",
          "padding-bottom": "1rem",
          gap: "1rem",
        },
        ".news_card img": {
          "aspect-ratio": "16/9",
          "flex-basis": "33.33%",
          "max-width": "19rem",
          width: "auto",
          height: "auto",
        },
        ".news_card div": {
          display: "flex",
          "flex-direction": "column",
          width: "66.66%",
          "max-width": "42rem",
          padding: "0 1rem",
          height: "100%",
        },
        ".news_card:first-of-type": {
          "padding-top": "4rem",
          height: "20rem",
          "border-top": "none",
          position: "relative",
        },
        ".news_card:last-of-type": {
          "border-bottom": "1px solid #7e7e7e",
        },
        // ".target_date": {
        //   "font-size": "1.25rem",
        //   color: "rgb(31,41,51)",
        // },
        // ".calendar_day": {
        //   "text-align": "center",
        //   color: "rgb(82 96 109 / 0.75)",
        //   "font-size": "1.125rem",
        // },
        // ".next_calendar_date, .prev_calendar_date": {
        //   color: "rgb(82 96 109)",
        // },
        // ".calendar_date, .next_calendar_date, .prev_calendar_date": {
        //   display: "flex",
        //   "flex-direction": "column",
        //   "justify-content": "center",
        //   "align-items": "center",
        //   width: "2rem",
        //   height: "2rem",
        //   "user-select": "none",
        // },
        // ".calendar_date:hover, .calendar_date.active, .next_calendar_date:hover, .prev_calendar_date:hover":
        //   {
        //     "background-color": "rgba(123 147 219/0.75)",
        //     color: "rgb(25 33 108)",
        //     "border-radius": "50%",
        //     transition: "color 0.1s, background-color 0.1s",
        //   },
        // ".calendar_date.active": {
        //   "font-weight": "bold",
        // },
        // ".input": {
        //   height: "1.75rem",
        //   "font-size": "1.125rem",
        //   padding: "0 0.25rem",
        //   border: "1px solid rgb(31,41,51)",
        //   "border-radius": "0.25rem",
        // },
        // ".input:focus": {
        //   "background-color": "rgba(123,147,219,0.2)",
        //   padding: "0 0.25rem",
        // },
        // ".modal_backdrop": {
        //   background:
        //     "radial-gradient(ellipse at top, rgba(82,96,109,1) 0%, rgba(31,41,51,1) 100%)",
        // },
        // ".th, .td": {
        //   "flex-basis": "8.33%",
        // },
        // ".th:first-of-type, .td:first-of-type": {
        //   "flex-basis": "25%",
        //   "padding-right": "0.5rem",
        //   "padding-left": "0.5rem",
        // },
        // ".th:nth-of-type(6),.td:nth-of-type(6)": {
        //   "flex-basis": "16.66%",
        // },
        // ".tr": {
        //   display: "flex",
        //   "flex-direction": "row",
        //   width: "100%",
        //   "border-top": "1px solid black",
        // },
        // ".tr:first-of-type": {
        //   "border-top": "none",
        // },
        // ".ripple": {},
      }),
        addUtilities({});
    }),
  ],
};
