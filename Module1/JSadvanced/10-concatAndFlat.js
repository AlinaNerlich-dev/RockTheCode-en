const animals = ["ducks", "chickens", "geese"];
const animals2 = ["dogs", "cats", "sheep", "lions"];

const joinedAnimalsArr = animals.concat(animals2);
// console.log(joinedAnimalsArr[4]);

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [11, [12, [13, 14]], , 15];

const combinedAnimalsNumbers = animals.concat(numbers, animals2);
// console.log(combinedAnimalsNumbers);

const combinedNumbers = numbers.concat(numbers2);

// flat works like concat, but it will "flatten" nested elements. Can specify the depth of the flattening.
const flatArr = combinedNumbers.flat(Infinity);
console.log(flatArr);
