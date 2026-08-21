# 📚 Book Manager — Week 5

A full-stack Book Manager application built with React, Context API, Tailwind CSS, Node.js, Express, and MongoDB.

This Week 5 version focuses on automated testing, frontend component testing, backend API testing, end-to-end testing, and production build verification.

## ✨ Features

### Frontend

- 🔐 User authentication with Login and Signup
- 📚 Book management with CRUD operations
- 🔍 Search books by title or author
- ↕️ Sort books by title and publication date
- 🖼️ Book cover image upload
- ✅ Form validation
- ⏳ Loading states
- ❌ Error handling
- 📊 Dashboard with data visualization
- 🌐 React Context API for global book state
- 📱 Responsive UI

### Backend

- 🔐 JWT authentication
- 👤 User registration and login
- 📚 Book CRUD API
- 🖼️ Image upload using Multer
- 📊 Dashboard statistics API
- 🛡️ Protected routes
- 🔒 Helmet security middleware
- 🚦 Rate limiting
- 🌐 CORS configuration
- 🗄️ MongoDB with Mongoose

## 🧪 Automated Testing

The project includes frontend component tests, backend API tests, and end-to-end tests.

### Frontend Tests

Frontend component tests are written using Vitest and React Testing Library.

Run the frontend tests:

```bash
npm run test:run
Current result:

Test Files: 2 passed
Tests: 5 passed

The frontend tests cover:

BookCard component rendering
BookCard interactions
BookForm validation
BookForm submission
Backend Tests

Backend API tests are written using Jest and Supertest.

Run the backend tests:

npm test

Current result:

Test Suites: 3 passed
Tests: 12 passed

The backend tests cover:

API information endpoint
Invalid routes
Authentication validation
Signup validation
Existing user handling
Login validation
Invalid login credentials
Book listing
Book retrieval
Book not found cases
Unauthorized book creation
Unauthorized book deletion
End-to-End Tests

End-to-end tests are written using Playwright.

Run the E2E tests:

npx playwright test

Current result:

3 passed

The E2E tests cover:

Login page rendering
Login form validation
Signup page rendering
🏗️ Production Build

Verify the production build:

npm run build

The production build completes successfully.

✅ Complete Frontend Verification

Run all frontend checks:

npm run test:run
npx playwright test
npm run build
✅ Complete Backend Verification

Run:

npm test

All tests should pass successfully before submitting the project.

🛠️ Tech Stack
Frontend
React
Vite
React Context API
React Router DOM
Tailwind CSS
Axios
Lucide React
Vitest
React Testing Library
Playwright
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
Multer
Jest
Supertest
📁 Project Structure
frontend/
├── src/
│   ├── components/
│   │   ├── BookCard.jsx
│   │   ├── BookForm.jsx
│   │   └── ...
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   └── App.jsx
│
├── e2e/
│   └── book-manager.spec.js
│
├── playwright.config.js
├── vite.config.js
└── package.json
🚀 Installation

Clone the frontend repository:

git clone https://github.com/Abdulkhaliqdev2007/book-manager-week5-frontend.git

Navigate to the project:

cd book-manager-week5-frontend

Install dependencies:

npm install
▶️ Run the Application

Start the frontend development server:

npm run dev

The frontend normally runs at:

http://localhost:5173

Make sure the backend server is also running on:

http://localhost:5000
🔗 Backend Repository

Backend API repository:

https://github.com/Abdulkhaliqdev2007/book-manager-week5-backend

🎯 Week 5 Learning Goals

This project demonstrates:

Automated frontend testing
Component testing with Vitest
Form validation testing
Backend API testing with Jest
API testing with Supertest
Happy-path and failure-case testing
End-to-end testing with Playwright
Production build verification
Full-stack application testing workflow
👨‍💻 Author

Hafiz Abdul Khaliq

GitHub:

https://github.com/Abdulkhaliqdev2007