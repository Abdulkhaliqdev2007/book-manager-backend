const request = require('supertest');

jest.mock('../models/User', () => ({
  findOne: jest.fn(),
  create: jest.fn(),
}));

const User = require('../models/User');
const app = require('../server');

describe('Auth API', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('POST /api/auth/signup should reject missing fields', async () => {
    const response = await request(app)
      .post('/api/auth/signup')
      .send({
        email: 'test@example.com',
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Please provide all fields');
  });


  test('POST /api/auth/signup should reject an existing user', async () => {
    User.findOne.mockResolvedValue({
      _id: '123',
      email: 'existing@example.com',
    });

    const response = await request(app)
      .post('/api/auth/signup')
      .send({
        name: 'Test User',
        email: 'existing@example.com',
        password: 'password123',
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('User already exists');
  });


  test('POST /api/auth/login should reject missing credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe(
      'Please provide email and password'
    );
  });


  test('POST /api/auth/login should reject invalid credentials', async () => {
    User.findOne.mockReturnValue({
      select: jest.fn().mockResolvedValue(null),
    });

    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'wrong@example.com',
        password: 'wrongpassword',
      });

    expect(response.statusCode).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe(
      'Invalid email or password'
    );
  });

});