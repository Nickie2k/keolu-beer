import React, { useEffect, useRef } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = ({ onClose }) => {
  const dialogRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Trap focus inside dialog and lock body scroll
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    if (dialogRef.current) dialogRef.current.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      if (previouslyFocused) previouslyFocused.focus();
    };
  }, []);

  // Close when clicking the backdrop (not the dialog itself)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="pp-overlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pp-title"
    >
      <div className="pp-dialog" ref={dialogRef} tabIndex={-1}>
        {/* Header */}
        <div className="pp-header">
          <p className="pp-brand">Keolu Beer</p>
          <h2 id="pp-title" className="pp-title">Privacy Policy</h2>
          <p className="pp-effective">Effective Date: January 1, 2025</p>
          <button
            className="pp-close-btn"
            onClick={onClose}
            aria-label="Close Privacy Policy"
          >
            &#x2715;
          </button>
        </div>

        {/* Body */}
        <div className="pp-body">
          <section className="pp-section">
            <h3 className="pp-section-title">Overview</h3>
            <p className="pp-text">
              Keolu Beer (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates this
              website as a display-only information page for our retail liquor store located in
              Kailua, Hawaii. We do not sell alcohol or any products online. This Privacy Policy
              explains how we handle the limited personal information we collect through this site.
            </p>
          </section>

          <section className="pp-section">
            <h3 className="pp-section-title">What Information We Collect</h3>
            <p className="pp-text">
              The only personal information we collect is your <strong>email address</strong>, and
              only if you voluntarily subscribe to our mailing list through the email signup form on
              this site. We do not collect names, phone numbers, payment details, or any other
              personal data through this website.
            </p>
          </section>

          <section className="pp-section">
            <h3 className="pp-section-title">How We Use Your Email</h3>
            <p className="pp-text">
              Your email address is used solely to send you updates about Keolu Beer, including:
            </p>
            <ul className="pp-list">
              <li>New product arrivals and restocks</li>
              <li>Special in-store promotions and seasonal offers</li>
              <li>Store news and announcements</li>
            </ul>
            <p className="pp-text">
              We will never use your email for any purpose other than these communications.
            </p>
          </section>

          <section className="pp-section">
            <h3 className="pp-section-title">We Do Not Sell Your Data</h3>
            <p className="pp-text">
              We do not sell, rent, trade, or share your email address or any personal information
              with third parties for their own marketing purposes. Your information stays with
              Keolu Beer only.
            </p>
          </section>

          <section className="pp-section">
            <h3 className="pp-section-title">Unsubscribing</h3>
            <p className="pp-text">
              You may unsubscribe from our mailing list at any time. Every email we send will
              include an unsubscribe link at the bottom. You may also contact us directly at{' '}
              <a href="mailto:phihaotran.tech@gmail.com" className="pp-link">
                phihaotran.tech@gmail.com
              </a>{' '}
              to request removal of your email from our list. We will process your request
              promptly.
            </p>
          </section>

          <section className="pp-section">
            <h3 className="pp-section-title">Cookies &amp; Tracking</h3>
            <p className="pp-text">
              This website does not use analytics tracking cookies, advertising cookies, or
              third-party tracking scripts. The only browser storage used is a session-based record
              to remember your age verification for the duration of your visit. This data is not
              transmitted to us and is cleared when you close your browser tab.
            </p>
          </section>

          <section className="pp-section">
            <h3 className="pp-section-title">Data Security</h3>
            <p className="pp-text">
              We take reasonable precautions to protect your email address from unauthorized
              access. Our email list is stored securely and access is limited to authorized
              personnel only.
            </p>
          </section>

          <section className="pp-section">
            <h3 className="pp-section-title">Children&rsquo;s Privacy</h3>
            <p className="pp-text">
              This website is intended for individuals who are 21 years of age or older. We do not
              knowingly collect information from anyone under the age of 21.
            </p>
          </section>

          <section className="pp-section">
            <h3 className="pp-section-title">Contact Us</h3>
            <p className="pp-text">
              If you have any questions about this Privacy Policy, or to submit a data request
              (such as accessing or deleting your email from our list), please contact us at:
            </p>
            <div className="pp-contact-block">
              <p className="pp-contact-line">Keolu Beer</p>
              <p className="pp-contact-line">1051 Keolu Dr #101, Kailua, HI 96734</p>
              <p className="pp-contact-line">
                <a href="mailto:phihaotran.tech@gmail.com" className="pp-link">
                  phihaotran.tech@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section className="pp-section">
            <h3 className="pp-section-title">Changes to This Policy</h3>
            <p className="pp-text">
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated effective date. Continued use of the site after changes
              are posted constitutes acceptance of the revised policy.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="pp-footer">
          <button className="pp-close-footer-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
