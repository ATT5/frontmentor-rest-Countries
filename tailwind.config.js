// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      darkBlue: "hsl(209, 23%, 22%)",
      veryDarkBlueBackground: "hsl(207, 26%, 17%)",
      veryDarkBlueLightModeText: "hsl(200, 15%, 8%)",
      darkGrayLightModeInput: "hsl(0, 0%, 52%)",
      veryLightGrayLightModeBackground: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      fontFamily: { nunito: ["Nunito Sans", "sans-serif"] },
    },
  },
  plugins: [],
};
