// child process is a module used to create sub process within a script
// you can perform different tasks with your script by just using some methods

const cp = require("child_process");

// cp.execSync("code");
console.log(cp.execSync("node Basics/test.js").toString());
