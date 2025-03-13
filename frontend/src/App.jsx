import ThemeToggle from "./components/ThemeToggle.jsx";
import MainEditor from "./components/MainEditor.jsx";
import '../styles/global.css'

function App() {
    return (
        <div className="min-h-screen transition-colors duration-300
      bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
            <div className="container mx-auto p-4">
                <ThemeToggle />
                <h1 className="text-3xl font-bold">Welcome to Textron</h1>
                <MainEditor />
            </div>
        </div>
    );
}

export default App;
