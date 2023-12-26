import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me.jpg";

const Intro = () => {
  return (
    <section id="about">
      <h5>Enterate</h5>
      <h2>Acerca de mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>+5 años / 1 año certificable</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos personales</h5>
              <small>3 proyectos realizados</small>
            </article>
          </div>
          <p>
          Durante muchos años he desarrollado diversos proyectos que me han permitido solucionar problemas en el área laboral, comercial y educativa.
            <br />
            - Me enfoco en brindar soluciones que aborden las necesidades del cliente y resuelvan sus problemas.
            <br />
            - Me empeño en mantener a mis clientes satisfechos durante todo el proceso de desarrollo.
            <br />
            - Siempre busco la forma de generar soluciones con una gran gestión de errores para que el uso del software/aplicacion sea totalmente agradable.
          </p>
          <a href="#contact" className="btn btn-primary">
            Hablemos...
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
