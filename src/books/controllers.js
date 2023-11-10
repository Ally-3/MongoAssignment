// import/s:

const Book = require("./model")
const Data = require("../data/modelData")

// controller 1 - POST - adds a book to the database // WORKING
const addBook = async (req, res) => {
    try {
        console.log("Request Body:", req.body); // Log the request body for debugging
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        });

        const successResponse = {
            message: "Success, book has been added",
            newBook: newBook
        };
        res.status(201).json(successResponse);
    } catch (err) {
        console.error("Error adding book:", err);
        res.status(500).json({ error: "failed to add book" });
    }
};

// controller 2 - GET - gets all books from the database // WORKING
const getBooks = async (req, res) => {
    try {
        const getAllBooks = await Book.find({});

        const successResponse = {
            message: "Success, all books found",
            books: getAllBooks
        };
        res.status(200).json(successResponse);
    } catch (err) {
        console.error("Error getting books:", err);
        res.status(500).json({ error: "failed to find books"});
    }
};

// controller 3 - PUT - updates a book's author // WORKING
const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findOneAndUpdate(
            { title: req.body.title },
            { author: req.body.newAuthor }
        );

        const successResponse = {
            message: "Success, book updated",
            book: updatedBook
        };
        res.status(201).json(successResponse);
    } catch (err) {
        console.error("Error updating book:", err);
        res.status(500).json({ error: "failed to update book" });
    }
};

// controller 4 - DELETE - deletes a single book // WORKING
const deleteBook = async (req, res) => {
    try {
        await Book.deleteOne({ title: req.params.title });
        const successResponse = {
            message: "Success, book deleted"
        };
        res.status(200).json(successResponse);
    } catch (err) {
        console.error("Error deleting book:", err);
        res.status(500).json({ error: "failed to delete book" });
    }
};

// controller 5 - GET - gets books that have been turned into movies 
const getMovie = async (req, res) => {
    try {
        const getAllMovies = await Data.find({});

        const successResponse = {
            message: "Success, movies found",
            movies: getAllMovies
        };
        res.status(200).json(successResponse);
    } catch (err) {
        console.error("Error getting movies:", err);
        res.status(500).json({ error: "failed to find movies"});
    }
};
// exports:
module.exports = {
    addBook,
    getBooks,
    updateBook,
    deleteBook,
    getMovie
};