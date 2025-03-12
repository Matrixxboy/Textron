/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"], // Ensure Tailwind works inside src folder
  theme: {
    extend: {
      colors: {
        primary: "#A020F0", // Purple theme color
      },
      backgroundImage: {
        'glass': "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
      },
      backdropBlur: {
        'glass': '10px',
      },
      boxShadow: {
        'neon': '0 0 10px #A020F0, 0 0 40px #A020F0', // Neon effect
      },
    },
  },
  plugins: [],
};
