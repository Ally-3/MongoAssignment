const { Router } = require("express")

const bookData = Router()

const { getMovie } = require("../books/controllers")

//5. GET - gets books that have been turned into movies from the database
bookData.get("/getMovie", getMovie)

//export
module.exports = bookData