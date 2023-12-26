import React from "react";
import CV from "../../assets/JeysonZunigaCV.pdf";
import fileSaver from "file-saver";

//function for saving file
const saveCV = () => {
    fileSaver.saveAs(CV, "JeysonZunigaCV.pdf");
};

const CTA = () => {
    return (
        <div className="cta">
            {/* <a href={CV} download className="btn">
        Descargar CV
      </a> */}
            <button onClick={saveCV} className="btn btn-primary">
                Descargar CV
            </button>
            <a href="#contact" className="btn btn-primary">
                Hablemos...
            </a>
        </div>
    );
};

export default CTA;
