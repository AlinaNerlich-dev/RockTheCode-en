// reduce iterates through an array and sums the elements.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //55

// let sum = 0; //placeholder to hold the total each loop
// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }
// console.log(sum);

// REDUCER SYNTAX
// const initialValue = 0;
// const arrayTotal = originalArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

const initialValue = 0;
const arrayTotal = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(arrayTotal);
