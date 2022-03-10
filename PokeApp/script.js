let cards = document.querySelector(".cards");

fetch(`https://pokeapi.co/api/v2/pokemon?limit=153`)
  .then((response) => response.json())
  .then(function (allpokemon) {
    allpokemon.results.forEach(function (pokemon) {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then(function (pokemonData) {
          renderPokemon(pokemonData);
        });
    });
  });

function renderPokemon(pokemonData) {
  let cards = document.querySelector(".cards");
  let pokemonContainer = document.createElement("div");
  pokemonContainer.classList.add("card");
  let pokemonName = document.createElement("div");
  pokemonName.classList.add("card_title");
  pokemonName.innerText = pokemonData.name;
  let pokemonTypes = document.createElement("ul");
  createTypes(pokemonData.types, pokemonTypes);
  let pokemonImage = document.createElement("img");
  pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`;
  pokemonContainer.append(pokemonImage, pokemonName, pokemonTypes);
  cards.appendChild(pokemonContainer);
}

function createTypes(types, ul) {
  types.forEach(function (type) {
    let typeLi = document.createElement("li");
    typeLi.innerText = type["type"]["name"];
    ul.append(typeLi);
  });
}
// Margit's version

// const pokedex = document.querySelector(".cards");

// fetch(`https://pokeapi.co/api/v2/pokemon?limit=553`)
//   .then((res) => res.json())
//   .then((data) => {
//     pokeCards(data.results);
//     const fetches = data.results.map((p) => {
//       return fetch(p.url).then((res) => res.json());
//     });
//     Promise.all(fetches).then((res) => console.log(res));
//   });

// const pokeCards = (data) => {
//   const cards = data
//     .map((card) => {
//       return `<div class="card"><img src=""/><div class="card_title">${card.name}</div></div>`;
//     })
//     .join(" ");

//   pokedex.innerHTML = cards;
// };

// fetchData();
