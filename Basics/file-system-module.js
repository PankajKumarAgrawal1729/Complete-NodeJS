// files

const fs = require("fs");

// reading a file

// 1. read file : read asynchronosaly
// 2. readfileSync file : read synchronosaly

// let fileContent = fs.readFileSync("Basics/file2.txt"); // in buffer form
// console.log("data of file2: " + fileContent);

// // writing in file
// // if the file name that is passed doesn't exists a new file will be created with the same name and data will be written in that file.

// fs.writeFileSync("Basics/file2.txt", "New line added using module."); // overwrite
// console.log("Written successfully!!");

// // update file
// // appendFileSync: it adds new data to a previousaly written file

// fs.appendFileSync("Basics/file2.txt", " New line added using appendFileSync");
// console.log("File Updated Successfully");

// // Delete file
// fs.unlinkSync("Basics/file3.txt");
// console.log("File Deleted Successfully");


// Directories

// create a directory

// fs.mkdirSync("myDirectory");

// check content of directory

let folderPath = "myDirectory";
let folderContent = fs.readdirSync(folderPath);
console.log("folderContent: " + folderContent);

// check if directory exists or not

console.log(fs.existsSync("myDirectory"));  // true


// remove Directory: directory must be empty

fs.rmdirSync("MyDirectory");
console.log("Directory Deleted Successfully");