import katex from "katex";
import html2canvas from "html2canvas";

/**
 * Convert LaTeX to a high-quality PNG image (Frontend)
 * @param {string} latex - The LaTeX expression
 * @param {number} width - Image width (default: auto)
 * @param {number} height - Image height (default: auto)
 * @returns {Promise<string>} - Base64 PNG image
 */
export const latexToImage = async (latex, width = 200, height = 100) => {
    return new Promise((resolve) => {
        const tempDiv = document.createElement("div");
        tempDiv.style.position = "absolute";
        tempDiv.style.left = "-9999px";
        tempDiv.style.fontSize = "1.5em";
        tempDiv.style.padding = "10px";
        tempDiv.style.backgroundColor = "transparent";
        document.body.appendChild(tempDiv);

        try {
            tempDiv.innerHTML = katex.renderToString(latex, {
                throwOnError: false,
                displayMode: true,
            });
        } catch (error) {
            console.error("❌ LaTeX Render Error:", error);
            document.body.removeChild(tempDiv);
            resolve(null);
            return;
        }

        html2canvas(tempDiv, {
            backgroundColor: "rgba(0,0,0,0)",
            scale: 2,
            width,
            height,
        }).then((canvas) => {
            document.body.removeChild(tempDiv);
            resolve(canvas.toDataURL("image/png"));
        });
    });
};
