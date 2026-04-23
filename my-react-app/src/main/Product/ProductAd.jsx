import React from "react";
import "./ProductAd.css";
import beerImage from "./beer-1697913_640.png";

const ProductAd = () => {
  return (
    <div className="product-ad-container">
      <div className="product-ad-content">
        <div className="product-ad-text">
          <h2 className="product-ad-title">Wide Selection of Premium Beverages</h2>
          <p className="product-ad-description">
            Keolu Beer Shop offers an extensive range of premium products to satisfy all your beverage needs.
            From popular American craft beers like Budweiser, Coors Light, Miller Lite, Blue Moon,
            Samuel Adams, and Sierra Nevada, to fine liquor selections including Jack Daniel's,
            Jim Beam, Grey Goose Vodka, Tito's Vodka, Jameson Whiskey, and Hennessy Cognac.
          </p>
          <p className="product-ad-tagline">
            Your one-stop destination for quality beers, wines, and spirits!
          </p>
        </div>
        <div className="product-ad-image">
          <img src={beerImage} alt="Premium Beer Selection" />
        </div>
      </div>
    </div>
  );
};

export default ProductAd;
