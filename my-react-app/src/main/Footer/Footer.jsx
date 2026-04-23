import React from 'react';
import './Footer.css';

const Footer = ({ onPrivacyClick }) => {
  return (
    <footer className="footer-root">
      {/* 21+ responsible drinking bar */}
      <div className="footer-responsible">
        <span className="footer-age-badge">21+</span>
        <p className="footer-responsible-text">
          You must be <strong>21 years or older</strong> to purchase alcohol.
          Please drink responsibly.
        </p>
      </div>

      {/* Business info + Privacy link */}
      <div className="footer-meta">
        <div className="footer-meta-business">
          <p className="footer-meta-name">Keolu Beer</p>
          <p className="footer-meta-address">1051 Keolu Dr #101, Kailua, HI 96734</p>
          <p className="footer-meta-phone">(808) XXX-XXXX</p>
        </div>

        <div className="footer-meta-links">
          <button
            className="footer-privacy-link"
            onClick={onPrivacyClick}
            aria-haspopup="dialog"
          >
            Privacy Policy
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p className="footer-copyright-text">
          &copy; {new Date().getFullYear()} Keolu Beer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
