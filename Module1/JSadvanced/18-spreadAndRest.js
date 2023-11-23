// DESTRUCTURING

// const book = {
//   title: "Front-end and Back-end Again",
//   author: "Bilbo Baggins",
//   editor: "Frodo Baggins",
// };

// let title = book.title;
// let author = book.author;
// let editor = book.editor;

const character = {
  characterName: "Arnold",
  show: "Hey Arnold",
  family: {
    grandpa: "Philip",
  },
};

// const { characterName, show } = character;
// console.log(characterName);
// console.log(show);

// Using Destructuring & storing/initializing in NEW variables
// const { characterName: cName } = character;
// console.log(cName);

// Create variable/assign default values:
// const { city = "New York" } = character;
// console.log(city);

// Grab nested properties
// const {
//   family: { grandpa },
// } = character;
// console.log(grandpa);

// Possible to do all destructuring operations with arrays as well:
// const colors = ["red", "green", "blue"];
// const [r, g, b] = colors;
// console.log(r);
// console.log(g);
// console.log(b);

//  SPREAD OPERATOR
// syntax: ...
// add elements of an existing array into a new array (not complete new)

// const classesToAdd = [
//   "Data Structures and Algorithms",
//   "Android App Development",
//   "Intro to Nodejs",
// ];

// let classes = [
//   "Intro to JavaScript",
//   "CS Fundamentals",
//   ...classesToAdd,
//   "Front-End Design",
//   "Discrete Mathematics",
// ];
// console.log(classes[3]);

// function addNums(w, x, y, z) {
//   console.log(w);
//   console.log(x);
//   console.log(y);
//   console.log(z);
//   console.log(w + x + y + z);
// }
// let numArr = [5, 12, 48, 17];
// addNums(...numArr);

// use it to copy arrays & objects
// let animals = ["monkey", "tiger", "lion", "polar bear", "penguin", "capybara"];
// let [...zooAnimals] = animals;
// console.log(animals);
// zooAnimals.push("Okapi");
// console.log(zooAnimals);

// const employee = {
//   firstName: "Homer",
//   lastName: "Simpson",
// };
// let { ...Homer } = employee;
// console.log(employee);
// console.log(Homer);

// REST PARAMETERS
// syntax: ...
// write functions that will accept more arguments than it has defined parameters
function greetGuests(vip1, vip2, ...restOfGuests) {
  console.log("Welcome,", vip1);
  console.log("Welcome,", vip2);
  console.log("Welcome,", ...restOfGuests);
}
greetGuests("Jake", "Mary", "Jason", "John", "Lisa", "Valery", "Samantha");
