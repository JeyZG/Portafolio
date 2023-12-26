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

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn" target="_blank" rel="noopener noreferrer">
                Descargar CV
            </a>
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
