/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto Slab", "sans-serif", "system-ui"],
      },
      spacing: {
        15: "3.75rem",
      },
      boxShadow: {
        custom: "0 0 200px",
      },
      keyframes: {
        fadeInCenter: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideInFromTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        moveUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-20px)" },
        },
        moveDown: {
          "0%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInCenter: "fadeInCenter .1s ease-out forwards",
        slideInFromTop: "slideInFromTop .5s ease-out forwards",
        slideInFromLeft: "slideInFromLeft .5s ease-out forwards",
        slideInFromRight: "slideInFromRight .5s ease-out forwards",
        slideInFromBottom: "slideInFromBottom .5s ease-out forwards",
        moveUp: "moveUp .25s ease-out forwards",
        moveDown: "moveDown .25s ease-out forwards",
        spinSlow: "spin 5s linear infinite",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
