/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode using a class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9", // Purple theme (can be used for buttons, accents)
        secondary: "#1E1B4B", // Darker purple for contrast

        // Light Theme Colors
        lightBackground: "#EDE7F6", // Light purple background
        lightText: "#4A148C", // Darker purple text for light mode

        // Dark Theme Colors
        darkBackground: "#1A0033", // Dark purple background
        darkText: "#D1C4E9", // Light purple text for dark mode

        textLight: "#E0E7FF", // Unused, but keeping it for reference
        textDark: "#A5B4FC",  // Unused, but keeping it for reference
        bgDark: "#0F172A",    // Unused, but keeping it for reference
      },
      backdropBlur: {
        glass: "10px",
      },
      boxShadow: {
        neon: "0 0 10px rgba(109, 40, 217, 0.8)",
      },
    },
  },
  plugins: [],
};
