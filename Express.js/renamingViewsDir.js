// "views" folder is a requirement for template engine to function,
// how can we rename it ???

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'hbs');

// renaming views directory / altering the path
app.set('views', __dirname+"/templates/views");

app.get("", (req, res) => {
    res.render("index", {
        // dynamic content/data to be added
    });
})

app.listen(port, () => console.log(`Listening to port : ${port}`));

