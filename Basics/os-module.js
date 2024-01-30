// it will tell the all configuration about our os

const os = require("os");

console.log(os.arch()); // architecture of os  // x64

console.log(os.platform()); // platform name   // darwin

console.log(os.networkInterfaces());

console.log(os.cpus());

console.log(os.totalmem());

console.log(os.freemem());
