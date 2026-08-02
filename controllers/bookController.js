const Book = require('../models/Book');


// @desc    Get all books
// @route   GET /api/books
// @access  Public
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    
    res.status(200).json(books);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


// @desc    Get single book
// @route   GET /api/books/:id
// @access  Public
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found"
      });
    }

    res.status(200).json(book);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


// @desc    Create book
// @route   POST /api/books
// @access  Private
const createBook = async (req, res) => {
  try {

    const book = await Book.create({
      ...req.body,
      user: req.user._id
    });

    res.status(201).json(book);

  } catch (error) {
    res.status(500).json({
      message: error.message
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
        message: "Book not found"
      });
    }


    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );


    res.status(200).json(updatedBook);


  } catch (error) {

    res.status(500).json({
      message: error.message
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
        message: "Book not found"
      });
    }


    await book.deleteOne();


    res.status(200).json({
      message: "Book deleted successfully"
    });


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};



module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};