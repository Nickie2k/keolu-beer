import React from "react";
import beachCocktail from "./beach-cocktail.jpg";
import "./beachCocktail.css";

const BeachPic = () => {
  return (
    <div className="beach-container">
      <img src={beachCocktail} className="beachCocktail" />
      <div className="text-over">
        <h1 className="beer-heading">KEOLU BEER</h1>
        <p className="beer-tagline">Your Paradise in Every Sip</p>
        <p className="beer-description">
          Discover the finest craft beers and tropical flavors at Hawaii's premier beach destination
        </p>
        <p className="beer-cta">Visit Us Today - Where the Beach Meets the Perfect Brew</p>
      </div>
    </div>
  );
};

export default BeachPic;
