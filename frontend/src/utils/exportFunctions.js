import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph } from "docx";

export const exportAsPDF = (text) => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("output.pdf");
};

export const exportAsDOCX = (text) => {
    const doc = new Document({
        sections: [{ children: [new Paragraph(text)] }],
    });

    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "output.docx");
    });
};
