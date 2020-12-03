require('dotenv').config()
const express = require('express')
const app = express()

// import routes
const booksRoutes = require('./routes/booksRoutes')

// settings
app.set('port', process.env.PORT || 3000)

// middewares
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

// routes
app.use('/books', booksRoutes)

// running server
app.listen(app.get('port'), () => console.log('Server on port', app.get('port')))