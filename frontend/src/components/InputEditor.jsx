import React from "react";
import MathHelperPanel from "./MathHelperPanel.jsx";

const InputEditor = ({ input, setInput }) => {
    // Handle keyboard shortcuts (e.g., Ctrl + B for bold, Ctrl + I for italics)
    const handleKeyDown = (e) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            let selectionStart = e.target.selectionStart;
            let selectionEnd = e.target.selectionEnd;
            let selectedText = input.substring(selectionStart, selectionEnd);
            let newText = input;

            if (e.key === "b") {
                newText =
                    input.substring(0, selectionStart) +
                    `**${selectedText || "bold text"}**` +
                    input.substring(selectionEnd);
            } else if (e.key === "i") {
                newText =
                    input.substring(0, selectionStart) +
                    `*${selectedText || "italic text"}*` +
                    input.substring(selectionEnd);
            } else if (e.key === "`") {
                newText =
                    input.substring(0, selectionStart) +
                    `\`${selectedText || "code"}\`` +
                    input.substring(selectionEnd);
            }

            setInput(newText);
        }
    };

    // Function to insert predefined snippets
    const insertAtCursor = (snippet) => {
        setInput((prev) => prev + snippet);
    };

    return (
        <div className="relative">
            {/* ✅ Math Helper Panel for easy LaTeX symbol insertion */}
            <MathHelperPanel insertAtCursor={insertAtCursor} />

            {/* ✅ Formatting Buttons */}
            <div className="flex gap-2 mb-2">
                <button
                    className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
                    onClick={() => insertAtCursor("**bold text**")}
                >
                    B
                </button>
                <button
                    className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
                    onClick={() => insertAtCursor("*italic text*")}
                >
                    I
                </button>
                <button
                    className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
                    onClick={() => insertAtCursor("`inline code`")}
                >
                    {"</>"}
                </button>
                <button
                    className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
                    onClick={() => insertAtCursor("\\( E=mc^2 \\)")}
                >
                    ∑
                </button>
            </div>

            {/* ✅ Textarea Input */}
            <textarea
                className="w-full min-h-[150px] max-h-[400px] p-4 rounded-lg border shadow-md resize-y
                           bg-white text-black border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600
                           focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type text, LaTeX equations (e.g., \( E=mc^2 \)), or code snippets..."
                aria-label="Input Editor"
            />

            {/* ✅ Live Character Count */}
            <div className="absolute bottom-2 right-3 text-sm text-gray-500 dark:text-gray-400">
                {input.length} chars
            </div>
        </div>
    );
};

export default InputEditor;
