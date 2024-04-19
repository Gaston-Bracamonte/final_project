import React, { useRef, useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [slides, setSlides] = useState([
    {
      src: 'https://wallpaperaccess.com/full/5775672.jpg',
      description: 'Un lugar para descansar, las sierras',
      textColor: 'white' // Color de texto para la tercera descripción
    },
    {
      src: 'https://wallpaperaccess.com/full/2086798.jpg',
      description: 'La noche de Córdoba',
      textColor: 'white' // Color de texto para la tercera descripción
    },
    {
      src: 'https://wallpaperaccess.com/full/5775745.jpg',
      description: 'Montañas por todos lados, Altas Cumbres',
      textColor: 'black' // Color de texto para la tercera descripción
    }
  ]);

  const carouselRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
      setCurrentSlideIndex(nextSlideIndex);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup function to prevent memory leaks
  })

  const handleSlideChange = (newIndex) => {
    setCurrentSlideIndex(newIndex); // Update currentSlideIndex when user clicks next/prev buttons
  };
 

  
    return (
        <div className="carousel-container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" ref={carouselRef}>
                <div className="carousel-indicators">
                    {slides.map((slide, index) => (
                        <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? 'active' : ''} aria-current={index === 0 ? 'true' : 'false'} aria-label={`Slide ${index + 1}`}></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={slide.src} className="d-block w-100" alt={`Slide ${index + 1}`} />
                            <div className="carousel-caption d-none d-md-block">
                            <h5 className='description-black'>{slide.description}</h5>
                            </div>
                        </div>
                    ))}
                </div>
                <button 
  className="carousel-control-prev" 
  type="button" 
  data-bs-target="#carouselExampleIndicators" 
  data-bs-slide="prev" 
  onClick={() => handleSlideChange((currentSlideIndex - 1 + slides.length) % slides.length)}
>
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button 
  className="carousel-control-next" 
  type="button" 
  data-bs-target="#carouselExampleIndicators" 
  data-bs-slide="next" 
  onClick={() => handleSlideChange((currentSlideIndex + 1) % slides.length)}
>
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
            </div>
        </div>
    );
}

export default Carousel;
