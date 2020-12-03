const { Router } = require('express')
const router = Router()

 const { getAllBooks, getBook, createBook, deleteBook } = require('../controllers/booksController')

router.get('/' , getAllBooks)
router.get('/:id' , getBook)
router.post('/' , createBook)
router.delete('/:id' , deleteBook)

module.exports = router