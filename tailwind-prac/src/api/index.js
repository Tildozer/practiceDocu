export async function fetchPokemon() {
  return await fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));
}
export async function fetchPokemonInfo(pokemonName) {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));
}
