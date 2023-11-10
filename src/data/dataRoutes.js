const { Router } = require("express")

const bookData = Router()

const { addBook, getBooks, updateBook, deleteBook } = require("./controllers")

//5.

//export
module.exports = bookData