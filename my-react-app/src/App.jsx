import React from "react";
import Header from "./main/Header/Header.jsx";
import MyHeader from "./main/myHeader/myHeader.jsx";
import ShopSection from "./main/ShopSection/ShopSection.jsx";
import ProductAd from "./main/Product/ProductAd.jsx";
import EmailBanner from "./main/EmailBanner/EmailBanner.jsx";
import "./index.css";
import BeachPic from "./main/Beach/bCocktail.jsx";
import MyStore from "./main/StoreHour/storeHour.jsx";

function App() {
  
  return (
    <div>
      <Header />
      <MyHeader />
      <BeachPic />
      <ShopSection />
      <ProductAd />
      <MyStore />
      <EmailBanner />
    </div>
  );
}

export default App;
