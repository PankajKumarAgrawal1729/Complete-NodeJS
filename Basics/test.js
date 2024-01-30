const calculator = require("./calculator");

console.log("I'm Pankaj");

function satHello() {
  console.log("Hello from Pankaj.");
}

satHello();

// console.log(window);  // there is no window object in nodejs

// console.log(global);  // we have global instead of window in nodejs\

let name = "Spider-man";
console.log(global.name); // undefined

// use calculator module
calculator.addition(3, 22);
calculator.substraction(22, 3);
calculator.multiplication(3, 22);
calculator.division(22, 3);
