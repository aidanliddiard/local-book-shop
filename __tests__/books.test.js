const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/books should return a list of books with publication year', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(16);
    const wild = res.body.find((book) => book.id === '1');
    expect(wild).toHaveProperty('title', 'Where the Wild Things Are');
    expect(wild).toHaveProperty('released', 1963);
  });

  it('/books/:id should return a book with the release date and an array of authors with ids and names', async () => {
    const res = await request(app).get('/books/5');
    expect(res.body.title).toEqual('Chicka Chicka Boom Boom');
    expect(res.body.released).toEqual(2012);
    expect(res.body.authors.length).toEqual(2);
    expect(res.body).toHaveProperty('authors');
    expect(res.body.authors[0].name).toEqual('Bill Martin, Jr.');
  });
  it('/books should add a book to the list of books', async () => {
    const res = await request(app)
      .post('/books')
      .send({
        title: 'If You Give a Pig a Pancake',
        released: 1998,
        authorId: [1],
      });
    expect(res.status).toEqual(200);
    expect(res.body.title).toEqual('If You Give a Pig a Pancake');

    const { body } = await request(app).get(`/books/${res.body.id}`);
    expect(body.authors[0].name).toEqual('Laura Numeroff');
  });

  afterAll(() => {
    pool.end();
  });
});
