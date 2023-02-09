/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          "0%": { opacity: "0.2" },
          "100%": { opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0.1" },
        },
      },
      animation: {
        "fade-out": "fadeIn 5s linear forwards",
      },
    },
  },
  plugins: [],
};
