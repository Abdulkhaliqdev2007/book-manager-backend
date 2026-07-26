require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const bookRoutes = require('./routes/bookRoutes');


const app = express();


// Connect MongoDB
connectDB();



// ============================================
// SECURITY MIDDLEWARE
// ============================================

app.use(helmet());


// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP
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

  // Local development
  'http://localhost:5173',

  // If using CRA
  'http://localhost:3000',

  // Add your Vercel frontend URL here
  // Example:
  // 'https://book-manager.vercel.app',

];


const corsOptions = {

  origin: (origin, callback) => {

    // Allow Postman/mobile/no origin requests
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

      books: '/api/books'

    }

  });

});



app.use(
  '/api/books',
  bookRoutes
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

  console.log(
    `🚀 Server running on port ${PORT}`
  );

});