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

  it('should return a book with the release date and an array of authors with ids and names', async () => {
    const res = await request(app).get('/books/5');
    expect(res.body.length).toEqual(1);
    expect(res.body.book.title).toEqual('Chicka Chicka Boom Boom');
    expect(res.body.released).toEqual(2012);
    expect(res.body.authors.length).toEqual(2);
    expect(res.body).toHaveProperty('authors');
  });


  {
    title,
    released,
    authors: [{ id, name }], // author id and name
}
  afterAll(() => {
    pool.end();
  });
});
