import "./contact.css";

import React from "react";
import { MdOutlineEmail, MdLocationCity, MdPhoneIphone } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Contactemonos...</h5>
      <h5>
        😎 Con mucho gusto responderé sus solicitudes 👌🏽
      </h5>
      <br />
      <h2>Datos de contacto</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdPhoneIphone className="contact__option-icon" />
              <MdLocationCity className="contact__option-icon" />
            </div>
            <div className="contact__option-children">
              <h5>jeyson@jzgdevs.cloud</h5>
              <h5>(+57) 301-7558381</h5>
              <h5>Cartagena, Colombia</h5>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
