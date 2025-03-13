import React from "react";

const symbols = [
    { label: "∑", latex: "\\sum" },
    { label: "√", latex: "\\sqrt{}" },
    { label: "π", latex: "\\pi" },
    { label: "∞", latex: "\\infty" },
    { label: "α", latex: "\\alpha" },
    { label: "β", latex: "\\beta" },
    { label: "θ", latex: "\\theta" },
    { label: "∫", latex: "\\int" },
    { label: "≠", latex: "\\neq" },
    { label: "≤", latex: "\\leq" },
    { label: "≥", latex: "\\geq" },
];

const MathHelperPanel = ({ insertSymbol }) => {
    return (
        <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg mb-4 shadow-md">
            <h3 className="text-md font-semibold text-gray-900 dark:text-gray-100">
                Math Symbols
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
                {symbols.map((symbol, index) => (
                    <button
                        key={index}
                        className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded
                                   hover:bg-gray-400 dark:hover:bg-gray-500 transition"
                        onClick={() => insertSymbol(symbol.latex)}
                    >
                        {symbol.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MathHelperPanel;
