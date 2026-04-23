import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <a
          className="header-welcome-text"
          href="https://www.google.com/maps/dir//Keolu+Beers,+1051+Keolu+Dr+%23+101,+Kailua,+HI+96734/@21.3777888,-157.73069,17z/data=!3m1!5s0x7c001492dc7c3975:0x26627de188e8c0a8!4m16!1m7!3m6!1s0x7c001492da1bdacb:0x5715a3c08a0e313d!2sKeolu+Beers!8m2!3d21.3777838!4d-157.7281151!16s%2Fg%2F1tnss3y4!4m7!1m0!1m5!1m1!1s0x7c001492da1bdacb:0x5715a3c08a0e313d!2m2!1d-157.7281151!2d21.3777838?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          📍 ADDRESS
        </a>
      </div>
    </header>
  );
};

export default Header;
