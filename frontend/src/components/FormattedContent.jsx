import React from "react";
import CodeHighlighter from "./CodeHighlighter.jsx";

const FormattedContent = ({ text }) => {
    if (!text) return <p className="text-gray-500">No content to display.</p>;

    // Function to process and format text
    const renderFormattedText = () => {
        const lines = text.split("\n");

        return lines.map((line, index) => {
            // Detect block code (```code```)
            if (line.startsWith("```") && line.endsWith("```")) {
                const codeContent = line.slice(3, -3).trim();
                return <CodeHighlighter key={index} code={codeContent} />;
            }
            // Detect inline code (`code`)
            if (line.startsWith("`") && line.endsWith("`")) {
                return (
                    <code key={index} className="bg-gray-700 text-yellow-300 px-1 rounded">
                        {line.slice(1, -1)}
                    </code>
                );
            }
            return <p key={index} className="mb-2">{line}</p>;
        });
    };

    return <div>{renderFormattedText()}</div>;
};

export default FormattedContent;
