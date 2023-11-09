// importing mongoose library
const mongoose = require('mongoose')

// defining mongoose schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
})

//creates a mongoose model:
const Book = mongoose.model(`Book`, bookSchema)

//exporting the Book model
module.exports = Book