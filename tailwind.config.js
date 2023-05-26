/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  transform: [(content) => content.replace(/taos:/g, "")],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        changeColor: {
          "0%": {
            backgroundColor: "#bb2649",
          },
          "10%": {
            backgroundColor: "#cbd4c2",
          },
          "20%": {
            backgroundColor: "#dbebc0",
          },
          "30%": {
            backgroundColor: "#C3B299",
          },
          "40%": {
            backgroundColor: "#6665DD",
          },
          "50%": {
            backgroundColor: "#540d6e",
          },
          "60%": {
            backgroundColor: "#f4bfdb",
          },
          "70%": {
            backgroundColor: "#9f9fad",
          },
          "80%": {
            backgroundColor: "#aecfdf",
          },
          "90%": {
            backgroundColor: "#f7f052",
          },
          "100%": {
            backgroundColor: "#1f1300",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("taos/plugin"),
    require("tw-elements/dist/plugin.cjs"),
  ],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
