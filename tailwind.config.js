/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto Mono", "sans-serif"],
        dmMono: ["DM Mono", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        background: "#0a0a0a",
        text: "#cfcfcf",
        firstLayerBg: "#1d1d1d",
        secondLayerBg: "#343434",
        primaryText: "#f6f6f6",
        secondaryText: "#929292",
        defaultHoverBg: "#23232380",
        activeBg: "#343434",
      },
    },
  },
  plugins: [],
};
