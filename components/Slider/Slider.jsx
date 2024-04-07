import React, { useState } from 'react';
import './Slider.css'; // Archivo CSS para los estilos del slider

const Slider = () => {
  // Array de URLs de imágenes de ejemplo
  const images = [
    'https://tripin.travel/wp-content/uploads/2016/07/CarlosPaz01-secretaria.jpg',
    'https://i.ytimg.com/vi/DBhLXgVu9AQ/maxresdefault.jpg',
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
    <div className="slider-container">
      {/* Imagen actual */}
      <img src={images[currentImageIndex]} alt={`Imagen ${currentImageIndex}`} className="slider-image" />
      {/* Botón para mostrar la imagen anterior */}
      <button className="arrow-button prev" onClick={prevImage}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      {/* Botón para mostrar la siguiente imagen */}
      <button className="arrow-button next" onClick={nextImage}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
    </div>
  );
};

export default Slider;