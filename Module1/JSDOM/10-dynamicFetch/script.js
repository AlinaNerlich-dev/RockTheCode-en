const pokemonContainer = document.getElementById("pokemon-container");
const searchInput = document.getElementById("pokemon-search");
const searchButton = document.getElementById("search-button");

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";

let currentPokemonId = 100;
let currentPokemon;
let pokemonrequests = [];

const getPokemonTemplate = () => {
  return `
    <div class="pokemon">
    <h3>Name: ${currentPokemon.name}</h3>
    <span>ID: ${currentPokemon.id}</span>
    <img src="${currentPokemon.image}" alt="${currentPokemon.name}"/>
    </div>`;
};

const renderPokemon = () => {
  const template = getPokemonTemplate();
  pokemonContainer.innerHTML += template;
};

const fetchPokemon = () => {
  if (pokemonrequests.includes(currentPokemonId)) {
    return;
  } else {
    pokemonrequests.push(currentPokemonId);
  }

  fetch(`${POKEMON_URL}${currentPokemonId}`)
    .then((response) => response.json())
    .then((response) => {
      currentPokemon = {
        id: response.id,
        name: response.name,
        image: response.sprites.front_default,
      };
      renderPokemon();
    });
};

const handleSearch = (event) => {
  const inputValue = searchInput.value;
  currentPokemonId = inputValue;
  fetchPokemon();
};
searchInput.value = currentPokemonId;
searchButton.addEventListener("click", handleSearch);
// searchInput.addEventListener("input", handleSearch);
