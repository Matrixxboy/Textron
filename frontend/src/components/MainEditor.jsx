import { useState, useEffect } from "react";
import InputEditor from "./InputEditor.jsx";
import OutputSocket from "./OutputSocket.jsx";
import DownloadButton from "./DownloadButton.jsx";

const MainEditor = () => {
    const [text, setText] = useState(() => localStorage.getItem("draftText") || "");
    const [livePreview, setLivePreview] = useState(true);
    const [autoSave, setAutoSave] = useState(true); // Toggle for auto-save
    const [exportContent, setExportContent] = useState(""); // Stores processed output

    // Save draft automatically when autoSave is enabled
    useEffect(() => {
        if (autoSave) {
            localStorage.setItem("draftText", text);
        }
    }, [text, autoSave]);

    // Clear draft from local storage
    const clearDraft = () => {
        localStorage.removeItem("draftText");
        setText("");
    };

    return (
        <div className="w-full max-w-4xl p-6 mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg">
            {/* Toolbar with Preview & Auto-Save Controls */}
            <div className="flex justify-between items-center mb-4">
                <button
                    className="px-3 py-1 text-sm font-medium border rounded-md
                               bg-purple-600 text-white dark:bg-purple-500 dark:text-white
                               hover:bg-purple-700 transition-all"
                    onClick={() => setLivePreview(!livePreview)}
                >
                    {livePreview ? "Disable Preview" : "Enable Preview"}
                </button>

                <div className="flex space-x-3">
                    <label className="flex items-center text-sm">
                        <input
                            type="checkbox"
                            checked={autoSave}
                            onChange={() => setAutoSave(!autoSave)}
                            className="mr-1"
                        />
                        Auto-Save
                    </label>
                    <button
                        className="px-3 py-1 text-sm font-medium border rounded-md
                                   bg-red-500 text-white dark:bg-red-600 dark:text-white
                                   hover:bg-red-600 transition-all"
                        onClick={clearDraft}
                    >
                        Clear Draft
                    </button>
                </div>
            </div>

            {/* Input Editor */}
            <InputEditor input={text} setInput={setText} />

            {/* Live Preview */}
            {livePreview && <OutputSocket text={text} setExportContent={setExportContent} />}

            {/* Download Buttons */}
            <DownloadButton exportContent={exportContent} />
        </div>
    );
};

export default MainEditor;
