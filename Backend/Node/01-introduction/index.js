// // ES6 import/export syntax
// import cowsay from 'cowsay';

// COMMONJS Imports/exports syntax
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "Hello world!",
    e: "o0", // eyes
    T: "U ", // tongue
  })
);
