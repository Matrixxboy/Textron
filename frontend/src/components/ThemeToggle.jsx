import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            className="p-2 rounded-md border-2 border-gray-500
                       bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200
                       hover:bg-gray-300 dark:hover:bg-gray-700 transition-all
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
};

export default ThemeToggle;
