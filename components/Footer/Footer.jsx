import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>Todos los derechos reservados &copy; 2024</p>
        <ul className="footer-links">
          <li><a href="#section1">Home</a></li>
          <li><a href="#section2">Que ofrecemos</a></li>
          <li><a href="#section3">Recomendaciones</a></li>
          <li><a href="#section4">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;