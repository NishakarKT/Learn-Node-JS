const { response } = require('express');
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;

app.set('view engine', 'hbs');

app.set('views', __dirname + "/templates/views");

hbs.registerPartials(__dirname + "/templates/partials");

app.get("", (req, res) => {
    res.render('index');
})

app.listen(port, () => console.log(`Listening to port : ${port}`));