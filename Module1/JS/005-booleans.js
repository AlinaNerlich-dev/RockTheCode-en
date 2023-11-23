// Boolean is a datatype that represents either TRUE, or FALSE.

let x = 50;
let y = 100;
// console.log(Boolean(x));

// everything without a value will be evaluated as falsy;
// EG: false, 0, -0, null, NaN, undefined, "";

// let z;
// let animal = "turtle";

// console.log(
//   `the value of x is: ${
//     x / animal
//   }. the truthyness/falsyness of x/animal is ${Boolean(x / animal)} `
// );

// using the operator && in boolean:
// if the FIRST value is true, then the second value is returned;
// console.log(true && 0);
// if the first value is FALSE it will return the first object
console.log(0 && 42);
