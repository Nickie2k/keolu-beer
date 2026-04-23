import React from "react";
import "./ProductGrid.css";
import beerImage from "../Product/beer-1697913_640.png";

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Budweiser", price: "$8.99", image: beerImage },
    { id: 2, name: "Coors Light", price: "$7.99", image: beerImage },
    { id: 3, name: "Miller Lite", price: "$7.99", image: beerImage },
    { id: 4, name: "Blue Moon", price: "$9.99", image: beerImage },
    { id: 5, name: "Samuel Adams", price: "$10.99", image: beerImage },
    { id: 6, name: "Sierra Nevada", price: "$11.99", image: beerImage },
    { id: 7, name: "Jack Daniel's", price: "$32.99", image: beerImage },
    { id: 8, name: "Jim Beam", price: "$24.99", image: beerImage },
    { id: 9, name: "Grey Goose Vodka", price: "$38.99", image: beerImage },
    { id: 10, name: "Tito's Vodka", price: "$26.99", image: beerImage },
    { id: 11, name: "Jameson Whiskey", price: "$29.99", image: beerImage },
    { id: 12, name: "Hennessy Cognac", price: "$49.99", image: beerImage }
  ];

  return (
    <div className="product-grid-container">
      <h2 className="product-grid-title">Our Product Selection</h2>
      <p className="product-grid-description">
        Keolu Beer Shop offers a wide range of premium products including popular American beers
        like Budweiser, Coors Light, Miller Lite, Blue Moon, Samuel Adams, and Sierra Nevada.
        We also carry an extensive selection of fine liquor products including whiskeys, vodkas,
        and cognacs to satisfy all your beverage needs.
      </p>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-box">
              {product.image ? (
                <img src={product.image} alt={product.name} className="product-image" />
              ) : (
                <div className="product-placeholder">
                  <span>📷</span>
                </div>
              )}
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
