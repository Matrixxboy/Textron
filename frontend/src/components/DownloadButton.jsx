import React from "react";
import { exportAsPDF } from "../utils/exportAsPDF.js";
import { exportAsDOCX } from "../utils/exportAsDOCX.js";

const DownloadButton = ({ exportContent, theme }) => {
    const safeContent = exportContent?.trim() || "";

    const handleExport = (type) => {
        if (!safeContent) return;
        type === "pdf" ? exportAsPDF(safeContent) : exportAsDOCX(safeContent);
    };

    return (
        <div className="flex flex-wrap gap-4 mt-4">
            <button
                className={`px-4 py-2 rounded-md transition-all disabled:opacity-50 ${
                    theme === "dark"
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
                onClick={() => handleExport("pdf")}
                disabled={!safeContent}
                aria-label="Download as PDF"
            >
                📄 Download as PDF
            </button>

            <button
                className={`px-4 py-2 rounded-md transition-all disabled:opacity-50 ${
                    theme === "dark"
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-green-500 hover:bg-green-600 text-white"
                }`}
                onClick={() => handleExport("docx")}
                disabled={!safeContent}
                aria-label="Download as DOCX"
            >
                📑 Download as DOCX
            </button>
        </div>
    );
};

export default DownloadButton;
