const request = require('supertest');

jest.mock('../models/Review', () => ({
  find: jest.fn(),
  findById: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
}));

jest.mock('../models/Book', () => ({
  findById: jest.fn(),
}));

jest.mock('../middleware/auth', () => ({
  protect: (req, res, next) => {
    req.user = {
      _id: 'user123',
      role: 'user',
    };
    next();
  },
  adminOnly: (req, res, next) => next(),
}));

const Review = require('../models/Review');
const Book = require('../models/Book');

const app = require('../server');

describe('Review API', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });


  test('GET /api/reviews should return reviews successfully', async () => {
    const mockReviews = [
      {
        _id: 'review1',
        rating: 5,
        comment: 'Excellent book!',
      },
      {
        _id: 'review2',
        rating: 4,
        comment: 'Very useful.',
      },
    ];

    Review.find.mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          sort: jest.fn().mockResolvedValue(mockReviews),
        }),
      }),
    });

    const response = await request(app)
      .get('/api/reviews');

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveLength(2);
    expect(response.body.data[0].rating).toBe(5);
  });


  test('POST /api/reviews should reject missing fields', async () => {
    const response = await request(app)
      .post('/api/reviews')
      .send({
        rating: 5,
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe(
      'Book, rating and comment are required'
    );
  });


  test('POST /api/reviews should reject a non-existent book', async () => {
    Book.findById.mockResolvedValue(null);

    const response = await request(app)
      .post('/api/reviews')
      .send({
        book: '507f1f77bcf86cd799439011',
        rating: 5,
        comment: 'Great book!',
      });

    expect(response.statusCode).toBe(404);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Book not found');
  });


  test('POST /api/reviews should reject duplicate review', async () => {
    Book.findById.mockResolvedValue({
      _id: 'book123',
    });

    Review.findOne.mockResolvedValue({
      _id: 'review123',
      book: 'book123',
      user: 'user123',
    });

    const response = await request(app)
      .post('/api/reviews')
      .send({
        book: 'book123',
        rating: 5,
        comment: 'Great book!',
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe(
      'You have already reviewed this book'
    );
  });


  test('GET /api/reviews/:id should return 404 when review does not exist', async () => {
    Review.findById.mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockResolvedValue(null),
      }),
    });

    const response = await request(app)
      .get('/api/reviews/507f1f77bcf86cd799439011');

    expect(response.statusCode).toBe(404);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Review not found');
  });


  test('POST /api/reviews should create a review successfully', async () => {
    Book.findById.mockResolvedValue({
      _id: 'book123',
    });

    Review.findOne.mockResolvedValue(null);

    Review.create.mockResolvedValue({
      _id: 'review123',
    });

    Review.findById.mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockResolvedValue({
          _id: 'review123',
          rating: 5,
          comment: 'Excellent book!',
        }),
      }),
    });

    const response = await request(app)
      .post('/api/reviews')
      .send({
        book: 'book123',
        rating: 5,
        comment: 'Excellent book!',
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.rating).toBe(5);

    expect(Review.create).toHaveBeenCalledWith({
      book: 'book123',
      user: 'user123',
      rating: 5,
      comment: 'Excellent book!',
    });
  });

});