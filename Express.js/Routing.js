// Routing => accessing the different webpages of a website
// Target :-
// "/" => Wecome to Home page
// "/about" => Wecome to About page
// "/contact" => Wecome to Contact page

const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my home page...");
})

app.get("/about", (req, res) => {
    // adding status code
    res.status(404).send("Welcome to my about page...");
})

app.get("/contact", (req, res) => {
    res.send("Welcome to my contact page...");
})

app.listen(port, () => console.log("Listening..."));