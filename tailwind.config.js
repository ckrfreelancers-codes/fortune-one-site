/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        branddark: "#0f1d3d",   // contrast navy for text
        nyanza: "#E8FBE1",
        lavender: "#ECE3FC",
        lavenderblush: "#FCEBF6",
        cornsilk: "#FAF8DF",
        water: "#DDF2FD",
        platinum: "#DEE0E4",
      }
    }
  },
  plugins: [],
};
