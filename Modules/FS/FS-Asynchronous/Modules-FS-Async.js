// we must call a callback function in asynchronous codes, => callback functions run after the task is completed...
const fs = require("fs");
let filePath = "Modules/FS/FS-Asynchronous/sample.txt";
let newFilePath = "Modules/FS/FS-Asynchronous/newSample.txt";
let newFolderPath = "Modules/FS/FS-Asynchronous/newFolder";
// FOR ABSOLUTE PATH => WE USE "__dirname"

// (writing to a file/ creating a new file) => synchronous version
fs.writeFile(filePath, "Hello Mars!!!", (err) => {
    // console.log(err); // prints null, as there were no errors thrown
})

// (appending to a file/ creating a new file) => synchronous version
fs.appendFile(filePath, "\nHello Jupiter!!!", (err) => { });

// reading from a file => synchronous version
// In node.js we have an additional datatype => "Buffer"
fs.readFile(filePath, (error, data) => {
    console.log(data);
    console.log(data.toString()); // Buffer data to actual data
}); // we get buffer data

// file encoding in utf-8
fs.readFile(filePath, "UTF-8", (error, data) => {
    console.log(data);
}); // we get actual data

// Renaming a file
fs.rename(filePath, newFilePath, (error) => { });

// Creating a directory
fs.mkdir(newFolderPath, (error) => { });

// creating a file inside the directory
fs.writeFile(newFolderPath + "/newFile", "new file, new folder...", (error) => { });

// unlink => deleting a file
fs.unlink(newFilePath, (error) => { });

// rmdirSync => deleting an empty directory
// fs.rmdir(newFolderPath, (error) => {});
