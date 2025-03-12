import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function InputEditor({ text, setText }) {
    return (
        <div className="glass p-4 w-full">
            <h2 className="text-primary text-lg font-bold">Input Editor</h2>
            <ReactQuill value={text} onChange={setText} className="mt-2 bg-white text-black" />
        </div>
    );
}
