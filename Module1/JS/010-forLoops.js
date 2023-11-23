// FOR-LOOP SYNTAX
// for (initialize iteration counter; condition to test; increment counter operation) {
// code block to execute;
// }

// STANDARD LOOP EXAMPLE 0-9
// for (let iteration = 0; iteration < 10; iteration++) {
//   console.log(iteration);
// }

// PRINTS EVERY EVEN NUMBER
// for (let iteration = 0; iteration < 50; iteration = iteration + 2) {
//   console.log(iteration);
// }

// PRINTS EXPONENT OF A NUMBER
// let product = 1;
// for (let iteration = 0; iteration < 10; iteration++) {
//   product = product * 2;
// }
// console.log(product);

// MODIFY A STRING
// let string = "hello";
// for (let iteration = 0; iteration < 4; iteration++) {
//   console.log(string);
//   string = string + string;
// }

for (let string = "hello"; string.length < 10; string = string + 10) {
  console.log(string);
}
