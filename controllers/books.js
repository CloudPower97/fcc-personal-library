exports.postBook = ({ body, db }, res) => {
  const Book = db.import('../models/book.js')

  Book.create(body)
    .then(book => {
      res.status(201).json(book)
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

exports.postComment = ({ params: { bookId: id }, body, db }, res) => {
  const Book = db.import('../models/book.js')
  const Comment = db.import('../models/comment.js')

  Book.findById(id, {
    include: [Comment],
  })
    .then(book => {
      if (!book) {
        res.sendStatus(404)
      } else {
        Comment.create(body)
          .then(comment => {
            book
              .addComment(comment)
              .then(book => {
                res.status(201).json(book)
              })
              .catch(err => {
                res.sendStatus(400).json(err)
              })
          })
          .catch(err => {
            res.status(400).json(err)
          })
      }
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

exports.getBooks = ({ db }, res) => {
  const Book = db.import('../models/book.js')
  const Comment = db.import('../models/comment.js')

  Book.findAll({
    attributes: { include: [[db.fn('count', db.col('Comments.BookId')), 'comment_count']] },
    include: [
      {
        model: Comment,
        attributes: [],
      },
    ],
    group: ['Book.id'],
  })
    .then(books => {
      res.json(books)
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

exports.getBook = ({ params: { bookId: id }, db }, res) => {
  const Book = db.import('../models/book.js')
  const Comment = db.import('../models/comment.js')

  Book.findByPk(id, {
    include: [Comment],
  })
    .then(book => {
      if (!book) {
        res.status(404).json({ message: 'No book exists' })
      } else {
        res.json(book)
      }
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

exports.deleteBooks = ({ db }, res) => {
  const Book = db.import('../models/book.js')

  Book.destroy({
    where: {},
  })
    .then(() => {
      res.status(200).json({
        message: 'Complete delete succesful',
      })
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

exports.deleteBook = ({ params: { bookId: id }, db }, res) => {
  const Book = db.import('../models/book.js')

  Book.destroy({
    where: {
      id,
    },
  })
    .then(() => {
      res.status(200).json({
        message: 'Delete succesful',
      })
    })
    .catch(err => {
      res.status(400).json(err)
    })
}
