// Inserting HTML & JSON data in express.js
const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

// for small html code
app.get("/", (req, res) => {
    res.write("<h1>HEADING</h1>");
    res.write("<p>I am good boy...</p>");
    res.send() // "must", otherwise the server keeps reloading awaiting more data
})
// for small html code
app.get("/data", (req, res) => {
    // res.send()
    // res.send([{name: "Nishakar Kumar", roll: "20IE10019"}, ["Nishakar Kumar", "20IE10019"]]);

    // res.json()
    res.json([{name: "Nishakar Kumar", roll: "20IE10019"}, ["Nishakar Kumar", "20IE10019"]]);

    // both res.send() &res.json() work the same but res.json() stringifies even the non-objects :)
    // res.send()/res.json() automatically stringifies our data :)
})

app.listen(port, () => console.log(`Listening to port : ${port}`));