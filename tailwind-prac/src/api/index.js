export async function fetchPokemon () {
    
  return (
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=24')
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err))
  )
}