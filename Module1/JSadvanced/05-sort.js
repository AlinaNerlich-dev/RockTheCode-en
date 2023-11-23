const numberArray = [1, 5, 3, 20, 9, 8, 7];

// default sort method will sort in ascending order. will not return a new array.
// default will cast numbers into strings.

// console.log(numberArray.sort());

function getUnicode(string) {
  const value = string.charCodeAt(string.indexOf(string));
  console.log(`${string} has a unicode of ${value}`);
}

// Compare callbackFn syntax:
/*
(a,b) => {
    if (a is less than b) {
        return -1;
    } 
    if (a is greater than b) {
        return 1;
    }
    return 0;
}
*/
// console.log(numberArray);
// numberArray.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// SHORTHAND (numbers only)
// numberArray.sort((a, b) => {
//   return a - b;
// });
// console.log(numberArray);

const stringArray = ["tiger", "dolphin", "panda"];
stringArray.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(stringArray);

// getUnicode("t");
// getUnicode("d");
// getUnicode("p");
