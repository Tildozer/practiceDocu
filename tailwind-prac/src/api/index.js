export async function fetchPokemon(fetchURL) {
  if (fetchURL) {
    return await fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  }
  return await fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));
}

export async function fetchPokemonInfo(pokemonName) {
  if (!pokemonName.match(/[a-z]/i)) {
    return;
  }
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));
}
