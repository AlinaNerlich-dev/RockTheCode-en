// OBJECT SYNTAX
// objects are created with curly braces {}.
// objects have properties, key/value pairs separated by a colon.

const newShow = {
  name: "Game of Thrones",
  rating: 8,
  started: false,
  actors: [" Peter Dinklage", "Lena Headey", "Emilia Clarke", "Kit Harrington"],
  genre: "Fantasy",
  printInfo: function () {
    console.log(
      `${this.name} is a ${this.genre} TV show starring ${this.actors}`
    );
  },
};

// console.log(newShow["name"].toUpperCase());

const person1 = {
  "first-name": "Mark",
};

console.log(person1["first-name"]);
