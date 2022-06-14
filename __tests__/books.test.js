const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a list of books with publication year', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(16);
    const wild = res.body.find((book) => book.id === '1');
    expect(wild).toHaveProperty('title', 'Where the Wild Things Are');
    expect(wild).toHaveProperty('released', 1963);
  });

  afterAll(() => {
    pool.end();
  });
});
