// npm i express ===> i ~ install

const express = require('express');
// creating an express application
const app = express();

app.get("/", (req, res) => { // "/" => home/root page (index.html)
 res.send("Hello World!!!");
});
app.get("/about", (req, res) => { // "/" => home/root page (index.html)
 res.send("Hello About!!!");
});

app.listen(8000, () => console.log("Listening..."));

// Methods (CRUD)
// 1) GET => read
// 2) POST => create
// 3) PUT => update
// 4) DELETE => delete