import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark, materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

// Function to detect language from the given code text
const detectLanguage = (text) => {
    if (!text.trim()) return "plaintext";

    const patterns = {
        python: /\b(def |import |print\(|class )/g,
        javascript: /\b(function |const |let |var |console\.log\()/g,
        java: /\b(public |private |class |System\.out\.println\()/g,
        c: /\b(#include |int main\(\))/g,
        cpp: /\b(#include |namespace std|cout<<|cin>>)/g,
        html: /<\/?[a-z][\s\S]*>/i,
    };

    for (const [lang, regex] of Object.entries(patterns)) {
        if (regex.test(text)) return lang;
    }

    return "plaintext"; // Default to plain text if no match
};

const CodeHighlighter = ({ content, theme }) => {
    const language = detectLanguage(content);
    const isDarkMode = theme === "dark";

    return (
        <div className="p-4 rounded-md border border-gray-300 dark:border-gray-600">
            <p className="text-primary text-sm font-semibold mb-2 uppercase">
                {language}
            </p>
            <SyntaxHighlighter language={language} style={isDarkMode ? materialDark : materialLight}>
                {content}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeHighlighter;
