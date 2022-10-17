/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["retro", "bumblebee", "luxury", "pastel", "emerald"],
  },
  plugins: [require("daisyui")],
};
