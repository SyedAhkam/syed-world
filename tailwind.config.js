const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {},
  theme: {},
  plugins: [
    createThemes({
      "tokyo-night": {
        foreground: "#c0caf5",
        background: "#1a1b26",
        red: "#f7768e",
        orange: "#ff9e64",
        yellow: "#e0af68",
        green: "#9ece6a",
        purple: "#9d7cd8",
        cyan: "#7dcfff",
        pink: "#bb9af7",
      },
      "tokyo-night-light": {
        foreground: "#1a1b26",
        background: "#f0f4f8",
        red: "#f52a65",
        orange: "#b15c00",
        yellow: "#8c6c3e",
        green: "#587539",
        purple: "#7847bd",
        cyan: "#007197",
        pink: "#9854f1",
      },
    }),
  ],
};
