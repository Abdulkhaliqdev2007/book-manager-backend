require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes'); // ✅ Added


const app = express();


// Connect MongoDB
connectDB().catch((err) => {
  console.error("MongoDB connection failed:", err.message);
});


// ============================================
// SECURITY MIDDLEWARE
// ============================================

app.use(helmet());


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: 'Too many requests, please try again later.',
  },
});

app.use(limiter);



// ============================================
// CORS CONFIGURATION
// ============================================

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',

  // Add Vercel frontend URL later
];


const corsOptions = {

  origin: (origin, callback) => {

    if (!origin) {
      return callback(null, true);
    }


    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }


    return callback(
      new Error('Not allowed by CORS')
    );

  },

  credentials: true,

  methods: [
    'GET',
    'POST',
    'PUT',
    'DELETE',
    'OPTIONS'
  ],

  allowedHeaders: [
    'Content-Type',
    'Authorization'
  ]

};


app.use(cors(corsOptions));



// ============================================
// BODY PARSER
// ============================================

app.use(
  express.json({
    limit: '10mb'
  })
);


app.use(
  express.urlencoded({
    extended: true,
    limit: '10mb'
  })
);



// ============================================
// ROUTES
// ============================================


app.get('/', (req, res) => {

  res.json({

    message: 'Welcome to the Book Manager API! 📚',

    version: '1.0.0',

    endpoints: {

      books: '/api/books',
      auth: '/api/auth'   // ✅ Added

    }

  });

});



// Books Routes
app.use(
  '/api/books',
  bookRoutes
);


// Auth Routes ✅ Added
app.use(
  '/api/auth',
  authRoutes
);





// ============================================
// 404 HANDLER
// ============================================

app.use((req, res) => {

  res.status(404).json({

    success: false,

    message: 'Route not found'

  });

});




// ============================================
// GLOBAL ERROR HANDLER
// ============================================

app.use(errorHandler);



// ============================================
// SERVER START
// ============================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});