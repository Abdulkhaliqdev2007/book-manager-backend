const express = require('express');
const router = express.Router();


const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} = require('../controllers/bookController');


const { protect } = require('../middleware/auth');



// Public Routes
router.get('/', getBooks);
router.get('/:id', getBookById);



// Protected Routes
const upload = require('../middleware/upload');


// Protected Routes
router.post(
  '/',
  protect,
  upload.single('coverImage'),
  createBook
);
router.put(
  '/:id',
  protect,
  upload.single('coverImage'),
  updateBook
);
router.delete('/:id', protect, deleteBook);



module.exports = router;