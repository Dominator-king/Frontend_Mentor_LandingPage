/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        VeryDarkBlue: "hsl(233, 12%, 13%)",
        VeryPaleRed: "hsl(13, 100%, 96%)",
        VaryLightGray: "hsl(0, 0%, 98%)",
        DarkGrayishBlue: "hsl(227, 12%,61%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        DarkBlue: "hsl(228, 39%, 23%)",
        BrightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
      },
    },
  },
  plugins: [],
};
