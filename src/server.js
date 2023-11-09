//hides info to keep confidential when running on github
require("dotenv").config()

//running connection
require("././db/connnection")

// Getting express package so we can use it in our project 
const express = require("express")  

// Setting up express libary so we can use it elsewhere in our code
const app = express() 

// tell server to send and receive as JSON
app.use(express.json()) 

const port = 5002

const Book = require("./books/model")
const bookRouter = require("./books/routes")

app.use(bookRouter);

// start our server and keep it running on port 5002
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})