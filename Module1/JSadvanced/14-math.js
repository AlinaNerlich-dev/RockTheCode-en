// Math.abs() // return the absolute value of the input. |-20|
// console.log(Math.abs(-20));
// some values will return NaN - strings, multiple value arrays, empty objects, empty function call
// console.log(Math.abs("Hello"));
// console.log(Math.abs([-20, 2, 4]));
// console.log(Math.abs({}));
// console.log(Math.abs(() => {}));
// console.log(Math.abs());
// console.log(Math.abs(null));
// console.log(Math.abs(""));
// console.log(Math.abs([]));

// ROUNDING NUMBERS methods
// Math.ceil() // round a number UP to the nearest integer
// console.log(Math.ceil(8.01));
// Math.floor() // round a number DOWN to the nearest integer
// console.log(Math.floor(8.99));
// Math.round() // standard rounding
// console.log(Math.round(8.5));
// console.log(Math.round(8.4));

// Math.max(); // return the largest number of those provided (positive > negative numbers)
// console.log(Math.max(4, 8, -10, 7, -3));
// use a reducer for arrays
// const arr = [4, 8, -10, 7, -3];
// const maximum = arr.reduce((acc, curr) => Math.max(acc, curr));
// const maximum = Math.max(...arr);
// console.log(maximum);

// Math.random() // return a "random" number from 0 - 1 (just shy of 1).
// console.log(Math.random());
// get a random number between two integers.
// const getRandomBetween = (min, max) => {
//   return Math.floor(Math.random() * (max - min) + min);
// };
