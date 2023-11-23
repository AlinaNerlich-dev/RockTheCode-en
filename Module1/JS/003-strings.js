/* Strings - sequence of characters - letters, digits, special characters (&*^%, etc) control characters. 
Any form of text, basically. 
*/

// DECLARING STRINGS
/* strings are marked with quotations marks around the value.
 */
// example:
const firstName = "Michael";
const lastName = "McClare";
const age = "22"; // compare to const age = 22; without quotes.
const address = "1234 Hawkridge Lane";

// you can use double quotes "", or single quotes '';

const middleName = "George";

// you cannot mix quotation types. eg:
// const school = 'Berkeley University"

// "He said that she said 'the ride was fun'".

const string1 = "The name of your school is 'Stanford'";
const string2 = 'The name of your school is "Harvard"';
// you can use escape characters if you want to stick to 1 type of quotation mark.
// const string3 = "The name of your school is \"MIT\"";
// const string3 = 'The name of your school is \'MIT\'';

// control characters
// new line character: \n
const letter =
  "To Whom It May Concern, \n I would love to extend and invitation....";

// CONCATENATED STRINGS
// console.log("Hello " + firstName + " " + lastName);

// TEMPLATE STRINGS
// console.log(
//   `Hello, my name is ${firstName},
//   my last name is ${lastName}.
//   I am ${age} old, and I live at ${address}`
// );

// STRING METHODS

// length method.
// console.log(`the length of ${firstName} is ${firstName.length}`);

// slice method
// const address = "1234 Hawkridge Lane";
// console.log(address.slice(0, 3));

// substring method
// console.log(address.substring(5));

// replace method
// console.log(address.replace("Hawkridge", "Dovetail"));
const address2 =
  "           the  donkey said to the other donkey, why the....       ";
// console.log(address2.replace("donkey", "horse"));
// console.log(address2.replaceAll("donkey", "horse"));

// uppercase and lowercase
// console.log(firstName.toUpperCase());
// console.log(lastName.toLowerCase());

// concatenate method
// console.log(firstName.concat("   ", lastName));

// trim method
console.log(address2.trim());
