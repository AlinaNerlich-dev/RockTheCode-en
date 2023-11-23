// console.log("Hello!");

// fetch("https://pokeapi.co/api/v2/pokemon/ditto") //returns some data
//   .then((res) => res.json()) // then take that data that was returned, (i'll call it response) and turn it into JSON
//   .then((response) => console.log(response)) //THEN take whatever line 2 returned, (i'm going to call it response), and console.log it
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// console.log("Hello2");

const main = async () => {
  console.log("Hello!");
  let pokemon;
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const response = await res.json();
    pokemon = response;
    console.log(response);
  } catch (error) {
    console.log("Error: ", error);
  }
  console.log("Hello2!");
};

main();
