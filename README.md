# 📚 Book Manager – Week 5 Backend

A production-ready REST API backend for the **Book Manager** full-stack application, built with **Node.js, Express.js, MongoDB, Mongoose, JWT, Multer, Jest, and Supertest**.

This backend provides authentication, book management, dashboard statistics, reviews, image uploads, security middleware, automated testing, and production deployment.

---

## ✨ Features

### 🔐 Authentication

* User registration
* User login
* JWT authentication
* Protected routes
* Current user verification
* Secure password hashing
* User roles (`user` / `admin`)

### 📚 Book Management

* Create books
* Get all books
* Get a single book
* Update books
* Delete books
* Search and sorting support
* Book categories
* Published date
* Price and description
* Book cover image uploads

### 📊 Dashboard

* Dashboard statistics
* Total books
* Total book value
* Books by category
* Books added over time
* Average price by category

### ⭐ Reviews

* Create reviews
* Get all reviews
* Get reviews for a specific book
* Get a single review
* Update reviews
* Delete reviews
* Rating validation from 1–5
* Prevent duplicate reviews by the same user
* Review ownership protection

### 🖼️ File Uploads

* Image uploads using Multer
* Local upload storage
* Static serving of uploaded images
* Cross-origin access for uploaded resources

### 🛡️ Security

* Helmet security middleware
* CORS configuration
* Express rate limiting
* JWT authentication
* Protected routes
* Request body size limits
* Centralized error handling
* Server-side validation

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Multer
* dotenv
* CORS
* Helmet
* Express Rate Limit

### Testing

* Jest
* Supertest

### Deployment

* Render
* MongoDB Atlas

---

## 📁 Project Structure

```text
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── bookController.js
│   └── reviewController.js
│
├── middleware/
│   ├── auth.js
│   ├── errorHandler.js
│   └── upload.js
│
├── models/
│   ├── User.js
│   ├── Book.js
│   └── Review.js
│
├── routes/
│   ├── authRoutes.js
│   ├── bookRoutes.js
│   └── reviewRoutes.js
│
├── __tests__/
│   ├── auth.test.js
│   ├── books.test.js
│   ├── review.test.js
│   └── server.test.js
│
├── uploads/
│
├── server.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Abdulkhaliqdev2007/book-manager-week5-2-backend.git
```

### 2. Open the project

```bash
cd book-manager-week5-2-backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create environment variables

Create a `.env` file in the backend root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Never commit `.env` or private credentials to GitHub.

### 5. Start the development server

```bash
npm run dev
```

The backend normally runs at:

```text
http://localhost:5000
```

### 6. Start production server

```bash
npm start
```

---

## 📡 API Endpoints

### Authentication

```text
POST /api/auth/signup
POST /api/auth/login
GET  /api/auth/me
```

### Books

```text
GET    /api/books
GET    /api/books/:id
POST   /api/books
PUT    /api/books/:id
DELETE /api/books/:id
```

Creating, updating, and deleting books require authentication and admin access.

### Reviews

```text
GET    /api/reviews
GET    /api/reviews/book/:bookId
GET    /api/reviews/:id
POST   /api/reviews
PUT    /api/reviews/:id
DELETE /api/reviews/:id
```

### Dashboard

```text
GET /api/dashboard/stats
```

### API Information

```text
GET /
```

---

## 🖼️ Image Upload Flow

```text
React Frontend
      ↓
   FormData
      ↓
POST /api/books
      ↓
    Multer
      ↓
   uploads/
      ↓
 MongoDB stores file path
      ↓
Frontend displays cover image
```

Uploaded images are served through:

```text
/uploads/<filename>
```

---

## 🔐 Authentication

The backend uses **JSON Web Tokens (JWT)**.

Protected requests send the token using the Authorization header:

```text
Authorization: Bearer <token>
```

Protected operations include:

* Creating books
* Updating books
* Deleting books
* Creating reviews
* Updating reviews
* Deleting reviews

---

## ⭐ Review System

Each review contains:

```text
book
user
rating
comment
createdAt
updatedAt
```

Ratings must be whole numbers between **1 and 5**.

A user can review a particular book only once.

Review updates and deletions are restricted to the review owner or an administrator.

---

## 🧪 Automated Testing

The backend uses **Jest** and **Supertest** for API testing.

Run tests with:

```bash
npm test
```

The test suite covers areas including:

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
* Unauthorized book operations
* Review functionality

---

## 🌐 Production Deployment

The backend is deployed on **Render**.

### Production Backend

```text
https://book-manager-week5-2-backend.onrender.com
```

### Production API Base URL

```text
https://book-manager-week5-2-backend.onrender.com/api
```

### Production Frontend

```text
https://book-manager-week5-2-frontend.onrender.com
```

The React frontend communicates with the Express backend through the production REST API.

---

## 🔧 Production Environment Variables

The following environment variables are configured on the hosting platform:

```env
PORT
MONGO_URI
JWT_SECRET
```

Private credentials are not stored in the repository.

---

## 🔗 Repositories

### Backend

```text
https://github.com/Abdulkhaliqdev2007/book-manager-week5-2-backend
```

### Frontend

```text
https://github.com/Abdulkhaliqdev2007/book-manager-week5-2--frontend
```

---

## 🏗️ Architecture

```text
┌─────────────────────────┐
│     React Frontend      │
│      Vite + Axios       │
└────────────┬────────────┘
             │
             │ REST API
             ▼
┌─────────────────────────┐
│    Node.js + Express    │
│        Backend          │
└────────────┬────────────┘
             │
             │ Mongoose
             ▼
┌─────────────────────────┐
│      MongoDB Atlas      │
│        Database         │
└─────────────────────────┘
```

---

## 🎯 Week 5 Learning Goals

This backend demonstrates:

* REST API development
* Full CRUD operations
* JWT authentication
* Protected API routes
* Role-based access control
* Review system
* API validation
* Automated backend testing
* Happy-path testing
* Failure-case testing
* File upload handling
* Security middleware
* Rate limiting
* CORS configuration
* MongoDB integration
* Production deployment
* Frontend/backend integration

---

## 👨‍💻 Author

**Abdul Khaliq**

GitHub:

```text
https://github.com/Abdulkhaliqdev2007
```

---

⭐ Feel free to explore the project and its connected frontend repository.
