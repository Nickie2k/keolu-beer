# Backend Planning for Keolu Beer Website

## Overview
This document outlines potential backend features using MongoDB and Express.js for the Keolu Beer website.

---

## Primary Backend Use Cases

### 1. Email Subscription Management
- Store email addresses from your EmailBanner form
- Track subscription dates and status
- Send confirmation emails
- Manage unsubscribes
- Send newsletters/promotional emails about new arrivals

**Benefits:**
- Build customer mailing list
- Send targeted promotions
- Announce new products and events

---

### 2. Contact Form Submissions
- Save customer inquiries from the Contact modal
- Store customer details (name, email, phone, message)
- Send email notifications to shop owner
- Track response status (new, in-progress, resolved)

**Benefits:**
- Professional inquiry management
- Never lose customer messages
- Track response times

---

### 3. Product Catalog Management
- Replace hardcoded products in ProductAd with dynamic data
- Store product info: name, price, description, images, category
- Update inventory levels
- Add/edit/delete products without code changes
- Track product availability
- Featured products and promotions

**Benefits:**
- Update products without redeploying
- Real-time inventory tracking
- Easier product management

---

### 4. Image/Content Management
- Store carousel images dynamically
- Update hero images and promotional content
- Manage shop hours, location details
- Update social media links
- Promotional banners

**Benefits:**
- Change website content on the fly
- Seasonal promotions without code changes
- Easy content updates

---

### 5. User Authentication (Future Feature)
- Customer accounts and profiles
- Order history
- Saved delivery addresses
- Wishlist/favorites
- Age verification (required for alcohol sales)

**Benefits:**
- Personalized experience
- Faster checkout
- Customer loyalty

---

### 6. Order Management (Future E-commerce Feature)
- Shopping cart functionality
- Order processing and tracking
- Payment integration (Stripe, PayPal)
- Delivery/pickup scheduling
- Order status updates
- Invoice generation

**Benefits:**
- Online ordering system
- Revenue tracking
- Customer convenience

---

### 7. Analytics & Reporting
- Track popular products
- Monitor email signup rates
- View contact form submissions
- Page view analytics
- Generate sales reports
- Customer behavior insights

**Benefits:**
- Data-driven decisions
- Understand customer preferences
- Optimize inventory

---

### 8. Admin Dashboard
- Manage products, prices, inventory
- View/respond to customer inquiries
- Export subscriber lists
- Update website content
- View analytics and reports
- User management

**Benefits:**
- Centralized management
- No technical knowledge needed
- Secure access control

---

## MongoDB Database Collections

### subscribers
```javascript
{
  _id: ObjectId,
  email: String,
  subscribedAt: Date,
  status: String, // 'active', 'unsubscribed'
  source: String, // 'email-banner', 'checkout', etc.
  preferences: Object // future: email preferences
}
```

### contacts
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  submittedAt: Date,
  status: String, // 'new', 'in-progress', 'resolved'
  respondedAt: Date,
  notes: String
}
```

### products
```javascript
{
  _id: ObjectId,
  name: String,
  category: String, // 'beer', 'wine', 'liquor', 'spirits'
  subcategory: String, // 'IPA', 'lager', 'whiskey', etc.
  price: Number,
  description: String,
  images: [String], // URLs to product images
  stock: Number,
  isAvailable: Boolean,
  isFeatured: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### users (Future)
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  passwordHash: String,
  phone: String,
  dateOfBirth: Date, // age verification
  addresses: [Object],
  role: String, // 'customer', 'admin'
  createdAt: Date,
  lastLogin: Date
}
```

### orders (Future)
```javascript
{
  _id: ObjectId,
  orderNumber: String,
  userId: ObjectId,
  items: [Object], // product details, quantity, price
  subtotal: Number,
  tax: Number,
  total: Number,
  status: String, // 'pending', 'confirmed', 'ready', 'completed', 'cancelled'
  paymentStatus: String,
  deliveryMethod: String, // 'pickup', 'delivery'
  deliveryAddress: Object,
  scheduledTime: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### siteContent
```javascript
{
  _id: ObjectId,
  key: String, // 'carousel-images', 'hero-text', 'shop-hours', etc.
  value: Mixed, // String, Object, Array depending on content type
  updatedAt: Date,
  updatedBy: String
}
```

---

## API Endpoints (Express.js Routes)

### Email Subscriptions
- `POST /api/subscribers` - Subscribe to newsletter
- `GET /api/subscribers` - Get all subscribers (admin)
- `DELETE /api/subscribers/:id` - Unsubscribe
- `POST /api/subscribers/send-newsletter` - Send newsletter (admin)

### Contact Forms
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Get all inquiries (admin)
- `PUT /api/contacts/:id` - Update inquiry status (admin)
- `DELETE /api/contacts/:id` - Delete inquiry (admin)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)
- `GET /api/products/category/:category` - Get products by category

### Site Content
- `GET /api/content/:key` - Get content by key
- `PUT /api/content/:key` - Update content (admin)

### Authentication (Future)
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Orders (Future)
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status (admin)

---

## Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Additional Libraries
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT authentication
- **nodemailer** - Email sending
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables
- **express-validator** - Input validation
- **multer** - File uploads (product images)

### Deployment Options
- **Backend:** Heroku, Railway, Render, DigitalOcean
- **Database:** MongoDB Atlas (cloud)
- **Storage:** AWS S3, Cloudinary (for images)

---

## Most Immediate Value (Priority Order)

### Phase 1: Data Collection (Start Here)
1. **Email subscriptions** - Start building your customer base
2. **Contact form** - Manage customer inquiries professionally

### Phase 2: Content Management
3. **Dynamic products** - Update offerings without deploying code
4. **Image management** - Update carousel and promotional images

### Phase 3: E-commerce (Future)
5. **User accounts** - Customer profiles and authentication
6. **Order system** - Online ordering and payment
7. **Admin dashboard** - Centralized management interface

---

## Current Backend Setup

**Structure:**
```
backend/
├── server.js        # Express server (port 3000)
├── package.json     # Backend dependencies
└── node_modules/    # 68 packages including Express 5.1.0
```

**Running:**
- `npm run backend` - Start Express server
- `npm run backend-dev` - Start in dev mode
- Server: http://localhost:3000
- Frontend: http://localhost:5173 (Vite)

**Current Endpoint:**
- GET `/` - Returns "Hello World!"

---

## Development Steps to Get Started

1. **Setup Development Environment** ✓ COMPLETED
   ```bash
   mkdir keolu-beer-backend
   cd keolu-beer-backend
   npm init -y
   npm install express mongoose cors dotenv
   npm install --save-dev nodemon
   ```
   - Backend folder created with Express 5.1.0 installed
   - Self-contained with own package.json and node_modules

2. **Create MongoDB Atlas Account**
   - Sign up at mongodb.com/cloud/atlas
   - Create free cluster
   - Get connection string

3. **Build Basic API Structure**
   - Create Express server
   - Connect to MongoDB
   - Build first endpoint (e.g., email subscription)

4. **Test with Frontend**
   - Update EmailBanner to POST to API
   - Test subscription flow

5. **Deploy Backend**
   - Deploy to Railway/Render
   - Update frontend with production API URL

---

## Security Considerations

- **Input Validation** - Sanitize all user inputs
- **Rate Limiting** - Prevent spam/abuse
- **HTTPS** - Secure connections only
- **Environment Variables** - Hide sensitive data
- **Age Verification** - Required for alcohol sales
- **CORS** - Control which domains can access API
- **Authentication** - Secure admin routes
- **SQL Injection Prevention** - Use Mongoose properly

---

## Cost Estimates (Monthly)

- **MongoDB Atlas** - $0 (Free tier: 512MB)
- **Backend Hosting** - $0-5 (Free tiers available)
- **Domain** - Already covered
- **Email Service** - $0-15 (SendGrid free tier: 100 emails/day)

**Total: $0-20/month to start**

---

## Next Steps

Would you like to start building:
1. Email subscription backend?
2. Contact form backend?
3. Product management system?
4. Full e-commerce platform?

Let me know which feature you'd like to implement first!
