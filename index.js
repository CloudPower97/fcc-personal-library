const express = require('express')
const helmet = require('helmet')
var cors = require('cors')
const db = require('./models').sequelize

db.authenticate()
  .then(() => {
    const { PORT } = process.env

    const booksRouter = require('./routes/books')

    const app = express()
      .use(
        helmet({
          noCache: true,
          hidePoweredBy: {
            setTo: 'PHP 4.2.0',
          },
        })
      )
      .use(cors())
      .use(express.json())
      .use(
        express.urlencoded({
          extended: false,
        })
      )

    app.use((req, res, next) => {
      req.db = db
      next()
    })

    app.use('/api/books', booksRouter)

    module.exports = app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
