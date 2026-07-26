const errorHandler = (err, req, res, next) => {

  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  let message = err.message || 'Something went wrong';



  // MongoDB invalid ObjectId
  if (err.name === 'CastError') {

    statusCode = 404;
    message = 'Resource not found';

  }



  // MongoDB duplicate key error
  if (err.code === 11000) {

    statusCode = 400;
    message = 'Duplicate field value entered';

  }



  // Mongoose validation error
  if (err.name === 'ValidationError') {

    statusCode = 400;

    message = Object.values(err.errors)
      .map((error) => error.message)
      .join(', ');

  }



  // CORS error
  if (err.message === 'Not allowed by CORS') {

    statusCode = 403;
    message = 'CORS policy blocked this request';

  }



  res.status(statusCode).json({

    success: false,

    message,

    // Hide stack in production
    stack:
      process.env.NODE_ENV === 'production'
        ? null
        : err.stack,

  });

};


module.exports = errorHandler;