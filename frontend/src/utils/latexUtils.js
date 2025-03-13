import katex from "katex";
import html2canvas from "html2canvas";

// Convert LaTeX to Image (Frontend)
export const latexToImage = async (latex) => {
    return new Promise((resolve) => {
        const tempDiv = document.createElement("div");
        tempDiv.style.position = "absolute";
        tempDiv.style.left = "-9999px";
        document.body.appendChild(tempDiv);

        try {
            tempDiv.innerHTML = katex.renderToString(latex, { throwOnError: false });
        } catch (error) {
            console.error("❌ LaTeX Render Error:", error);
            document.body.removeChild(tempDiv);
            resolve(null);
            return;
        }

        html2canvas(tempDiv, { backgroundColor: null }).then((canvas) => {
            document.body.removeChild(tempDiv);
            resolve(canvas.toDataURL("image/png"));
        });
    });
};
