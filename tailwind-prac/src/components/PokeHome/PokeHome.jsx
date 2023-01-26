/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { fetchPokemon, fetchPokemonInfo } from "../../api";
import { PokeDex, PrevAndNextButtons } from "..";

const PokeHome = (props) => {
  const { setIsLoading } = props;
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
    setIsLoading(true);
    fetchPokemon()
      .then((data) => setPokemon(data))
      .catch((err) => console.error(err));
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  }, []);

  useEffect(() => {
    getAllPokemonInfo();
  }, [pokemon]);

  return (
    <div className="bg-black m-10">
      {pokemon.results ? (
        <div>
          <PrevAndNextButtons
            pokemon={pokemon}
            setIsLoading={setIsLoading}
            fetchPokemon={fetchPokemon}
            setPokemon={setPokemon}
          />
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-80 border-separate md:min-w-[50rem]">
              <PokeDex pokemonInfo={pokemonInfo} pokemon={pokemon} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PokeHome;
