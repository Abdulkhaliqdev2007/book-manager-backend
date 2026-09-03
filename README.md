# 📚 Book Manager – Week 6 Backend

A full-stack Book Manager backend built with **Node.js, Express.js, MongoDB, Mongoose, JWT, Multer, Jest, and Supertest**.

The backend provides secure authentication, role-based authorization, user-specific book management, reviews, dashboard statistics, image uploads, validation, security middleware, automated testing, and production deployment.

---

## ✨ Features

### 🔐 Authentication & Authorization

- User signup and login
- JWT-based authentication
- Protected API routes
- Current-user endpoint
- Role-based access control
- Admin-only book management
- User-specific book data
- Secure password hashing with bcryptjs

### 📚 Book Management

Full CRUD operations for books:

- Create books
- Read books
- Update books
- Delete books
- Category validation
- Price validation
- Published-date validation
- User ownership

Each authenticated user can access only their own books.

### ⭐ Review System

Reviews provide a second related resource connected to books.

- Create reviews
- Read reviews
- Update reviews
- Delete reviews
- Review ownership
- Admin permissions
- Book-based review retrieval

### 📊 Dashboard

The backend provides dashboard statistics for the authenticated user:

- Total books
- Total collection value
- Books by category
- Books over time
- Average price by category

Endpoint:

```text
GET /api/dashboard/stats
````

### 🖼️ File Uploads

* Image uploads using Multer
* Local upload storage
* Uploaded image serving
* Optional book cover images
* Cross-origin access for uploaded resources

### 🛡️ Security

* Helmet
* CORS
* Express rate limiting
* JWT authentication
* Protected routes
* Request body size limits
* Centralized error handling
* Server-side validation
* Password hashing

### 🧪 Testing

Backend testing is implemented with:

* Jest
* Supertest

The project includes authentication, book, review, authorization, and API behavior tests.

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

### Database

* MongoDB Atlas

### Deployment

* Render

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
│   ├── reviewController.js
│   └── dashboardController.js
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
│   ├── reviewRoutes.js
│   └── dashboardRoutes.js
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

### 6. Start the production server

```bash
npm start
```

---

## 🧪 Running Tests

Run the complete backend test suite with:

```bash
npm test
```

The test suite covers:

* Authentication
* Protected routes
* Book CRUD behavior
* Review functionality
* Authorization
* Invalid requests
* API responses
* Failure cases

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

Book creation, updating, and deletion require authentication and appropriate admin permissions.

The `GET /api/books` endpoint returns books belonging to the authenticated user.

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

## 🔑 Authentication Flow

```text
User
  │
  ▼
Signup / Login
  │
  ▼
JWT Token
  │
  ▼
Frontend stores token
  │
  ▼
Authorization: Bearer <token>
  │
  ▼
Auth Middleware
  │
  ▼
Authenticated User
  │
  ├── User-specific books
  ├── Reviews
  └── Dashboard statistics
```

---

## 👤 Role-Based Authorization

The application uses roles to control access to protected operations.

```text
Authenticated User
        │
        ▼
   Role Check
        │
   ┌────┴────┐
   ▼         ▼
 Admin      User
   │
   ├── Create books
   ├── Update books
   └── Delete books
```

Protected resources use JWT authentication and authorization middleware.

---

## 🖼️ Image Upload Flow

```text
React Frontend
      │
      ▼
   FormData
      │
      ▼
POST /api/books
      │
      ▼
    Multer
      │
      ▼
   uploads/
      │
      ▼
 MongoDB stores file path
      │
      ▼
Frontend displays cover image
```

Uploaded images are served through:

```text
/uploads/<filename>
```

---

## 🏗️ Architecture

```text
┌──────────────────────────────┐
│       React Frontend         │
│        Vite + Axios          │
└──────────────┬───────────────┘
               │
               │ REST API
               ▼
┌──────────────────────────────┐
│      Node.js + Express       │
│                              │
│ Controllers                  │
│ Routes                       │
│ Middleware                   │
│ Authentication               │
│ Authorization                │
└──────────────┬───────────────┘
               │
               │ Mongoose
               ▼
┌──────────────────────────────┐
│        MongoDB Atlas         │
│                              │
│ Users                        │
│ Books                        │
│ Reviews                      │
└──────────────────────────────┘
```

---

## 🌐 Deployment

### Backend

The backend is deployed on Render.

Production API:

```text
https://book-manager-week5-2-backend.onrender.com
```

### Database

MongoDB Atlas is used as the production database.

### Frontend

The React frontend communicates with the deployed backend through the configured API URL.

---

## 🔒 Data Ownership

Book data is associated with the authenticated user's MongoDB ObjectId.

This prevents one user from seeing another user's books.

Example:

```text
Logged-in User
      │
      ▼
req.user._id
      │
      ▼
Book.find({ user: req.user._id })
      │
      ▼
Only that user's books
```

Dashboard statistics use the same ownership rule.

---

## 🎯 Week 6 Requirements Covered

This project demonstrates:

* Full-stack application architecture
* Multiple frontend views
* REST API development
* CRUD operations
* Two related resources
* MongoDB persistence
* JWT authentication
* Protected routes
* Role-based authorization
* User-specific data
* Client and server validation
* Loading and error handling
* Responsive frontend integration
* File uploads
* Dashboard statistics
* Automated testing
* Production deployment
* GitHub version control

---

## 🚀 Stretch Features

Implemented stretch features include:

* 📊 Dashboard statistics
* 🖼️ File/image uploads
* 🔎 Search/filter functionality
* ⭐ Review system

---

## 👨‍💻 Author

**Abdul Khaliq**

GitHub:

```text
https://github.com/Abdulkhaliqdev2007
```

---

## 📌 Project Repository

Backend:

```text
https://github.com/Abdulkhaliqdev2007/book-manager-week5-2-backend.git
```

Frontend:

```text
https://github.com/Abdulkhaliqdev2007/book-manager-frontend.git
```

---

## 📄 License

This project was created as a full-stack development capstone project.

