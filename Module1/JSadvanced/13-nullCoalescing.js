// Nullish Coalescing Operator
// similar to OR operator ||
// the OR operator will return the right-side operand EVEN IF the lefthand is falsy.
// 0, empty string,
// the nullish will return the right-side operand ONLY IF the lefthand is null, or undefined.

let greeting = "Welcome back, Mark";
const customGreeting = greeting ?? "Welcome, Guest";
console.log(customGreeting);

// const nullVal = null;
// const nullTest = nullVal ?? "Default value for null";
// console.log(nullTest);

// const undefinedVal = undefined;
// const undefinedTest = undefinedVal ?? "Default value for undefined";
// console.log(undefinedTest);

// const zeroNumber = 0;
// const zeroTest = zeroNumber ?? "Default value for zero/falsy value";
// console.log(zeroTest);

// const emptyString = "";
// const emptyTest = emptyString ?? "Default value for empty strings";
// console.log(emptyTest);

// const falseBool = false;
// const falseBoolTest = falseBool ?? true;
// console.log(falseBoolTest);
