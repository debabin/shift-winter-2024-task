const app = document.getElementById("root");

const init = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");

  const pokemons = (await response.json()).results;

  const pokemonsContainer = document.createElement("div");
  pokemonsContainer.className = "pokemons_container";

  const pokemonsTitle = document.createElement("h1");
  pokemonsTitle.innerHTML = "Pokemon first gen";

  app.appendChild(pokemonsTitle);

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    const pokemonContainer = document.createElement("div");
    pokemonContainer.className = "pokemon";

    const image = document.createElement("img");
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      i + 1
    }.png`;

    const name = document.createElement("div");
    name.innerHTML = pokemon.name;

    pokemonContainer.appendChild(image);
    pokemonContainer.appendChild(name);
    pokemonsContainer.appendChild(pokemonContainer);
  }

  app.appendChild(pokemonsContainer);
};

init();
