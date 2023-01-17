import React, { useState, useEffect, Fragment } from "react";
import {
  fetchPokemon,
  // fetchPokemonInfo
} from "../api";

const PokeHome = () => {
  const [pokemon, setPokemon] = useState({});
  // const [pokemonInfo, setPokemonInfo] = useState([])

  // const getAllPokemonInfo = async () => {
  //   if(!pokemon.results) return;
  //   await Promise.all(pokemon.results.map(poke => fetchPokemonInfo(poke.name)))
  //   .then(data => setPokemonInfo([...pokemonInfo, data]));
  // }

  useEffect(() => {
    fetchPokemon()
      .then((data) => setPokemon(data))
      // .then(_ => getAllPokemonInfo())
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id="image-track" className="bg-black w-[100vw] h-[100vh] m-7">
      {pokemon.results ? (
        <div className="grid grid-cols-3 mr-3 absolute">
          {pokemon.results.map((poke, idx) => {
            return (
              <Fragment key={idx}>
                <h1 className="text-yellow-600 w-32 h-7 object-cover object-[100% 50%] opacity-0 hover:animate-fadeIn hover:cursor-pointer select-none">
                  {[
                    poke.name.slice(0, 1).toUpperCase(),
                    poke.name.slice(1),
                  ].join("")}
                </h1>
              </Fragment>
            );
          })}
          <button
            className="bg-white h-7 w-12 hover:animate-pulse"
            onClick={(_) => console.log(pokemon.next)}
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default PokeHome;
