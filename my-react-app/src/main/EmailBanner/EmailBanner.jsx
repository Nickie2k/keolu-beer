import React, { useState } from 'react'
import './EmailBanner.css'
import visaLogo from './visa (2).png'
import mastercardLogo from './card.png'
import applePayLogo from './apple-pay.png'
import amexLogo from './amex.png'

const EmailBanner = ({ onPrivacyClick }) => {
  // Submit email
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitting(true)
      setMessage('')

      try {
        const response = await fetch('http://localhost:3000/api/subs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ subsEmail: email }),
        })

        const data = await response.json()

        if (response.ok) {
          setMessage('Thank you for subscribing!')
          setEmail('')
        } else {
          setMessage('Subscription failed. Please try again.')
        }
      } catch (error) {
        console.error('Error submitting subscription:', error)
        setMessage('Network error. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <footer className="email-banner-container">
      {/* Newsletter Section */}
      <div className="email-banner-content">
        <div className="text-icon-group">
          <div className="email-icon">
            <svg viewBox="0 0 24 24" className="banner-icon">
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
          </div>
          <div className="email-text-section">
            <h3 className="email-banner-title">Stay Updated with Keolu Beer</h3>
            <p className="email-banner-description">
              Subscribe to get the latest updates on new arrivals and special
              offers
            </p>
          </div>
        </div>
        <form className="email-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className={`subscribe-button${isSubmitting ? ' subscribing' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? <span className="spinner" /> : 'Subscribe'}
          </button>
        </form>
        {message && <p className="subscription-message">{message}</p>}
      </div>

      {/* Payment Methods Section */}
      <div className="payment-methods">
        <h4 className="payment-title">We Accept</h4>
        <div className="payment-logos">
          <div className="payment-card">
            <img src={visaLogo} alt="Visa" className="payment-icon" />
          </div>
          <div className="payment-card">
            <img
              src={mastercardLogo}
              alt="Mastercard"
              className="payment-icon"
            />
          </div>
          <div className="payment-card">
            <img
              src={amexLogo}
              alt="American Express"
              className="payment-icon"
            />
          </div>
          <div className="payment-card">
            <img src={applePayLogo} alt="Apple Pay" className="payment-icon" />
          </div>
        </div>
      </div>

      {/* Footer Information Section */}
      <div className="footer-info">
        <div className="footer-columns">
          {/* About Column */}
          <div className="footer-column">
            <h4 className="footer-heading">About Keolu Beer</h4>
            <p className="footer-text">
              Your paradise in every sip. Discover the finest craft beers and
              tropical flavors at Hawaii's premier beach destination.
            </p>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <p className="footer-text">📍 1051 Keolu Dr # 101</p>
            <p className="footer-text">Kailua, HI 96734</p>
            <p className="footer-text">📞 (808) XXX-XXXX</p>
            <p className="footer-text">✉️ info@keolubeers.com</p>
          </div>

          {/* Hours Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Opening Hours</h4>
            <p className="footer-text">Monday - Sunday</p>
            <p className="footer-text">10:00 AM - 10:00 PM</p>
            <p className="footer-text">Open Every Day!</p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <a href="#ubereats" className="footer-link">
              UberEats
            </a>
            <a href="#doordash" className="footer-link">
              DoorDash
            </a>
            <a
              href="https://www.google.com/maps/dir//Keolu+Beers,+1051+Keolu+Dr+%23+101,+Kailua,+HI+96734"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Get Directions
            </a>
            <button className="footer-link footer-privacy-btn" onClick={onPrivacyClick}>
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="copyright-text">
          © {new Date().getFullYear()} Keolu Beer. All rights reserved.
        </p>
        <p className="footer-21-notice">Must be 21+ to purchase alcohol. Please drink responsibly.</p>
      </div>
    </footer>
  )
}

export default EmailBanner
