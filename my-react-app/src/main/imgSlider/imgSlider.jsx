import React, { useState } from "react";
import "./imgSlider.css";
import KLFront from "./KLFront.webp";
import KL2 from "./KL2.webp";
import KL3 from "./KL3.jpg";
import KL4 from "./KL4.webp";

const ImgSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      id: 1,
      image: KLFront,
      title: "Keolu Beer Front",
      description: "Welcome to Keolu Beer"
    },
    {
      id: 2,
      image: KL2,
      title: "Keolu Beer",
      description: "Craft beer experience"
    },
    {
      id: 3,
      image: KL3,
      title: "Keolu Beer",
      description: "Premium selection"
    },
    {
      id: 4,
      image: KL4,
      title: "Keolu Beer",
      description: "Quality brews"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === cards.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <button className="slider-btn prev-btn" onClick={prevSlide}>
          &#8249;
        </button>

        <div className="slider-track">
          <div
            className="slider-content"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cards.map((card) => (
              <div key={card.id} className="slider-card">
                <div className="card-image-container">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="slider-btn next-btn" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <div className="slider-dots">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgSlider;