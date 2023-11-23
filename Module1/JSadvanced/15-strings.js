const string = "Javascript";
const string2 = "learning";

// .length() return the length of a string
console.log(string.length);

// access a letter using the bracket notation
console.log(string[3]);

// retrieve the last letter in a string with bracket notatio
console.log(string[string.length - 1]);

// includes() // tyest whether a substring is within a string.
console.log(string.includes("scr"));

// startsWith // endsWith
console.log(string.startsWith("Java"));
console.log(string.endsWith("Java"));

// toUpperCase // toLowerCase
console.log(string.toLowerCase());
console.log(string.toUpperCase());

// slice // will grab a part of a string based on the provided indices;
console.log(string.slice(0, 5));

// replace method -- doesn't replace the original string. 2 parameters, the 1st is what to replace, the 2nd is what you want to replace it with
console.log(string.replace("Java", "ECMA"));
