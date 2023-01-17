/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 4s 5",
        rotate: "rotate 3s linear reverse 1",
      },
      keyframes: {
        fadeIn: {
          "95%": { opacity: 0 },
          "50%": { opacity: 1 },
          "10%": { opacity: 0.5 },
          "0%%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
