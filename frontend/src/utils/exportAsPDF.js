import jsPDF from "jspdf";
import { latexToImage } from "../utils/latexToImage";

/**
 * Export formatted text as a PDF file.
 * @param {string} text - Input text with LaTeX equations
 * @param {string} filename - Output filename (default: output.pdf)
 */
export const exportAsPDF = async (text, filename = "output.pdf") => {
    if (!text.trim()) {
        console.error("⚠️ No content to export!");
        return;
    }

    const doc = new jsPDF();
    let y = 10; // Vertical position for text

    const lines = text.split("\n");

    for (const line of lines) {
        if (!line.trim()) continue;

        // Detect LaTeX Equations
        const latexMatches = line.match(/\$\$(.*?)\$\$|\\\[(.*?)\\\]|\\\((.*?)\\\)/g);

        if (latexMatches) {
            for (const match of latexMatches) {
                const latexCode = match.replace(/(\$\$|\\\[|\\\]|\\\(|\\\))/g, "").trim();
                console.log("🔹 Processing LaTeX:", latexCode);

                const imageData = await latexToImage(latexCode);
                if (imageData) {
                    console.log("✅ Adding LaTeX Image to PDF");
                    doc.addImage(imageData, "PNG", 10, y, 60, 30);
                    y += 40;
                } else {
                    console.warn("⚠️ LaTeX conversion failed. Adding raw text.");
                    doc.text(line, 10, y);
                    y += 10;
                }
            }
        } else {
            doc.text(line, 10, y, { maxWidth: 180 }); // Auto line break
            y += 10;
        }
    }

    console.log("📄 Saving PDF...");
    doc.save(filename);
};
