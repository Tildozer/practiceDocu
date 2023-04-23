/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { fetchPokemon, fetchPokemonInfo } from "../../api";
import { PokeDex, PrevAndNextButtons } from "..";
import { useNavigate, useParams } from "react-router-dom";

const PokeHome = (props) => {
  const { setIsLoading, isLoading } = props;
  const [pokemon, setPokemon] = useState({});
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const { num } = useParams();
  const nav = useNavigate();
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
    if (+num > 106) {
      return nav("/pokedex/105");
    }
    fetchPokemon(+num)
      .then((data) => {
        console.log(data);
        setPokemon(data);
      })
      .catch((err) => console.error(err));
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [num]);

  useEffect(() => {
    getAllPokemonInfo();
  }, [pokemon]);

  return (
    <div className="m-10 min-h-[100vh]">
      {pokemon.results ? (
        <div>
          <PrevAndNextButtons
            pokemon={pokemon}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            fetchPokemon={fetchPokemon}
            setPokemon={setPokemon}
          />
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-80 border-separate md:min-w-[50rem]">
              <PokeDex pokemonInfo={pokemonInfo} pokemon={pokemon} />
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[100vh]"></div>
      )}
    </div>
  );
};

export default PokeHome;
