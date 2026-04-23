import React from "react";
import ShopInfo from "../ShopInfo/ShopInfo.jsx";
import ImgSlider from "../imgSlider/imgSlider.jsx";
import "./ShopSection.css";

const ShopSection = () => {
  return (
    <div className="shop-section-container">
      <div className="shop-section-left">
        <ShopInfo />
      </div>
      <div className="shop-section-right">
        <ImgSlider />
      </div>
    </div>
  );
};

export default ShopSection;
