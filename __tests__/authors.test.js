const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/authors should return a list of authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(15);
    const marley = res.body.find((author) => author.id === '9');
    expect(marley).toHaveProperty('name', 'Cedella Marley');
  });

  it('/authors/id should return the name, dob, pob, of an author and their books (id, title, and release date)', async () => {
    const res = await request(app).get('/authors/1');
    expect(res.body.name).toEqual('Laura Numeroff');
    expect(res.body.dob).toEqual('1953-07-14');
    expect(res.body.pob).toEqual('Brooklyn, New York');
    expect(res.body.books.length).toEqual(3);
  });

  it('/authors should create a new author', async () => {
    const resp = await request(app)
      .post('/authors')
      .send({ name: 'Marcus Pfister' });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Marcus Pfister');
  });

  it('/authors should create a new author with their associated book', async () => {
    const resp = await request(app)
      .post('/authors')
      .send({ name: 'Anonymous', bookId: [4] });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Anonymous');
    const { body } = await request(app).get(`/authors/${resp.body.id}`);

    expect(body.books[0].title).toEqual('Dream Big, Little One');
  });

  afterAll(() => {
    pool.end();
  });
});
