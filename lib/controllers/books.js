const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const book = await Book.getBookById(req.params.id);
      const filteredBook = {
        title: book.title,
        released: book.released,
        authors: book.authors.map(({ id, name }) => ({
          id,
          name,
        })),
      };
      res.json(filteredBook);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const books = await Book.getAll();
    res.json(books);
  })
  .post('/', async (req, res, next) => {
    try {
      const newBook = await Book.insert(req.body);
      await Promise.all(
        req.body.authorId.map((id) => newBook.addAuthorById(id))
      );
      res.json(newBook);
    } catch (e) {
      next(e);
    }
  });
