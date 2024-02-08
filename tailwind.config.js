/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: {
        DEFAULT: "#333",
      },
      white: {
        DEFAULT: "#FFF",
      },
      yellow: {
        DEFAULT: "#F7C116",
      },
      orange: {
        DEFAULT: "#F57C4A",
      },
      blue: {
        DEFAULT: "#39B7E8",
      },
    },
    extend: {},
  },
  plugins: [],
};
