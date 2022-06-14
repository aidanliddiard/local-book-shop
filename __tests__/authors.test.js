const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a list of authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(14);
    const marley = res.body.find((author) => author.id === 9);
    expect(marley).toHaveProperty('name', 'Cadella Marley');
    expect(marley).toHaveProperty('dob', '1967-08-23');
    expect(marley).toHaveProperty('pob', 'Kingston, Jamaica');
  });

  afterAll(() => {
    pool.end();
  });
});
