import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/jeysonzg/',
      name: 'Anonimo',
      role: 'Ingeniero de front-end. Mejorando proyectos de código abierto, un compromiso a la vez.',
      test: 'Como desarrollador y solucionador de problemas, creo que Jeyson es un gran socio colaborador. Conocí a Jeyson en algunos proyectos básicos de JavaScript y React y desde entonces ha progresado drásticamente en su comprensión del proceso de desarrollo. Siempre tiene un ambiente profesional y tiene buena calidad de audio y video lo que facilita la comunicación con él.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/jeysonzg/',
      name: 'Anonimo',
      role: 'Desarrollador full-stack | Ingeniero de soporte técnico en Microverse',
      test: "Fue un placer colaborar con Jeyson en diferentes proyectos. Una de las cosas que creo que es especial de él es que nunca se conforma, incluso después de completar los proyectos encuentra otros recursos y fortalece sus conocimientos. Colaborar con él es fácil y cómodo, es como trabajar con alguien a quien conoces desde hace mucho tiempo.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/jeysonzg/',
      name: 'Anonimo',
      role: 'Desarrollador Full Stack| PostgreSQL | JavaScript | React | Redux | Html&CSS | Python.',
      test: 'Trabajé con Jeyson en el mismo equipo y sus habilidades de comunicación son muy sólidas. Su habilidad en programación es una de las mejores, dado el tiempo disponible en el campo. Es un buen jugador de equipo. Probablemente encajará en la mayoría de las empresas no sólo porque es un buen trabajador en equipo, sino también porque tiene muy buenas habilidades y sé que tiene mucho más potencial que mostrar.',
    },
  ];
  return (
    <section id="testimonials">
      <h5>Comentarios de compañeros</h5>
      <h2>Testimonios</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link} target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials