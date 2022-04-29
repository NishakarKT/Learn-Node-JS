// serving the html, css, js files using express.static (built-in middleware function)
// middleware processess stuff between "request" & "response"
// goof folder order :-
// src => package.json, package-lock.json
// public => html, css, js files

const express = require('express');
const app = express();
const port = 3000;

// using express.static(static path) => we give the absolute path as static path ...
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send();
})

app.listen(port, () => console.log(`Listening to port : ${port}`));