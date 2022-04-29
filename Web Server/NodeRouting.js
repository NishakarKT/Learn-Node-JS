// A web server is software and hardware that uses HTTP (Hypertext Transfer Protocol) and other protocols to respond to client requests made over the World Wide Web. The main job of a web server is to display website content through storing, processing and delivering webpages to users.

const http = require('http');

const server = http.createServer((request, response) => {
    // console.log(request.url);

    // Handling requests
    if(request.url == "/"){
        response.end("Hello World!!!");
        // or
        // response.write("Hello World!!!");
        // response.end();
    }
    else if(request.url == "/about"){
        response.end("About content :)");
    }
    else if(request.url == "/contact"){
        response.end("Contact content :)");
    }
    else{
        // response.writeHead(404);
        // response.end("ERROR 404");
        /* ************************** */
        response.writeHead(404, {"Content-type" : "text/html"}); // writeHead (optional, important)
        // writeHead(status code, data type)
        response.end("<h1>ERROR 404</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port 8000...");
});