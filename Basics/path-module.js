const path = require("path");

let file_path = "Basics/file1.txt";

let file_extension = path.extname(file_path);

let base_name = path.basename(file_path);

console.log(file_extension); // .txt

console.log(base_name);

console.log(__filename); // current file path

console.log(__dirname); // current directory name
