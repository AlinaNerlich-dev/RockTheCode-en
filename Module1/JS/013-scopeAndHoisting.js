// function declaration syntax
// DECLARATIONS OUTSIDE OF A FUNCTION (or other block) HAVE GLOBAL SCOPE
let user = "James";
let standardGreeting = "Thank you for using our service.";
showGreeting(user);

// FUNCTIONS HAVE FUNCTIONAL SCOPE
function showGreeting(username) {
  console.log(`Welcome ${username},
${standardGreeting}`);
}

// console.log(standardGreeting);

// BLOCK SCOPE
// anything defined within curly braces {} have scope within that block
// {
//   let x = 2;
// }
// console.log(x);

// showMessage();
// FUNCTION EXPRESSION SYNTAX
const showMessage = function () {
  console.log("Welcome from the function expression ln24");
};
