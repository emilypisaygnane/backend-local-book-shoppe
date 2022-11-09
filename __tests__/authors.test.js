const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('author routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/authors should return list of all authors in shoppe', async () => {
    const res = await request(app).get('/authors');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(6);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      first_name: expect.any(String),
      last_name: expect.any(String),
    });
  });

  it('/authors/:id should return author detail and their books', async () => {
    const res = await request(app).get('/authors/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      first_name: expect.any(String),
      last_name: expect.any(String),
      total_books: expect.any(String),
      books: [
        {
          id: expect.any(String),
          title: expect.any(String),
          genre: expect.any(String),
        },
      ],
    });
  });

  afterAll(() => {
    pool.end();
  });
});
