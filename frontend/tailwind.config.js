/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      md: { min: "768px", max: "975px" },
      lg: { min: "976px", max: "1399px" },
      xl: "1440px",
    },
    colors: {
      "primary-color": "#1fb6ff",
      "secondary-color": "#7e5bef",
      "accent-color": "#ff49db",
      "text-color": "#ff7849",
    },
    extend: {},
  },
  plugins: [],
};
