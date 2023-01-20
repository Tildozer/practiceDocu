/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { fetchPokemon, fetchPokemonInfo } from "../api";
import { PokeDex } from ".";

const PokeHome = (props) => {
  const { setIsLoading, isLoading } = props;
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

  return (
    <div className="bg-black m-10">
      {pokemon.results ? (
        <div>
          <div className="flex justify-center gap-2 h-7">
            <button
              disabled={pokemon.previous && !isLoading ? false : true}
              className={`${
                pokemon.previous
                  ? "bg-white hover:animate-pulse shadow-lg"
                  : "bg-slate-500 shadow-md"
              } h-7 w-20 shadow-yellow-600`}
              onClick={async (_) => {
                document.querySelectorAll(".shiny-sprites").forEach((shiny) => {
                  shiny.className =
                    "shiny-sprites opacity-0 hover:animate-fadeIn hover:cursor-pointer";
                });
                setIsLoading(true);

                return await fetchPokemon(pokemon.previous)
                  .then((data) => setPokemon(data))
                  .catch((err) => console.error(err))
                  .finally((_) => {
                    setTimeout(() => {
                      setIsLoading(false);
                    }, 500);
                  });
              }}
            >
              Previous
            </button>
            <button
              disabled={pokemon.next && !isLoading ? false : true}
              className={`${
                pokemon.next
                  ? "bg-white hover:animate-pulse shadow-lg"
                  : "bg-slate-500 shadow-md"
              } h-7 w-20 shadow-yellow-600`}
              onClick={async (_) => {
                document.querySelectorAll(".shiny-sprites").forEach((shiny) => {
                  shiny.className =
                    "shiny-sprites opacity-0 hover:animate-fadeIn hover:cursor-pointer";
                });
                setIsLoading(true);
                return await fetchPokemon(pokemon.next)
                  .then((data) => {
                    setPokemon(data);
                    setTimeout(() => {}, 1000);
                  })
                  .catch((err) => console.error(err))
                  .finally((_) => {
                    setTimeout(() => {
                      setIsLoading(false);
                    }, 500);
                  });
              }}
            >
              Next
            </button>
          </div>
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-80 gap-10 m-10 border-separate grid absolute min-w-[50rem]">
            <PokeDex pokemonInfo={pokemonInfo} pokemon={pokemon} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PokeHome;
