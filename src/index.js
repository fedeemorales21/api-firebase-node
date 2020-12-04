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

// handle 404
app.use( (req, res, next) => {
    res.json({ success: false, msg: 'ERROR 404' }).status(404)
})

// running server
app.listen(app.get('port'), () => console.log('Server on port', app.get('port')))