// looping through an array
const myArr = ["a", "b", "c", "d"];

// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// forEach syntax: arrayName.forEach( (currentEl, index)=>{ operation you want to perform for that el} )
// myArr.forEach((el) => {
//   console.log(el);
// });

const myNums = [1, 4, 5, 7, 10, 4];
// let sum = 0;
// myNums.forEach((el) => {
//   sum += el;
// });
// console.log(sum);

myNums.forEach((el, index) => {
  if (el % 2 === 0) {
    console.log(`Even number found at ${index}, with value: ${el}`);
  }
});
