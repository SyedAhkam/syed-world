const defaultTheme = require("tailwindcss/defaultTheme");
const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {},
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-fira-code)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    createThemes(({ light, dark }) => ({
      "tokyo-night": dark({
        foreground: "#c0caf5",
        background: "#0f0f14",
        red: "#f7768e",
        orange: "#ff9e64",
        yellow: "#e0af68",
        green: "#9ece6a",
        blue: "#7aa2f7",
        purple: "#9d7cd8",
        cyan: "#7dcfff",
        pink: "#bb9af7",
      }),
      "tokyo-night-light": light({
        foreground: "#0f0f14",
        background: "#c0caf5",
        red: "#f52a65",
        orange: "#b15c00",
        yellow: "#8c6c3e",
        green: "#587539",
        blue: "#134eb2",
        purple: "#7847bd",
        cyan: "#007197",
        pink: "#9854f1",
      }),
    })),
    require("@tailwindcss/typography"),
  ],
};
