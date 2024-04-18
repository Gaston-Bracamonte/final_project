import React, { useState } from 'react';

const Slider = () => {
  // Array de URLs de imágenes de ejemplo
  const images = [
    'https://i.pinimg.com/originals/9f/d2/53/9fd253256bdac729155011c1c3bd007a.jpg',
    'https://www.cordobaturismo.gov.ar/wp-content/uploads/2023/01/yucac10.jpg',
    'https://i.pinimg.com/originals/e8/ff/c1/e8ffc1187f8a3fb820a67c08204c9144.jpg',
    'https://guiadeturismoargentina.com/wp-content/uploads/2019/04/carlos-paz2.jpg',
    'https://i.pinimg.com/originals/7f/a7/1b/7fa71be85a25fc6deb61f4f08f37c7bb.jpg',
    'https://www.cordobaturismo.gov.ar/wp-content/uploads/2018/09/16707573_10155792909783840_5514747335741479490_o.jpg',
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
