// LOOPING THROUGH AND ARRAY
const myNumbers = [8, 2, 6, 7, 10, 9, 21, 7];
// console.log(myNumbers);

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
// printArray(myNumbers);

const sumArray = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    // sum += array[i]
  }
  return sum;
};
// console.log(sumArray(myNumbers));

const listOfNumbers = [
  8, 23, 28, 19, 17, 5, 30, 15, 20, 100, 52, 61, 0, -1, -5, -7, -8, -9,
];

function sortEvensAndOdds(array) {
  let oddsArray = [];
  let evensArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evensArray.push(array[i]);
    } else {
      oddsArray.push(array[i]);
    }
  }
  console.log(`Even Numbers: ${evensArray},
  Odd Numbers: ${oddsArray}`);
}

sortEvensAndOdds(listOfNumbers);
