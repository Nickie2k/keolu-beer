// SETUP STEPS:
// 1. Install dependencies: npm install express mongoose cors dotenv
// 2. Create a .env file in the backend folder
// 3. Add MONGODB_URI to .env: MONGODB_URI=your_mongodb_connection_string
// 4. Start server: node server.js (runs on port 3000 by default)

// Import required packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// Initialize Express app
const app = express()
const PORT = process.env.PORT || 3000

// Middleware: Enable CORS for cross-origin requests
app.use(cors())
// Middleware: Parse JSON request bodies
app.use(express.json())

// Connect to MongoDB using connection string from .env file
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    console.log('MongoDB connected successfully to the "Users" database')
  )
  .catch((err) => console.error('MongoDB connection error:', err))

// Define schema for contact form submissions
const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phonenumber: String,
    reason: String,
    message: String,
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
)

// Create model from schema - saves to 'contacts' collection in MongoDB
const Contact = mongoose.model('Contact', contactSchema, 'contacts')

// Root endpoint - verify server is running
app.get('/', (req, res) => {
  res.send('Express server is running.')
})

// POST endpoint - save contact form data to MongoDB
app.post('/api/contact', async (req, res) => {
  try {
    // Extract form fields from request body
    const { name, email, phonenumber, reason, message } = req.body

    // Create new contact document
    const newContact = new Contact({
      name,
      email,
      phonenumber,
      reason,
      message,
    })

    // Save to MongoDB
    const savedContact = await newContact.save()

    console.log('Contact saved:', savedContact)
    res.status(201).json({ msg: 'Message saved!', contact: savedContact })
  } catch (err) {
    console.error('Error saving contact:', err)
    res.status(500).json({ error: 'Server error.' })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})

// For Subscriptions

const subsSchema = new mongoose.Schema({
  subsEmail: String,
})

const Subs = mongoose.model('Subs', subsSchema, 'subs')

app.post('/api/subs', async (req, res) => {
  try {
    const { subsEmail } = req.body

    const newSubs = new Subs({
      subsEmail,
    })

    const savedSubs = await newSubs.save()
    console.log('New Subs: ', savedSubs)
    res.status(201).json({ msg: 'Subscription saved!', subscriber: savedSubs })
  } catch (err) {
    console.error('Cannot save new subscriber: ', err)
    res.status(500).json({ error: 'Server error.' })
  }
})
