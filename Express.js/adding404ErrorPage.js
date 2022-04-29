const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;

app.set('view engine', 'hbs');

app.set('views', __dirname + '/templates/views');

hbs.registerPartials(__dirname + '/templates/partials');

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})

// for any other possible request url after /about/ => errorrrrr
app.get("/about/*", (req, res) => {
    res.render("error404", {
        errorComment: "About us File not found"
    });
})

// for any other possible request => errorrrrr
app.get("*", (req, res) => {
    res.render("error404", {
        errorComment: "File not found"
    });
})


app.listen(port, () => console.log(`Listening to port : ${port}`));