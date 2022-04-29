const fs = require('fs');
const http = require('http');

const server = http.createServer();

// shorter method to stream using "stream pipes"
// stream pipes => simultaneously reading & writing

server.on('request', (req, res) => {
    const rStream = fs.createReadStream("Streams & Buffer/sample.txt");
    rStream.pipe(res);
})

server.listen(8000, "127.0.0.1", () => console.log("Listening..."));