import React, { useState } from 'react';

const Slider = () => {
  // Array de URLs de imágenes de ejemplo
  const images = [
    '../../src/img/slider_img/night_city.jpg',
    '../../src/img/slider_img/nono.jpg',
    '../../src/img/slider_img/park.jpg',
    '../../src/img/slider_img/san_antonio_lake.jpg',
    '../../src/img/slider_img/sierras.jpg',
  ];

  // Estado para almacenar el índice de la imagen actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para mostrar la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Función para mostrar la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {images.map((imageUrl, index) => (
            <div key={index} className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}>
              <img src={imageUrl} alt={`Imagen ${index}`} className="d-block w-100" />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" onClick={prevImage}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" onClick={nextImage}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
