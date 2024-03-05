let heroes = [
  {
    id: 1,
    name: "Superman",
    age: 45,
    alias: "Clark Kent",
  },
  {
    id: 2,
    name: "Batman",
    age: 42,
    alias: "Bruce Wayne",
  },
  {
    id: 3,
    name: "Wonder Woman",
    age: 2000,
    alias: "Diana",
  },
  {
    id: 4,
    name: "Green Latern",
    age: 30,
    alias: "Hal Jordan",
  },
  {
    id: 5,
    name: "Aquaman",
    age: 37,
    alias: "Arthur Curry",
  },
];

export const getHeroes = () => heroes;

export const getHero = (id) => heroes.find((hero) => hero.id.toString() === id);

export const deleteHero = async (id) =>
  (heroes = heroes.filter((hero) => hero.id !== id));
  