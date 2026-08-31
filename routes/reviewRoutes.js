const express = require('express');

const router = express.Router();

const {
  createReview,
  getReviews,
  getReviewsByBook,
  getReviewById,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');

const { protect } = require('../middleware/auth');

// Public routes
router.get('/', getReviews);
router.get('/book/:bookId', getReviewsByBook);
router.get('/:id', getReviewById);

// Protected routes
router.post('/', protect, createReview);
router.put('/:id', protect, updateReview);
router.delete('/:id', protect, deleteReview);

module.exports = router;