const { Router } = require("express")

const bookRouter = Router()

const { addBook, getBooks, updateBook, deleteBook } = require("./controllers")

//1. POST - adds book to database
bookRouter.post("/addBook", addBook)

//2. GET - gets all books from the database
bookRouter.get("/getBooks", getBooks)

//3. PUT - updates a book's author
bookRouter.put("/updateBook", updateBook)

//4. DELETE - deletes a single book from the database
bookRouter.delete("/deleteBook", deleteBook)

//export
module.exports = bookRouter