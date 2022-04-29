// A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.
// Examples :- pug, mustache, EJS, Handlebars...
// we are going to use handle bars
// Installation => npm install hbs

// Working
// MUST => we must create a folder "views" in the current directory

const express = require('express');
const app = express();
const port = 3000;

// Setting a view engine (hbs, pug or ejs)
app.set('view engine', 'hbs');

// template engine route
app.get("", (req, res) => {
    res.render("index", {
        // dynamic content/data to be added
    });
})

app.listen(port, () => console.log(`Listening to port : ${port}`));

// here we have a top-bottom data render => first app.get() root page is preferred
