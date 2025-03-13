import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, ImageRun } from "docx";
import { latexToImage } from "../utils/latexToImage";

/**
 * Process and format the content before exporting as DOCX.
 * @param {string} text - Input text with LaTeX equations
 * @returns {Promise<Array>} - Formatted document content
 */
const processContent = async (text) => {
    console.log("🔍 Processing content for DOCX...");
    if (!text) return [];

    const lines = text.split("\n");
    const docContent = [];

    for (const line of lines) {
        let trimmedLine = line.trim();
        if (!trimmedLine) continue;

        // Detect LaTeX Equations
        const latexMatches = trimmedLine.match(/\$\$(.*?)\$\$|\\\[(.*?)\\\]|\\\((.*?)\\\)/g);
        if (latexMatches) {
            for (const match of latexMatches) {
                const latexCode = match.replace(/(\$\$|\\\[|\\\]|\\\(|\\\))/g, "").trim();
                console.log("🔹 Processing LaTeX:", latexCode);

                const imageData = await latexToImage(latexCode);
                if (imageData) {
                    console.log("✅ Adding LaTeX Image to DOCX");
                    docContent.push(
                        new Paragraph({
                            children: [
                                new ImageRun({
                                    data: Buffer.from(imageData.split(",")[1], "base64"),
                                    transformation: { width: 200, height: 100 },
                                }),
                            ],
                        })
                    );
                } else {
                    console.warn("⚠️ LaTeX image conversion failed. Adding as raw text.");
                    docContent.push(new Paragraph({ text: trimmedLine }));
                }
            }
        } else {
            docContent.push(new Paragraph({ text: trimmedLine }));
        }
    }

    return docContent;
};

/**
 * Export formatted content as a DOCX file.
 * @param {string} text - Input text with LaTeX equations
 * @param {string} filename - Output filename (default: output.docx)
 */
export const exportAsDOCX = async (text, filename = "output.docx") => {
    console.log("📄 Exporting DOCX...");
    if (!text) return console.error("⚠️ No content to export!");

    const content = await processContent(text);

    const doc = new Document({
        sections: [{ properties: {}, children: content }],
    });

    Packer.toBlob(doc)
        .then((blob) => {
            console.log("✅ DOCX successfully generated! Saving...");
            saveAs(blob, filename);
        })
        .catch((error) => console.error("❌ Error generating DOCX:", error));
};
