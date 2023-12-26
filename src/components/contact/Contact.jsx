import "./contact.css";

import React from "react";
import { MdOutlineEmail, MdLocationCity } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Contactemonos...</h5>
      <h5>
        Con mucho gusto respondo sus mensajes si me proporcionan un email valido 👌🏽
      </h5>
      <h2>Datos</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdLocationCity className="contact__option-icon" />
            </div>
            <div className="contact__option-children">
              <h5>jeyson@jzgdevs.cloud</h5>
              <h5>Cartagena de Indias, Colombia</h5>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
