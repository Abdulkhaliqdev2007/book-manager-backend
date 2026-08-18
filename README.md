# 📚 Book Manager – Backend

A RESTful backend API for the Book Manager application, built with **Node.js, Express, MongoDB, and Mongoose**. It provides authentication, protected book management endpoints, image uploads, validation, security middleware, and error handling.

## ✨ Features

* 🔐 User authentication with JWT
* 👤 User signup and login
* 📚 Full CRUD operations for books
* 🖼️ Book cover image uploads using Multer
* 💾 Local image storage in the `uploads` directory
* ✅ Request and server-side validation
* 🔒 Protected book creation, update, and delete routes
* 🌐 CORS configuration
* 🛡️ Helmet security middleware
* 🚦 Rate limiting
* ⚠️ Centralized error handling
* 📅 Book published date support
* 💵 Book price support
* 🗂️ Book categories

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Multer
* dotenv
* CORS
* Helmet
* express-rate-limit
* Nodemon

## 📁 Project Structure

```text
backend/
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── bookController.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   └── upload.js
│
├── models/
│   ├── User.js
│   └── Book.js
│
├── routes/
│   ├── authRoutes.js
│   └── bookRoutes.js
│
├── services/
│   └── ...
│
├── uploads/
│
├── .env
├── server.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Abdulkhaliqdev2007/book-manager-backend.git
```

### 2. Open the project

```bash
cd book-manager-backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create an environment file

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Do not commit your `.env` file to GitHub.

### 5. Start the development server

```bash
npm run dev
```

The API will usually run at:

```text
http://localhost:5000
```

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

### Access

Book creation, updating, and deletion require authentication.

## 🖼️ Image Upload

Book cover images are uploaded using **Multer** and stored locally in the backend's `uploads` directory.

### Upload flow

```text
Frontend
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
Frontend renders book cover
```

The uploaded image path is stored with the book record and served through the backend's static uploads route.

## 🔐 Authentication

The backend uses **JSON Web Tokens (JWT)** for authentication.

Authenticated requests include the token so protected routes can verify the current user.

Protected operations include:

* Creating books
* Updating books
* Deleting books

## 🛡️ Security

The backend includes:

* Helmet for HTTP security headers
* CORS configuration
* Express rate limiting
* Environment variables for secrets
* Authentication middleware
* Server-side request validation

## 🗄️ Database

The application uses **MongoDB** with **Mongoose** for database operations.

Book records can contain:

```text
title
author
category
publishedDate
price
description
coverImage
user
```

## 🌐 Frontend

This backend is designed to work with the Book Manager React frontend.

Frontend repository:

```text
https://github.com/Abdulkhaliqdev2007/book-manager-frontend
```

## 🧪 Development

Start the backend with:

```bash
npm run dev
```

Nodemon automatically restarts the server when source files change.

## 👨‍💻 Author

**Abdul Khaliq**

GitHub:

```text
https://github.com/Abdulkhaliqdev2007
```

---

⭐ Feel free to explore the project and the connected frontend repository.
