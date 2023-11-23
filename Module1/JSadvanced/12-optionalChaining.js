const employee1 = {
  firstName: "John",
  lastName: "Doe",
  contact: {
    email: "John.doe@gmail.com",
  },
};

const employee2 = {
  firstName: "Nigel",
  lastName: "Thornberry",
  contact: {
    cell: "232-323-2323",
  },
};

const employee3 = {
  firstName: "Count",
  lastName: "Dracula",
  renfield(message) {
    console.log(message);
  },
};

console.log(employee1?.contact?.email);
console.log(employee2?.contact?.email);
console.log(employee3?.contact?.email);

employee3.renfield("We need you for a meeting tomorrow at sunset.");
employee2.renfield?.("Hey, meeting tomorrow");
// if (employee1.contact && employee1.contact.email) {
//   console.log(employee1.contact.email);
// }
// if (employee2.contact && employee2.contact.email) {
//   console.log(employee2.contact.email);
// } else {
//   console.log(`${employee2.firstName} does not have the required fields`);
// }
// if (employee3.contact && employee3.contact.email) {
//   console.log(employee3.contact.email);
// } else {
//   console.log(`${employee3.firstName} does not have the required fields`);
// }
