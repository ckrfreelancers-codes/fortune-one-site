/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        branddark: "#3E2C1C",      // Rich brown (primary brand dark)
        brandprimary: "#6B4226",   // Deep earthy brown
        brandlight: "#D4A373",     // Warm golden beige
        brandgold: "#F5C518",      // Fortune golden highlight
        brandgreen: "#4CAF50",     // Eco-friendly green
        brandwhite: "#ffffff",
        brandoffwhite: "#f8f9fb",
      },
    },
  },
  plugins: [],
};
