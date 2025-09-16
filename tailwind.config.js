/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandlight: "#5781ab", // Light blue
        branddark: "#2f4669",  // Dark navy
      },
    },
  },
  plugins: [],
};
