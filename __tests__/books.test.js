const request = require('supertest');

jest.mock('../models/Book', () => ({
  find: jest.fn(),
  findById: jest.fn(),
}));

const Book = require('../models/Book');
const app = require('../server');

jest.mock('../middleware/auth', () => ({
  protect: (req, res, next) => {
    req.user = {
      _id: '507f1f77bcf86cd799439012',
      role: 'user',
    };
    next();
  },
}));

describe('Book API', () => {

  test('GET /api/books should return books successfully', async () => {
    const mockBooks = [
      {
        _id: '1',
        title: 'Clean Code',
        author: 'Robert C. Martin',
        category: 'Programming',
        price: 30,
        user: '507f1f77bcf86cd799439012',
      },
      {
        _id: '2',
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        category: 'Programming',
        price: 35,
        user: '507f1f77bcf86cd799439012',
      },
    ];

    Book.find.mockResolvedValue(mockBooks);

    const response = await request(app)
      .get('/api/books');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0].title).toBe('Clean Code');
    expect(response.body[1].title).toBe('The Pragmatic Programmer');
  });


  test('GET /api/books/:id should return a book successfully', async () => {
    const mockBook = {
      _id: '507f1f77bcf86cd799439011',
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Programming',
      price: 30,
      user: '507f1f77bcf86cd799439012',
    };

    Book.findById.mockResolvedValue(mockBook);

    const response = await request(app)
      .get('/api/books/507f1f77bcf86cd799439011');

    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe('Clean Code');
    expect(response.body.author).toBe('Robert C. Martin');
  });


  test('GET /api/books/:id should return 404 when book does not exist', async () => {
    Book.findById.mockResolvedValue(null);

    const response = await request(app)
      .get('/api/books/507f1f77bcf86cd799439011');

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Book not found');
  });

});

