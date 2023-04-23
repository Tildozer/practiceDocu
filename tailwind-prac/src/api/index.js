export async function fetchPokemon(page) {
  if (page > 1) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${12 * page}&limit=12`
    );
    const results = await response.json();
    return results;
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
