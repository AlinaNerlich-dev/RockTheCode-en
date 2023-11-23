let username: string | number = "Mark";
// inferring types

username = 3;

// DECLARING STRINGS:
let myString: string = "Hello";
// DECLARING NUMBERS
let myNumber: number = 3;
// DECLARING BOOLEANS
let myBool: boolean = true;

// Declaring undefined/null
// let myUndefined: undefined | null;
let myUndefined;

// Mark_Bodenchak
const splitName = (myName: string): string => {
  return myName.split("_").join(" ");
};

const myNameWithSpaces = splitName("Mark_Bodenchak");

console.log(myNameWithSpaces);

// ANY & Unknown type (not recommended)
let myAnyVariable: unknown;
(myAnyVariable as string).split(""); // string -> array
(myAnyVariable as number).toFixed(2); // number

// Arrays
const myArr: string[] = ["a", "b", "c"];
const myArr2: Array<string> = ["d", "e", "f"];
const myNumberArray: number[] = [1, 2, 3, 4];
const myNumberArray2: Array<number> = [1, 2, 3, 4];
const myBoolArray: boolean[] = [true, false];

const myMixedArray: (string | number | boolean)[] = [false, "a", 2, "c", true];
// myArr.push(2);

// TUPLE (rare)
const myTuple: [string, number, string] = ["a", 2, "c"];

// OBJECT LITERAL
const myObject: { first: string; last: string; age: number } = {
  first: "Mark",
  last: "Bodenchak",
  age: 34,
};

// myObject.pet = "dog"
