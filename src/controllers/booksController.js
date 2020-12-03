const admin = require('firebase-admin')
const serviceAccount = require('../../credetialsgoogle.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_URI 
})


const db = admin.database()

const bookConstroller = {}

bookConstroller.getAllBooks = ( req, res ) => {
    db.ref('books').once('value', ss => {
        const books = ss.val()
        res.json({success: true, books })
    })
}


bookConstroller.getBook = ( req, res ) => {
    db.ref('books').orderByChild(req.params.id).limitToLast(1).once('value', ss => {
        const book = ss.val()
        res.json({success: true, book })
    })
}


bookConstroller.deleteBook = ( req, res ) => {
    db.ref(`books/${req.params.id}`).remove()
    res.json({success: true, msg: 'Book Deleted'})
}


bookConstroller.createBook = ( req, res ) => {
    const { name, author, isbn } = req.body
    if (!name || !author || !isbn) {
        res.json({success: false, msg: 'Complete all fields'})
    }
    const newBook = { name, author, isbn}
    db.ref('books').push(newBook)    
    res.json({success: true, msg: 'Book Added'})
}

module.exports = bookConstroller