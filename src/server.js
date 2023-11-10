//hides info to keep confidential when running on github
require("dotenv").config()

//running connection
require("././db/connnection")

// Getting express package so we can use it in our project 
const express = require("express")  
const cors = require('cors');
const path = require('path');
// Setting up express libary so we can use it elsewhere in our code
const app = express() 

// tell server to send and receive as JSON
app.use(express.json()) 

// Serve static files from the built React app
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Handle API routes here before the React app is served
// ...

// Serve the React built app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});


// include routes
const bookRouter = require("./books/routes")
const bookData = require("./data/dataRoutes")

// use routes
app.use(bookRouter);
app.use(bookData);
app.use(cors());

// start our server and keep it running on port 5002
const port = 5002

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})