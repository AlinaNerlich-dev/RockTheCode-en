// variable declaration - the act of creating a variable.
/* 
to declare a variable, there's several keywords you can use.

var
let
const
*/

var firstName;
let lastName;
const Age;  // must be initialized WITH data, const ensures data will never be overwritten.

//  initialization of a variable (providing data).

firstName = 'Michael';
lastName = 'Reidell';
let MiddleName = "Joseph";


// initialize a variable while declaring it. 
let age = 45;
const eyes = 'brown';
let married = true;

let address = '1234 Hawkridge Lane', city = 'elseville';
let a = "1234 hawkridge lane"

// declaring an object.
let person1 = {
    firstName: "James",
    lastName: "Little",
    age: 32,
    eyes: "blue",
    married: false,
}


let myArray = ["milk", "orange juice", "bread", "eggs"];

// Important ruels for JavaScript Variables
/* 
1. variable identifiers should be CLEAR and MEANINGFUL
2. variable identifier must start with a letter, the dollar sign, or an underscore. 
3. variable identifier cannot start with a number.
4. variable identifiers cannot have periods, hyphens, other special characters (except those in #2).
5. constants are often UPPERCASE. if multiple words, they often have an underscore between them.
6. other variables identifiers are often in camelCase. 
*/

let num1 = 45;
let str1 = "Michael";

num1 * str1;