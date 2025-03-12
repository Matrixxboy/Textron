/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9", // Purple
      },
      backgroundColor: {
        dark: "#1E1B29",
        glass: "rgba(255, 255, 255, 0.1)", // Glassmorphism effect
      },
    },
  },
  plugins: [],
};
