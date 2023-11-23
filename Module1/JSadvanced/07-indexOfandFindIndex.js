// indexOf - finds the first instance of a search item and returns it's index.
// if it is unsuccessful it returns -1;
// syntax: const searchItemIndex = array.indexOf(searchItem, fromIndex)

// const zoo = ["monkeys", "hippos", "lions", "monkeys", "tigers", "bears"];

// const searchItemIndex = zoo.indexOf("monkeys", 8);
// console.log(searchItemIndex);

// const confirmedIndexLocations = [];
// let searchItem = zoo.indexOf("monkeys");
// while (searchItem !== -1) {
//   confirmedIndexLocations.push(searchItem);
//   searchItem = zoo.indexOf("monkeys", searchItem + 1);
// }
// console.log(confirmedIndexLocations);

// const list = ["milk", "cheese", "peppers", "onions"];
// const addToGroceryList = (list, item) => {
//   if (list.indexOf(item) === -1) {
//     list.push(item);
//     console.log(`Added ${item} to the list`);
//   } else {
//     console.log(`${item} is already on the list`);
//   }
// };
// addToGroceryList(list, "cereal");

//findIndex - similar to indexOf, accepts a callback function.
// returns the 1st instance.
function isDivisibleBy7(number) {
  if (number % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

const numberArray = [4, 14, 8, 28, 12, 49];
const result = numberArray.findIndex(isDivisibleBy7);
// console.log(result);

// search through an array of object
let fruits = [
  { name: "apple", quantity: 4 },
  { name: "Banana", quantity: 1 },
  { name: "Orange", quantity: 2 },
  { name: "Pear", quantity: 3 },
];

let fruitIndex = fruits.findIndex((fruit) => fruit.name === "Pear");
console.log(fruitIndex);
