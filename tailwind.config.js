/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      fontFamily: {
        mono: ["Courier New"],
      },
    },
  },
  plugins: [],
};
