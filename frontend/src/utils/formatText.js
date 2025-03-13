const formatText = (text = "") => {
    const lines = text.split("\n");

    let formattedContent = [];
    let insideCodeBlock = false;
    let codeLines = [];
    let language = "plaintext"; // Default language

    lines.forEach((line) => {
        line = line.trim(); // Remove unnecessary spaces

        // Start or end of a code block
        if (line.startsWith("```")) {
            if (!insideCodeBlock) {
                insideCodeBlock = true;
                language = line.replace(/```/g, "").trim() || "plaintext"; // Detect language
            } else {
                formattedContent.push({ type: "code", language, content: codeLines.join("\n") });
                insideCodeBlock = false;
                codeLines = [];
            }
        } else if (insideCodeBlock) {
            codeLines.push(line);
        }
        // Detect Block Equations (\[ ... \])
        else if (/^\\\[.*\\\]$/.test(line)) {
            formattedContent.push({ type: "blockMath", content: line.slice(2, -2) });
        }
        // Detect Inline Equations (\( ... \))
        else if (/^\\\(.*\\\)$/.test(line)) {
            formattedContent.push({ type: "inlineMath", content: line.slice(2, -2) });
        }
        // Default text output
        else {
            formattedContent.push({ type: "text", content: line });
        }
    });

    return formattedContent;
};

export default formatText;
