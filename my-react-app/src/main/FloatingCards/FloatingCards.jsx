import React from "react";
import "./FloatingCards.css";

const FloatingCards = () => {
  return (
    <div className="floating-cards-wrapper">
      <div className="floating-card floating-card-left floating-card-1">
        <div className="card-icon">🍺</div>
        <h3>Craft Selection</h3>
        <p>Premium Beers</p>
      </div>

      <div className="floating-card floating-card-left floating-card-2">
        <div className="card-icon">🌴</div>
        <h3>Hawaiian Vibes</h3>
        <p>Island Paradise</p>
      </div>

      <div className="floating-card floating-card-right floating-card-3">
        <div className="card-icon">⏰</div>
        <h3>Open 7 Days</h3>
        <p>10AM - 10PM</p>
      </div>

      <div className="floating-card floating-card-right floating-card-4">
        <div className="card-icon">📍</div>
        <h3>Kailua, HI</h3>
        <p>Easy to Find</p>
      </div>
    </div>
  );
};

export default FloatingCards;
