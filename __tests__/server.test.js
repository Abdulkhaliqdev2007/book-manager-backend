const request = require('supertest');
const app = require('../server');

describe('Server API', () => {
  test('GET / should return API information', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('version');
    expect(response.body.endpoints).toHaveProperty('books');
    expect(response.body.endpoints).toHaveProperty('auth');
  });
});
test('GET /invalid-route should return 404', async () => {
  const response = await request(app).get('/invalid-route');

  expect(response.statusCode).toBe(404);
  expect(response.body.success).toBe(false);
  expect(response.body.message).toBe('Route not found');
});
test('POST /api/books should reject unauthorized requests', async () => {
  const response = await request(app)
    .post('/api/books')
    .send({
      title: 'Test Book',
      author: 'Test Author',
      price: 10
    });

  expect(response.statusCode).toBe(401);
});
test('GET /api/books/:id should reject an invalid book ID', async () => {
  const response = await request(app)
    .get('/api/books/invalid-id');

  expect(response.statusCode).toBeGreaterThanOrEqual(400);
  expect(response.statusCode).toBeLessThan(500);
});
test('DELETE /api/books/:id should reject unauthorized requests', async () => {
  const response = await request(app)
    .delete('/api/books/507f1f77bcf86cd799439011');

  expect(response.statusCode).toBe(401);
});