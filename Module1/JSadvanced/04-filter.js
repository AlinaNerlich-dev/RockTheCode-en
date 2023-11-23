// filter method - creates a new array of elements that match a criteria.

/* 
const newArray = originalArray.filter( (el)=>{
    return condition;
});
*/

// const numberArray = [5, 9, 10, 12, 20, 24, 8, 7, 4, 5];
// const biggerThanNine = numberArray.filter((number) => {
//   return number > 9;
// });
// console.log(biggerThanNine);

// const biggerThanNine = [];
// for (let i = 0; i < numberArray.length; i++) {
//   let currentNumber = numberArray[i];
//   if (currentNumber > 9) {
//     biggerThanNine.push(currentNumber);
//   }
// }
// console.log(biggerThanNine);

const animals = [
  { name: "Dolphin", habitat: "Ocean" },
  { name: "Lion", habitat: "Plains" },
  { name: "Giraffe", habitat: "Plains" },
  { name: "Monkey", habitat: "Jungle" },
  { name: "Tiger", habitat: "Jungle" },
];

const plainsAnimals = animals.filter((animal) => {
  return animal.habitat === "Plains";
});
console.log(plainsAnimals);
