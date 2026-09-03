const Book = require('../models/Book');

// @desc    Get all books for logged-in user
// @route   GET /api/books
// @access  Private
const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.user._id });

    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get single book
// @route   GET /api/books/:id
// @access  Private
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: 'Book not found',
      });
    }

    // User can only access their own book
    if (book.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: 'Not authorized to access this book',
      });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create book
// @route   POST /api/books
// @access  Private
const createBook = async (req, res) => {
  try {
    const {
      title,
      author,
      category,
      publishedDate,
      price,
      description,
    } = req.body;

    // Server-side validation
    if (!title) {
      return res.status(400).json({
        message: 'Title is required',
      });
    }

    if (!author) {
      return res.status(400).json({
        message: 'Author is required',
      });
    }

    if (!category) {
      return res.status(400).json({
        message: 'Category is required',
      });
    }

    if (!publishedDate) {
      return res.status(400).json({
        message: 'Published date is required',
      });
    }

    const book = await Book.create({
      title,
      author,
      category,
      publishedDate,
      price,
      description: description || '',
      coverImage: req.file ? req.file.path : '',
      user: req.user._id,
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update book
// @route   PUT /api/books/:id
// @access  Private
const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: 'Book not found',
      });
    }

    // User can only update their own book
    if (book.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: 'Not authorized to modify this book',
      });
    }

    const updateData = {
      ...req.body,
    };

    // Only update image if a new image was uploaded
    if (req.file) {
      updateData.coverImage = req.file.path;
    }

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: 'Book not found',
      });
    }

    // User can only delete their own book
    if (book.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: 'Not authorized to delete this book',
      });
    }

    await book.deleteOne();

    res.status(200).json({
      message: 'Book deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};