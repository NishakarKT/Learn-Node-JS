// Streams are objects that let you read data from a source or write data to a destination in a continuous fashion. In Node.js, 
// there are four types of streams −

// Readable − Stream which is used for a read operation.
// Writable − Stream which is used for a write operation.
// Duplex − Stream which can be used for both reading and write operation.
// Transform − A type of duplex stream where the output is computed based on input.

// Each type of Stream is an EventEmitter instance and throws several events at a different instance of times. For example, some of the commonly used events are −
// data − This event is fired when there is data is available to read.
// end − This event is fired when there is no more data to read.
// error − This event is fired when there is an error receiving or writing data.
// finish − This event is fired when all the data has been flushed to the underlying system
// Streaming means listening to music or watching a video in ‘real-time’, instead of downloading a file to your computer and watching it later

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // normal way
    // fs.readFile("Streams & Buffer/sample.txt", "utf-8", (error, data) => {
    //     res.end(data);
    // })

    // streaming way
    const rStream = fs.createReadStream("Streams & Buffer/sample.txt");
    // whenever some data is available to be read, 'data' event is fired, so we listen to this 'data' event...
    // 'chunkData' is a small part of the total data that is read for now...
    rStream.on('data', (chunkData) => {
        res.write(chunkData);
    });
    // when NO data is available to be read, 'end' event is fired, so we listen to this 'end' event...
    rStream.on('end', () => {
        res.end();
    });
    // when some error occurs, 'error' event is fired, so we listen to this 'error' event...
    rStream.on('error', () => {
        console.error("Error while streaming...");
        res.end("Error while streaming...");
    });
});

server.listen(8000, "127.0.0.1", () => console.log("Listening..."));