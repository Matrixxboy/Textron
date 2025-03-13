import React from "react";
import FormattedContent from "./FormattedContent.jsx";

const OutputSocket = ({ text }) => {
    return (
        <div className="p-4 bg-gray-900 text-white rounded-lg">
            <h2 className="text-lg font-bold mb-2">Formatted Output</h2>
            <FormattedContent text={text} />
        </div>
    );
};

export default OutputSocket;
