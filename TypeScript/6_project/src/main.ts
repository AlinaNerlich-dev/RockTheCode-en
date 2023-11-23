import { fetchPokemon } from "./api";
import { MAX_ID, MIN_ID } from "./constants";
import "./style.css";
import { PokemonFromAPI } from "./types";

const idInput = document.getElementById("pokemon-id") as HTMLInputElement;
const searchButton = document.getElementById("search") as HTMLButtonElement;
const pokemonCard = document.getElementById("pokemon-card") as HTMLDivElement;

idInput.max = MAX_ID.toString();
idInput.min = MIN_ID.toString();

const createPokemonTemplate = (pokemon: PokemonFromAPI) => {
  const template = /*html*/ `
    <h3>${pokemon.name}</h3>
    <p>${pokemon.id}</p>
    <img src="${pokemon.sprites.front_default}"/>
    <p>Type 1: ${pokemon.types[0].type.name}</p>

    ${pokemon.types[1] ? `<p>Type 2: ${pokemon.types[1].type.name}</p>` : ""}
    
    `;

  pokemonCard.innerHTML = template;
};

const searchPokemon = async (): Promise<void> => {
  const pokemonId = idInput.value;
  const pokemon = await fetchPokemon(pokemonId);

  if (pokemon) {
    createPokemonTemplate(pokemon);
  }
};

searchButton.addEventListener("click", searchPokemon);
