const express = require('express')
const router = express.Router()
const {
  postBook,
  getBooks,
  deleteBook,
  deleteBooks,
  getBook,
  postComment,
} = require('../controllers/books')

router.get('/', getBooks)

router.post('/', postBook)

router.get('/:bookId', getBook)

router.post('/:bookId', postComment)

router.delete('/:bookId', deleteBook)

router.delete('/', deleteBooks)

module.exports = router
