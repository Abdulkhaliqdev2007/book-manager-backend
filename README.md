# 📚 Book Manager — Week 3 Backend

Backend API for the Book Manager application built with **Node.js, Express.js, and MongoDB**.

This backend provides authentication and RESTful APIs for managing books and works with the Week 3 React frontend.

## ✨ Features

### 🔐 Authentication

* User registration
* User login
* JWT-based authentication
* Protected API routes
* Password hashing with bcrypt

### 📚 Book Management API

* Create books
* Get all books
* Get a single book
* Update books
* Delete books
* Book cover image upload support
* User-specific book management

### 🛡️ Security & Performance

* Helmet security middleware
* CORS configuration
* Rate limiting
* Environment variable support
* Centralized error handling
* Request validation

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt
* dotenv
* CORS
* Helmet
* Express Rate Limit
* Multer

## 📁 Project Structure

```text
backend/
├── api/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── bookController.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorHandler.js
├── models/
│   ├── User.js
│   └── Book.js
├── routes/
│   ├── authRoutes.js
│   └── bookRoutes.js
├── uploads/
├── .env.example
├── server.js
└── package.json
```

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/Abdulkhaliqdev2007/book-manager-week3-backend.git
```

Navigate to the project:

```bash
cd book-manager-week3-backend
```

Install dependencies:

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Do not commit `.env` or any real credentials to GitHub.

## ▶️ Run the Server

Start the development server:

```bash
npm run dev
```

The API will normally run at:

```text
http://localhost:5000
```

## 🔗 Frontend Repository

Week 3 frontend:

https://github.com/Abdulkhaliqdev2007/book-manager-week3-frontend

## 📡 API Endpoints

### Authentication

| Method | Endpoint           | Description                    |
| ------ | ------------------ | ------------------------------ |
| POST   | `/api/auth/signup` | Register a new user            |
| POST   | `/api/auth/login`  | Login user                     |
| GET    | `/api/auth/me`     | Get current authenticated user |

### Books

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/books`     | Get all books     |
| GET    | `/api/books/:id` | Get a single book |
| POST   | `/api/books`     | Create a book     |
| PUT    | `/api/books/:id` | Update a book     |
| DELETE | `/api/books/:id` | Delete a book     |

## 🔑 Authentication

Protected endpoints require a JWT token in the request header:

```text
Authorization: Bearer <token>
```

## 🎯 Week 3 Integration

This backend is used by the Week 3 React frontend, which introduces:

* React Context API
* Shared global state
* Centralized data-fetching patterns
* Loading states
* Empty states
* Improved error handling
* Search and sort functionality

## 👨‍💻 Author

**Hafiz Abdul Khaliq**

GitHub: https://github.com/Abdulkhaliqdev2007
