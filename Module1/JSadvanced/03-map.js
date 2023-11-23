// map loops through an array & returns a copy. Leaves original alone.

// syntax: arrayName.map((arrayElement, index)=>{ operations to perform})

// const numberArray = [2, 3, 5, 8, 9];
// const doubleValueArr = numberArray.map((el) => {
//   return el * 2;
// });
// console.log(doubleValueArr);

// const doubleValue = (el) => {
//   return el * 2;
// };
// const doubleValueArr = numberArray.map(doubleValue);
// console.log(doubleValueArr);

// const nameArr = ["Mike", "Sammy", "Sasha", "Louis"];
// nameArr.map((el, index) => {
//   let template = `<div>${index} ${el}</div>`;
//   console.log(template);
// });

const zooAnimals = [
  { animal: "panda", eats: "bamboo" },
  { animal: "giraffe", eats: "leaves" },
  { animal: "turtle", eats: "bananas" },
];

const alteredObjects = zooAnimals.map((el) => {
  const container = {};

  container[el.animal] = el.eats;
  container.age = el.animal.length * 4;
  return container;
});

console.log(alteredObjects);
