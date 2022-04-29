// API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you're using an API.
// API ~ a service that provides data

const http = require('http');
const fs = require('fs');

// reading the data
const data = fs.readFileSync("API/data.json", "utf-8");

const server = http.createServer((request, response) => {
    if (request.url == "/")
        response.end("Home Page");
    else if (request.url == "/contact")
        response.end("Contact Page");
    else if (request.url == "/about")
        response.end("About Page");
    else if (request.url == "/userAPI") {
        // fs.readFile("API/data.json", "utf-8", (error, data) => {
        //     response.end(JSON.parse(data));
        // });
        // the data is read again and again as the page is reloaded multiple times...
        // so we rather read the data once at the start in synchronous mode...
        response.writeHead(200, { "Content-type": "application/json" });
        response.end(data);
        // content-type is important
    }
    else {
        response.writeHead(404, { "Content-type": "text/html" });
        response.end("<h1> 404 NOT FOUND... </h1>");
    }
});

server.listen(8000, "127.0.0.1", () => console.log("Listening..."));