// In a website, most of the times we have the same header/footer on all the pages... why not just create a header/footer once.. and call it in a single line on every other page ??? It is possible with "partials" in express.js...

const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;

app.set('view engine', 'hbs');
app.set('views', __dirname + '/templates/views');
hbs.registerPartials(__dirname + "/templates/partials");

app.get("/", (req, res) => {
    res.render('index');
})

app.listen(port, () => console.log(`Listening to port : ${port}`));