const { Router } = require('express')
const router = Router()

 const { getAllBooks, getBook, createBook, deleteBook, updateBook, notFound } = require('../controllers/booksController')

router.get('/' , getAllBooks)
router.get('/:id' , getBook)
router.post('/' , createBook)
router.delete('/:id' , deleteBook)
router.put('/:id', updateBook)

module.exports = router