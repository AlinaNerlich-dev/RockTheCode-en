// declare and array with square brackets []
// each item in the array is called an element, and they are separated by commas

const myBooks = [
  "The Fellowship of the Ring", // index 0
  "The Two Towers", // index 1
  "The Return of the King", // index 2
];
const myGrades = [89, 93, 71, 85, 45, 0, 100];
const myProfile = ["Michael", 37, true];

// Accessing elements in an array through the index
// console.log(myBooks[2]);
const newString = "hello";
// console.log(newString.length);

// Access the last item in the array using the .length property and index notation.
// console.log(myGrades[myGrades.length - 1]); // n-1

// PUSH METHOD - add an item to an array
// const toDoList = [];
// console.log(toDoList);
// toDoList.push("Wash the Dishes");
// console.log(toDoList);
// toDoList.push("Vacuum");
// console.log(toDoList);
// UNSHIFT - adds an item to the front of the array;
// toDoList.unshift("Buy Groceries");
// console.log(toDoList);
// toDoList.shift();
// console.log(toDoList);
// toDoList.pop();
// console.log(toDoList);

// SLICE METHOD - removing part of an array & returns a NEW array.
// const myGrades = [89, 93, 71, 85, 45, 0, 100];
const newGrades = myGrades.slice();
// console.log(`myGrades: ${myGrades}`);
// console.log(`newGrades: ${newGrades}`);

const newArray = myGrades; //does not make a true copy. It makes a shortcut.

const newBooks = ["The Magpie Murders", "And Then There Were None"];
let combinedArray = myBooks.concat(newBooks);
// console.log(combinedArray);
