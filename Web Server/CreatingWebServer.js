// A web server is software and hardware that uses HTTP (Hypertext Transfer Protocol) and other protocols to respond to client requests made over the World Wide Web. The main job of a web server is to display website content through storing, processing and delivering webpages to users.

const http = require('http');

const server = http.createServer((request, response) => {
    response.end("Hello World!!!");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port 8000...");
});