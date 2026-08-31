const Review = require('../models/Review');
const Book = require('../models/Book');

// @desc    Create a review
// @route   POST /api/reviews
// @access  Private
const createReview = async (req, res) => {
  try {
    const { book, rating, comment } = req.body;

    if (!book || rating === undefined || !comment) {
      return res.status(400).json({
        success: false,
        message: 'Book, rating and comment are required',
      });
    }

    // Check if book exists
    const existingBook = await Book.findById(book);

    if (!existingBook) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }

    // Prevent duplicate review by the same user
    const existingReview = await Review.findOne({
      book,
      user: req.user._id,
    });

    if (existingReview) {
      return res.status(400).json({
        success: false,
        message: 'You have already reviewed this book',
      });
    }

    const review = await Review.create({
      book,
      user: req.user._id,
      rating,
      comment,
    });

    const populatedReview = await Review.findById(review._id)
      .populate('user', 'name email')
      .populate('book', 'title author coverImage');

    res.status(201).json({
      success: true,
      data: populatedReview,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


// @desc    Get all reviews
// @route   GET /api/reviews
// @access  Public
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate('user', 'name email')
      .populate('book', 'title author coverImage')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


// @desc    Get reviews for a specific book
// @route   GET /api/reviews/book/:bookId
// @access  Public
const getReviewsByBook = async (req, res) => {
  try {
    const reviews = await Review.find({
      book: req.params.bookId,
    })
      .populate('user', 'name email')
      .populate('book', 'title author coverImage')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


// @desc    Get single review
// @route   GET /api/reviews/:id
// @access  Public
const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate('user', 'name email')
      .populate('book', 'title author coverImage');

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Review not found',
      });
    }

    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


// @desc    Update a review
// @route   PUT /api/reviews/:id
// @access  Private
const updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Review not found',
      });
    }

    // Only owner or admin can update
    const isOwner = review.user.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'You can only update your own reviews',
      });
    }

    const { rating, comment } = req.body;

    if (rating !== undefined) {
      review.rating = rating;
    }

    if (comment !== undefined) {
      review.comment = comment;
    }

    const updatedReview = await review.save();

    const populatedReview = await Review.findById(updatedReview._id)
      .populate('user', 'name email')
      .populate('book', 'title author coverImage');

    res.status(200).json({
      success: true,
      data: populatedReview,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


// @desc    Delete a review
// @route   DELETE /api/reviews/:id
// @access  Private
const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Review not found',
      });
    }

    // Only owner or admin can delete
    const isOwner = review.user.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'You can only delete your own reviews',
      });
    }

    await review.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Review deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createReview,
  getReviews,
  getReviewsByBook,
  getReviewById,
  updateReview,
  deleteReview,
};