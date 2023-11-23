// Ternary operator is a shorthand for if/else
// checks a condition and based on the truthyness of that condition it assigns one of several values
// syntax: variable = condition ? value1 : value2;

// let age = 18;
// let canVote = age >= 18 ? "Let him in!" : "Send him away";
// console.log(canVote);

// function greet(user) {
//   let name = user ? user : "stranger";
//   console.log(`Hey there, ${name}`);
// }
// greet("Mark");

const newCustomer = {
  firstName: "Frank",
  lastName: "Little",
  age: 45,
  isVeteran: false,
  hasCoupon: 10,
};

// const applyDiscount = (customer) => {
//   let discount;
//   if (customer.age >= 55) {
//     discount = 30;
//   } else if (customer.isVeteran) {
//     discount = 20;
//   } else if (customer.hasCoupon) {
//     discount = customer.hasCoupon;
//   } else {
//     discount = 0;
//   }
//   console.log(discount);
// };

const applyDiscount = (customer) => {
  let discount =
    customer.age >= 55
      ? 30
      : customer.isVeteran
      ? 20
      : customer.hasCoupon
      ? customer.hasCoupon
      : 0;
  console.log(discount);
};
applyDiscount(newCustomer);
