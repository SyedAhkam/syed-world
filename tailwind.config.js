/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: "#0f0f14",
      foreground: "#c0caf5",
      selection: "#7aa2f7", // same as blue
      comment: "#5b6474",
      green: "#9ece6a",
      blue: "#7aa2f7",
      magenta: "#bb9af7",
      red: "#f7768e",
      yellow: "#e0af68",
      cyan: "#7dcfff",
      white: "#c0caf5",
      black: "#0f0f14",
    },
    extend: {
      fontFamily: {
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
