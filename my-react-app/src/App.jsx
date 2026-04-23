import React, { useState } from "react";
import Header from "./main/Header/Header.jsx";
import MyHeader from "./main/myHeader/myHeader.jsx";
import ShopSection from "./main/ShopSection/ShopSection.jsx";
import ProductAd from "./main/Product/ProductAd.jsx";
import EmailBanner from "./main/EmailBanner/EmailBanner.jsx";
import "./index.css";
import BeachPic from "./main/Beach/bCocktail.jsx";
import MyStore from "./main/StoreHour/storeHour.jsx";
import AgeGate from "./main/AgeGate/ageGate.jsx";
import PrivacyPolicy from "./main/PrivacyPolicy/PrivacyPolicy.jsx";

function App() {
  const [verified, setVerified] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div>
      {!verified && <AgeGate onVerified={() => setVerified(true)} />}
      {privacyOpen && <PrivacyPolicy onClose={() => setPrivacyOpen(false)} />}
      <Header />
      <MyHeader />
      <BeachPic />
      <ShopSection />
      <ProductAd />
      <MyStore />
      <EmailBanner onPrivacyClick={() => setPrivacyOpen(true)} />
    </div>
  );
}

export default App;
