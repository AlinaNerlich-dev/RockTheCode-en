// FUNCTION DECLARATION/DEFINITION SYNTAX
// the name of the function
// list of parameters enclosed in parentheses separated by commas
// code execution block which has javascript statements enclosed by curly brackets.

// function functionName(parameter1, parameter2, etc...) {
// code execution block
// }

function add(x, y) {
  return x + y;
}

// FUNCTION CALL
let sum = add(10, 20);
console.log(sum);

// function expression
const subtract = function (x, y) {
  return x - y;
};

let result = subtract(100, 75);
console.log(result);

// ARROW FUNCTION // newer function syntax (ES6)
const multiply = (x, y) => {
  return x * y;
};

let product = multiply(5, 7);
console.log(product);

function power(x, y) {
  return x ** y;
}
let power3 = power(3, 3);
console.log(power3);
