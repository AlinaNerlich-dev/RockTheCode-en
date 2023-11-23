// .join() method joins the elements in an array together into a string.

const fruits = ["apples", "oranges", "bananas", "pears"];

let joinedString = fruits.join(" and ");
console.log(joinedString);
console.log(typeof joinedString);

const numberArray = [1, 4, , , 8, 9];
let joinedNumbers = numberArray.join(" + ");
console.log(joinedNumbers);
console.log(typeof joinedNumbers);
