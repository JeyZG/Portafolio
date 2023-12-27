import React from "react";
import CV from "../../../src/assets/JeysonZunigaCV.pdf";
// import fileSaver from "file-saver";

//function for saving file
// const saveCV = () => {
//     // console.log(process.env.REACT_APP_CLIENT_URL);
//     fileSaver.saveAs(
//         CV,
//         "JeysonZunigaCV.pdf"
//     );
// };

const onButtonClick = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/docs/JeysonZunigaCV.pdf';
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "JeysonZunigaCV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const onButtonClick2 = () => {
    const pdfUrl = CV;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "JeysonZunigaCV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const CTA = () => {
    return (
        <div className="cta">
            <button onClick={onButtonClick} className="btn btn-primary">
                Descargar CV
            </button>

            <button onClick={onButtonClick2} className="btn">
                Descargar CV
            </button>

            {/* <a href={process.env.PUBLIC_URL + '/docs/JeysonZunigaCV.pdf'} download className="btn" target="_blank" rel="noreferrer">
                Descargar CV
            </a> */}
            {/* <button onClick={saveCV} className="btn btn-primary">
                Descargar CV
            </button> */}
            {/* <a
                href="../../assets/JeysonZunigaCV.pdf"
                className="btn btn-primary"
                download
            >
                Descargar CV
            </a> */}
            <a href="#contact" className="btn btn-primary">
                Hablemos...
            </a>
        </div>
    );
};

export default CTA;
