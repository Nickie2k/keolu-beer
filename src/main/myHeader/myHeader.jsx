// useState is a React Hook that lets you add state to functional components
// State is data that changes over time and causes the component to re-render when updated
import React, { useState } from 'react'
import './myHeader.css'
import uberEatsIcon from './icons8-uber-eats-app-48.png'
import doorDashIcon from './doordash.jpeg'

const MyHeader = () => {
  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Form state - each field gets its own state variable
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    reason: '',
    message: '',
  })

  // State for form submission status
  const [submitStatus, setSubmitStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle input changes - updates formData when user types
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault() // Prevents page refresh
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Send POST request to backend API
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phonenumber: '',
          reason: '',
          message: '',
        })
        // Close modal after 2 seconds
        setTimeout(() => {
          closeModal()
          setSubmitStatus('')
        }, 4000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <header className="my-header-container">
        <div className="my-header-left">
          <h1 className="my-header-brand">Keolu Beer 🍺</h1>
        </div>
        <nav className="my-header-right">
          {/* When this button is clicked, openModal() is called */}
          {/* openModal() sets isModalOpen to true, causing the component to re-render */}
          {/* After re-render, the modal appears because {isModalOpen && ...} becomes true */}
          <button
            onClick={openModal}
            className="my-header-link my-header-contact-btn"
          >
            Contact Us
          </button>
          <a href="#ubereats" className="my-header-link">
            UberEats
            <img src={uberEatsIcon} alt="UberEats" className="my-header-icon" />
          </a>
          <a href="#doordash" className="my-header-link">
            DoorDash
            <img src={doorDashIcon} alt="DoorDash" className="my-header-icon" />
          </a>
        </nav>
      </header>

      {/* CONDITIONAL RENDERING: This only renders when isModalOpen is true */}
      {/* Syntax: {condition && <JSX>} means "if condition is true, render the JSX" */}
      {/* When isModalOpen changes from false to true, React re-renders and shows the modal */}
      {/* When isModalOpen changes from true to false, React re-renders and hides the modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          {/* e.stopPropagation() prevents clicks on modal content from bubbling up to overlay */}
          {/* Without it, clicking inside the modal would trigger closeModal from the overlay */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close button: clicking it calls closeModal() which sets isModalOpen to false */}
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <h2>Contact Us</h2>
            {submitStatus === 'success' && (
              <div className="status-message success-message">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="status-message error-message">
                Failed to send message. Please try again.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="reason">Reason for Contact:</label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a reason...</option>
                  <option value="stock-inquiry">Stock Inquiry</option>
                  <option value="general-information">
                    General Information
                  </option>
                  <option value="career">Career</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default MyHeader
