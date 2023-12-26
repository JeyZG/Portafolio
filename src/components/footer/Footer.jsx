import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Jeyson Zuñiga
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#about">Acerca de mi</a>
        </li>
        <li>
          <a href="#experience">Habilidades</a>
        </li>
        <li>
          <a href="#portfolio">Portafolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonios</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; JZG Devs 2023. Todos los derechos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
