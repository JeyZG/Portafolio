import "./portfolio.css";

import IMG1 from "../../assets/shopex.jpg";
import IMG2 from "../../assets/reservas.jpg";
import IMG3 from "../../assets/tasker.webp";
// import IMG4 from "../../assets/Raise.png";
// import IMG5 from "../../assets/Potsave.png";
// import IMG6 from "../../assets/Health.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "ShopEx",
      img: IMG1,
      description:
        "Proyecto de tienda virtual enfocada en productos tecnologicos.",
      technologies: "MongoDB | ExpressJS | ReactJS | NodeJS",
      link: "https://shop.jzgdevs.cloud/",
    },
    {
      id: 2,
      title: "Reservas Ctg",
      img: IMG2,
      description:
        "Proyecto de aplicacion web para la gestión completa de una immobiliaria con funciones de sincronizacion con PMS como AirBNB y Booking.com.",
      technologies: "MongoDB | ExpressJS | ReactJS | NodeJS",
      link: "https://reservas.jzgdevs.cloud/",
    },
    {
      id: 3,
      title: "Tasklist",
      img: IMG3,
      description:
        "Proyecto basico de un gestionador de tareas.",
      technologies: "MongoDB | ExpressJS | ReactJS | NodeJS",
      link: "https://tasker.jzgdevs.cloud/",
    },
    // {
    //   id: 4,
    //   title: "Raise",
    //   img: IMG4,
    //   description:
    //     "Get started with free educational courses to mastery the foundations of startup equity as an African business.",
    //   technologies: "Remix | React.js | Webflow | jQuery",
    //   link: "https://www.raise.africa/",
    // },
    // {
    //   id: 5,
    //   title: "Potsave",
    //   img: IMG5,
    //   description:
    //     "Through the PotSave.com platform, PotSave offers in-person product assessment and ordering services, accessible via the website, mobile applications, and software.",
    //   technologies: "React | Next.js | Lodash | Tailwind CSS",
    //   link: "https://dev-pwa.potsave.com/",
    // },
    // {
    //   id: 6,
    //   title: "Health",
    //   img: IMG6,
    //   description:
    //     "U of U Health is the Mountain West's only academic health care system. We provide patient care, medical research, and physician training.",
    //   technologies: "Angular | Drupal | Nginx | TypeScript",
    //   link: "https://healthcare.utah.edu/",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>Trabajo reciente</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
