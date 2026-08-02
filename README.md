# Book Manager - Backend

Backend API for the Book Manager application built with Node.js, Express, and MongoDB. It provides secure RESTful APIs for user authentication and book management.

## Features

* User Authentication

  * User registration
  * User login
  * JWT-based authentication
  * Protected API routes

* Book Management API

  * Create books
  * Get all books
  * Get a single book
  * Update books
  * Delete books

* Security & Performance

  * Helmet security middleware
  * CORS configuration
  * Rate limiting
  * Environment variable support
  * Centralized error handling

## Tech Stack

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

## Project Structure

```text
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── bookController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorHandler.js
│
├── models/
│   ├── User.js
│   └── Book.js
│
├── routes/
│   ├── authRoutes.js
│   └── bookRoutes.js
│
├── .env
├── server.js
└── package.json
```

## Installation

Clone the repository:

```bash
https://github.com/Abdulkhaliqdev2007/book-manager-backend.git
```

Navigate to the backend folder:

```bash
cd book-manager-backend
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key
```

Replace the values with your own configuration.

## Run the Server

Start development server:

```bash
npm run dev
```

The API will run on:

```text
http://localhost:5000
```

## API Endpoints

### Authentication

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | `/api/auth/signup` | Register new user |
| POST   | `/api/auth/login`  | Login user        |
| GET    | `/api/auth/me`     | Get current user  |

### Books

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/books`     | Get all books   |
| GET    | `/api/books/:id` | Get single book |
| POST   | `/api/books`     | Create a book   |
| PUT    | `/api/books/:id` | Update a book   |
| DELETE | `/api/books/:id` | Delete a book   |

## Authentication

Protected routes require a JWT token in the request header:

```text
Authorization: Bearer <token>
```
## Frontend Repository

Frontend application:

https://github.com/Abdulkhaliqdev2007/book-manager-frontend

## Deployment

The backend can be deployed using platforms like:

* Render
* Railway
* Vercel

Make sure to configure environment variables on the deployment platform.

## Future Improvements

* Add user-specific book collections
* Add book categories
* Add pagination
* Add image upload support
* Add automated API testing

## Author
 Hafiz Abdul Khaliq
 GitHub: Abdulkhaliqdev2007
