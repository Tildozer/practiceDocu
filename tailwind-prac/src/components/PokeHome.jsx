/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from "react";
import { fetchPokemon, fetchPokemonInfo } from "../api";

const PokeHome = () => {
  const [pokemon, setPokemon] = useState({});
  const [pokemonInfo, setPokemonInfo] = useState([]);

  const getAllPokemonInfo = async () => {
    if (!pokemon.results) return;

    return await Promise.all(
      pokemon.results.map((poke) => fetchPokemonInfo(poke.name))
    )
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPokemon()
      .then((data) => setPokemon(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getAllPokemonInfo();
  }, [pokemon]);

  console.log(pokemonInfo);

  return (
    <div className="flex justify-center bg-black w-[100vw] h-[100vh] m-10">
        
      {pokemon.results ? (
        <Fragment>
          <div className="flex justify-center h-7">
            {pokemon.prev ? (
              <button
                className="flex justify-center bg-white h-7 w-12 hover:animate-pulse shadow-yellow-600 shadow-md hover:-translate-y-1"
                onClick={(_) => console.log(pokemon.prev)}
              >
                Previous
              </button>
            ) : null}

            {pokemon.next ? (
              <button
                className="flex justify-center bg-white h-7 w-12 hover:animate-pulse shadow-yellow-600 shadow-md hover:-translate-y-1"
                onClick={(_) => console.log(pokemon.next)}
              >
                Next
              </button>
            ) : null}
          </div>
        <div className="grid-cols-3 gap-10 m-10 border-separate grid absolute min-w-[50rem]">
          {pokemon.results.map((poke, idx) => {
            return (
              <div key={idx} className="m-3">
                <h1 className="text-yellow-600 text-center w-32 h-10 m-0 hover:cursor-pointer select-none text-xl">
                  {[
                    poke.name.slice(0, 1).toUpperCase(),
                    poke.name.slice(1),
                  ].join("")}
                </h1>
                {pokemonInfo.length ? (
                  <Fragment>
                    <div className="flex flex-row justify-center w-32 m-0">
                      <img
                        className="m-3"
                        src={pokemonInfo[idx].sprites.front_default}
                        alt={`${pokemonInfo[idx].name} front facing sprite`}
                      />
                      <img
                        className="m-3"
                        src={pokemonInfo[idx].sprites.back_default}
                        alt={`${pokemonInfo[idx].name} back facing sprite`}
                      />
                    </div>
                    <div className="flex flew-row justify-center m-0 w-32">
                      <img
                        src={pokemonInfo[idx].sprites.back_shiny}
                        alt={`${pokemonInfo[idx].name} back facing shiny sprite`}
                      />
                      <img
                        src={pokemonInfo[idx].sprites.front_shiny}
                        alt={`${pokemonInfo[idx].name} front facing shiny sprite`}
                      />
                    </div>
                  </Fragment>
                ) : null}
              </div>
            );
          })}
        
        </div>
      </Fragment>
      ) : null}
    </div>
  );
};

export default PokeHome;
