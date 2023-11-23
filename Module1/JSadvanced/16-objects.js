const employee = {
  firstName: "Squidward",
  lastName: "",
  salary: 40000,
  hasPTO: false,
  enjoysJob: false,
};

const fryCook = Object.create(employee);

fryCook.firstName = "SpongeBob";
fryCook.lastName = "Squarepants";
fryCook.salary = 0;
fryCook.hasPTO = false;
fryCook.enjoysJob = true;

// console.log(fryCook);

// console.log(Object.entries(fryCook));

// Object.entries(fryCook).forEach((keys) => {
//   console.log(keys);
// });

const array = [
  ["firstName", "Eugene"],
  ["lastName", "Krabs"],
];
const owner = Object.fromEntries(array);
console.log(owner);

// assign method
const patrick = {};
Object.assign(patrick, fryCook);
patrick.firstName = "Patrick";
console.log(patrick);
