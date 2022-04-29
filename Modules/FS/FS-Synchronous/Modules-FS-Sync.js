const fs = require('fs');
let filePath = "Modules/FS/FS-Synchronous/sample.txt";
let newFilePath = "Modules/FS/FS-Synchronous/newSample.txt";
let newFolderPath = "Modules/FS/FS-Synchronous/newFolder";

// (writing to a file/ creating a new file) => synchronous version
fs.writeFileSync(filePath, "Hello World!!!");

// (appending to a file/ creating a new file) => synchronous version
fs.appendFileSync(filePath, "\nHello Earth!!!");

// reading from a file => synchronous version
let bufferData = fs.readFileSync(filePath); // returns buffer data
// In node.js we have an additional datatype => "Buffer"
console.log(bufferData);

// Buffer data to actual data
console.log(bufferData.toString());

// file encoding in utf-8
console.log(fs.readFileSync(filePath, "utf-8"));
// console.log(fs.readFileSync(filePath, "UTF-8"));
// returns the actual data

// Renaming a file
fs.renameSync(filePath, newFilePath);

// Creating a directory
fs.mkdirSync(newFolderPath);

// creating a file inside the directory
fs.writeFileSync(newFolderPath + "/newFile.txt","new file, new folder... :)");

// unlink => deleting a file
fs.unlinkSync(newFilePath);

// rmdirSync => deleting an empty directory
// fs.rmdirSync("Modules/FS-Synchronous/newFolder");
