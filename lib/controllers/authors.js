const { Router } = require('express');
const Author = require('../models/Author');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const author = await Author.getAuthorById(req.params.id);
      res.json(author);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const authors = await Author.getAll();
    res.json(authors);
  })
  .post('/', async (req, res, next) => {
    try {
      const author = await Author.insert(req.body);
      if (req.body.bookId) {
        await Promise.all(req.body.bookId.map((id) => author.addBookById(id)));
      }
      res.json(author);
    } catch (e) {
      next(e);
    }
  });
