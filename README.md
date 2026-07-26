# 📚 Book Manager Backend API
A RESTful backend API for the **Book Manager** application.  
This backend provides CRUD operations for managing books using **Node.js, Express.js, and MongoDB**.
## 🚀 Features
- ✅ Create a new book
- ✅ Get all books
- ✅ Get a single book by ID
- ✅ Update book details
- ✅ Delete a book
- ✅ MongoDB Atlas database integration
- ✅ Error handling middleware
- ✅ Environment variable configuration
---
## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **dotenv**
- **Nodemon**

---
## 📂 Project Structure

```
backend/
│
├── config/
│   └── db.js              # MongoDB connection
│
├── controllers/
│   └── bookController.js  # Book logic
│
├── models/
│   └── Book.js            # Book schema
│
├── routes/
│   └── bookRoutes.js      # API routes
│
├── middleware/
│   └── errorMiddleware.js # Error handling
│
├── .env                   # Environment variables
├── server.js              # Entry point
├── package.json
└── README.md
```
---

## ⚙️ Installation & Setup

### 1. Clone repository

```bash
git clone https://github.com/Abdulkhaliqdev2007/book-manager-backend.git
```
### 2. Go to project folder

```bash
cd book-manager-backend
```
### 3. Install dependencies

```bash
npm install
```
### 4. Create `.env` file
Create a `.env` file in the root folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
Replace `your_mongodb_connection_string` with your MongoDB Atlas URI.

---
## ▶️ Run the Server

### Development mode

```bash
npm run dev
```
### Normal mode

```bash
npm start
```
Server will run on:

```
http://localhost:5000
```
---

## 🔗 API Endpoints

### Get API Status

```
GET /
```
Response:

```json
{
  "message": "Welcome to the Book Manager API!"
}
```
---

### Books Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get single book |
| POST | `/api/books` | Create book |
| PUT | `/api/books/:id` | Update book |
| DELETE | `/api/books/:id` | Delete book |

---

## 📌 Example Book Object

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "year": 1988
}
```

---

## 🔒 Environment Variables

The following variables are required:

| Variable | Description |
|----------|-------------|
| PORT | Server port |
| MONGO_URI | MongoDB database connection |

---

## 🧪 Testing

You can test API endpoints using:

- Postman
- Thunder Client
- Frontend application

---

## 👨‍💻 Author

**Abdulkhaliq**

GitHub:
https://github.com/Abdulkhaliqdev2007

---

## 📄 License

This project is for learning and educational purposes.