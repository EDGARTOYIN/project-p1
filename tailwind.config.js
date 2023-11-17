/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-custom": "#00D8FF",
        "nav-color": "#21222A",
        "nav-text": "#DEEBF8",
        "main-color": "#282D35",
      },
      fontFamily: {
        "default-ff": "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
