import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hola, yo soy</h5>
        <h1>Jeyson Zuñiga</h1>
        <h5 className="text-light">Desarrollador Full-Stack</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Sigue bajando...
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
