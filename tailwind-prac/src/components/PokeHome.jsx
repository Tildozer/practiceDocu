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

  // added this to make sure the shinies disaper when you hit next or previous
  let shinies = document.querySelectorAll(".opacity-0");

  return (
    <div className="bg-black m-10">
      {pokemon.results ? (
        <div>
          <div className="flex justify-center gap-2 h-7">
            {pokemon.previous ? (
              <button
                className="bg-white h-7 w-20 hover:animate-pulse shadow-yellow-600 shadow-lg"
                onClick={async (_) => {
                  shinies.forEach((shiny) => {
                    shiny.className = "opacity-0 hover:animate-fadeIn";
                  });

                  return await fetchPokemon(pokemon.previous)
                    .then((data) => setPokemon(data))
                    .catch((err) => console.error(err));
                }}
              >
                Previous
              </button>
            ) : null}

            {pokemon.next ? (
              <button
                className="bg-white h-7 w-12 hover:animate-pulse shadow-yellow-600 shadow-lg "
                onClick={async (_) => {
                  shinies.forEach((shiny) => {
                    shiny.className =
                      "opacity-0 hover:animate-fadeIn hover:cursor-pointer";
                  });

                  return await fetchPokemon(pokemon.next)
                    .then((data) => {
                      setPokemon(data);
                    })
                    .catch((err) => console.error(err));
                }}
              >
                Next
              </button>
            ) : null}
          </div>
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-80 gap-10 m-10 border-separate grid absolute min-w-[50rem]">
            {/* Start of actually maping over pokemon so I can get all the in */}
            {pokemon.results.map((poke, idx) => {
              return (
                <div key={idx} className="m-3">
                  <h1 className="text-yellow-600 text-center w-32 h-10 m-0 hover:cursor-pointer select-none text-xl hover:animate-slowPing">
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
                          className="m-3 "
                          src={pokemonInfo[idx].sprites.back_default}
                          alt={`${pokemonInfo[idx].name} back facing sprite`}
                        />
                      </div>
                      <div className="flex flew-row justify-center m-0 w-32">
                        <img
                          className="opacity-0 hover:animate-fadeIn hover:cursor-pointer"
                          onClick={(ev) =>
                            ev.target.className ===
                            "opacity-0 hover:animate-fadeIn hover:cursor-pointer"
                              ? (ev.target.className = "hover:cursor-pointer")
                              : (ev.target.className =
                                  "opacity-0 hover:animate-fadeIn hover:cursor-pointer")
                          }
                          src={pokemonInfo[idx].sprites.front_shiny}
                          alt={`${pokemonInfo[idx].name} front facing shiny sprite`}
                        />
                        <img
                          className="opacity-0 hover:animate-fadeIn hover:cursor-pointer"
                          onClick={(ev) =>
                            ev.target.className ===
                            "opacity-0 hover:animate-fadeIn hover:cursor-pointer"
                              ? (ev.target.className = "hover:cursor-pointer")
                              : (ev.target.className =
                                  "opacity-0 hover:animate-fadeIn hover:cursor-pointer")
                          }
                          src={pokemonInfo[idx].sprites.back_shiny}
                          alt={`${pokemonInfo[idx].name} back facing shiny sprite`}
                        />
                      </div>
                    </Fragment>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PokeHome;
