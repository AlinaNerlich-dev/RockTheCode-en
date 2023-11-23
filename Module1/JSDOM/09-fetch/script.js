let pokemonData;

const pokemonContainer = document.getElementById("pokemon-container");

const renderPokemon = () => {
  const pokemonTemplate = `<div class="pokemon">
    <span>ID: ${pokemonData.id}</span>
    <h3>name: ${pokemonData.name}</h3>
    <img src="${pokemonData.image}" alt="${pokemonData.name}" />
    </div>
    `;

  pokemonContainer.innerHTML += pokemonTemplate;
};

fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
  .then((response) => response.json())
  .then((response) => {
    pokemonData = {
      id: response.id,
      name: response.name,
      image: response.sprites.front_default,
    };

    renderPokemon();
  });
