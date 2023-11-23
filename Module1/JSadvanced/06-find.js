// a lot like the filter method - BUT it only returns ONE element.
// if find fails, it returns undefined.

// SYNTAX: const foundItem = originalArray.find(callbackfunction)

const animalsInLake = ["turtles", "ducks", "fish", "frogs", "geese"];

const foundAnimals = animalsInLake.find(
  (animal) => animal === "Turtles".toLowerCase()
);
// console.log(foundAnimals);

const tools = [
  { name: "hammer", count: 3 },
  { name: "wrench", count: 3 },
  { name: "screwdriver", count: 4 },
  { name: "drill", count: 1 },
];

const hasTwoOrMore = (tool) => tool.count >= 2;

// const foundTools = tools.find((tool) => tool.name === "drill");
const foundTools = tools.find(hasTwoOrMore);
// console.log(foundTools);

const result = tools.find((tool, index) => {
  if (tool.count > 2 && index !== 0) return true;
});

console.log(result);
