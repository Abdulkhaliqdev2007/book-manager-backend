# 📚 Book Manager — Week 5 Backend

A production-ready REST API backend for a full-stack Book Manager application built with **Node.js, Express.js, MongoDB, Mongoose, JWT, Multer, Jest, and Supertest**.

This Week 5 backend focuses on **automated API testing, authentication, security, production deployment, and reliable communication with the React frontend**.

---

## ✨ Features

### 🔐 Authentication

* User registration
* User login
* JWT authentication
* Protected API routes
* Authenticated user verification
* Secure password handling

### 📚 Book Management

* Create books
* Get all books
* Get a single book
* Update books
* Delete books
* Search and sorting support
* Book cover image uploads

### 📊 Dashboard

* Dashboard statistics API
* Book data aggregation
* Statistics for the frontend dashboard

### 🛡️ Security

* Helmet security middleware
* CORS configuration
* Express rate limiting
* Protected routes with JWT
* Request body size limits
* Centralized error handling

### 🖼️ File Uploads

* Image uploads using Multer
* Local upload storage
* Static serving of uploaded images
* Cross-origin access configured for uploaded resources

---

# 🧪 Automated Testing

The backend uses **Jest** and **Supertest** for automated API testing.

Run the backend tests:

```bash
npm test
```

### Current Test Result

```text
Test Suites: 3 passed, 3 total
Tests:       12 passed, 12 total
Snapshots:   0 total
```

### Tests Cover

* API information endpoint
* Invalid routes
* Authentication validation
* Signup validation
* Existing user handling
* Login validation
* Invalid login credentials
* Book listing
* Book retrieval
* Book not found cases
* Unauthorized book creation
* Unauthorized book deletion

All backend tests are currently passing successfully.

---

# 🏗️ Production Build & Verification

The backend has been deployed to **Render** and verified using the production API.

### Production API

**Backend:**

https://book-manager-week5-2-backend.onrender.com

### API Base URL

https://book-manager-week5-2-backend.onrender.com/api

### API Health Verification

The production root endpoint responds successfully with the API information:

```json
{
  "message": "Welcome to the Book Manager API! 📚",
  "version": "1.0.0",
  "endpoints": {
    "books": "/api/books",
    "auth": "/api/auth"
  }
}
```

The production authentication flow has also been verified successfully through the deployed frontend.

---

# 🌐 Deployment

The backend is deployed on **Render**.

### Backend

https://book-manager-week5-2-backend.onrender.com

### Frontend

https://book-manager-week5-2-frontend.onrender.com

The React frontend communicates with this Express.js backend through the production REST API.

---

# 🔧 Environment Variables

Create a `.env` file in the backend root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

For production, these environment variables are configured through the hosting platform.

> Never commit `.env` files or private credentials to GitHub.

---

# 🚀 Installation

Clone the backend repository:

```bash
git clone https://github.com/Abdulkhaliqdev2007/book-manager-week5-2-backend.git
```

Navigate to the project:

```bash
cd book-manager-week5-2-backend
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Run the Backend

Start the development server:

```bash
npm run dev
```

Or start the production server:

```bash
npm start
```

The local backend normally runs at:

```text
http://localhost:5000
```

---

# 📡 API Endpoints

## Authentication

```text
POST /api/auth/signup
POST /api/auth/login
GET  /api/auth/me
```

## Books

```text
GET    /api/books
GET    /api/books/:id
POST   /api/books
PUT    /api/books/:id
DELETE /api/books/:id
```

## Dashboard

```text
GET /api/dashboard
```

## API Information

```text
GET /
```

---

# 🛡️ Middleware & Architecture

The backend uses the following main middleware and services:

* Express.js
* Helmet
* CORS
* Express Rate Limit
* JSON and URL-encoded body parsing
* JWT authentication middleware
* Multer file upload middleware
* Centralized error handler
* MongoDB connection through Mongoose

### Architecture

```text
┌────────────────────────┐
│     React Frontend     │
│     Vite + Axios       │
└───────────┬────────────┘
            │
            │ REST API
            ▼
┌────────────────────────┐
│    Node.js + Express   │
│        Backend         │
└───────────┬────────────┘
            │
            │ Mongoose
            ▼
┌────────────────────────┐
│      MongoDB Atlas     │
│        Database        │
└────────────────────────┘
```

Authentication uses JWT tokens, while MongoDB Atlas stores users and books.

---

# 📁 Project Structure

```text
backend/

├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── bookController.js
│   └── dashboardController.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   └── uploadMiddleware.js
│
├── models/
│   ├── User.js
│   └── Book.js
│
├── routes/
│   ├── authRoutes.js
│   ├── bookRoutes.js
│   └── dashboardRoutes.js
│
├── uploads/
│
├── __tests__/
│   ├── auth.test.js
│   ├── books.test.js
│   └── server.test.js
│
├── server.js
├── package.json
└── README.md
```

---

# 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Multer
* Helmet
* CORS
* Express Rate Limit

### Testing

* Jest
* Supertest

### Deployment

* Render
* MongoDB Atlas

---

# 🔗 Repositories

### Backend

https://github.com/Abdulkhaliqdev2007/book-manager-week5-2-backend

### Frontend

https://github.com/Abdulkhaliqdev2007/book-manager-week5-2--frontend

---

# 🎯 Week 5 Learning Goals

This backend demonstrates:

* Automated API testing
* Authentication testing
* API validation
* Happy-path testing
* Failure-case testing
* Protected API routes
* JWT authentication
* REST API development
* File upload handling
* Security middleware
* Rate limiting
* CORS configuration
* MongoDB integration
* Production deployment
* Environment configuration
* Full-stack frontend/backend integration

---

# ✅ Verification Summary

| Area                |         Result |
| ------------------- | -------------: |
| Backend Test Suites |   **3 passed** |
| Backend Tests       |  **12 passed** |
| Production API      |    **Working** |
| Authentication      |    **Working** |
| Frontend ↔ Backend  |    **Working** |
| Render Deployment   |    **Working** |
| MongoDB Integration | **Configured** |
| Security Middleware | **Configured** |

---

# 👨‍💻 Author

**Hafiz Abdul Khaliq**

GitHub:

https://github.com/Abdulkhaliqdev2007
