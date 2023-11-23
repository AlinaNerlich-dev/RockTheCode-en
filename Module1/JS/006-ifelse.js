// SYNTAX OF AN IF CONDITION
// if(condition) {
//     the code to be executed if the condition is TRUE
// }

let isUserLoggedIn = true;

let username = "Mark";
const messageLoggedIn = `Welcome to the website, ${username}`;
const messageNotLoggedIn = `You need to login.`;
const thirdMessage = "Success!";

// if (40 > 20 && 100 < 20) {
//   console.log(messageLoggedIn);
// } else if (isUserLoggedIn) {
//   console.log(thirdMessage);
// } else {
//   console.log(messageNotLoggedIn);
// }

// if you have only one conditional statement you can leabve out the {}.
if (isUserLoggedIn) console.log("This is great!");
