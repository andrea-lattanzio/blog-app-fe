/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: '#0a0a0a',
        text: '#cfcfcf'
      }
    },
  },
  plugins: [],
};
