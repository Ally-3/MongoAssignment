require("dotenv").config();
require("././db/connection");

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend/public")));

const bookRouter = require("./books/routes");
const bookData = require("./data/dataRoutes");

app.use(bookRouter);
app.use(bookData);
app.use(cors());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// start our server and keep it running on port 5002
const port = process.env.PORT || 5002;

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})