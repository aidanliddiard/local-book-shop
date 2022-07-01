const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const book = await Book.getBookById(req.params.id);
      res.json(book);
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
      res.json(newBook);
    } catch (e) {
      next(e);
    }
  });
