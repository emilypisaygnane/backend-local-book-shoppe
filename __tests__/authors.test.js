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
    expect(res.body.length).toBe(5);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });

  it('GET /authors/:id should return author detail and their books', async () => {
    const res = await request(app).get('/authors/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      dob: expect.any(String),
      pob: expect.any(String),
      books: expect.any(Array),
    });
    expect(res.body.books[0]).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      released: expect.any(Number),
    });
  });

  afterAll(() => {
    pool.end();
  });
});
