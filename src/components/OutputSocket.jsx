import React from "react";

export default function OutputSocket({ output }) {
    return (
        <div className="glass p-4 w-full">
            <h2 className="text-primary text-lg font-bold">Output Socket</h2>
            <div className="mt-2 p-2 bg-white text-black min-h-[200px]" dangerouslySetInnerHTML={{ __html: output }} />
        </div>
    );
}

