/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./index.html",
  ],
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      md: { min: "768px" },
      lg: { min: "976px" },
      xl: "1440px",
    },
    colors: {
      primary: "#1fb6ff",
      secondary: "#7e5bef",
      accent: "#ff49db",
      text: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
