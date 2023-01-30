/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPokemonInfo } from "../../api";
import { Sprites, Moves, Stats, Abilities } from ".";

const SinglePokemonPage = (props) => {
  const { singlePokemon, setIsLoading, setSinglePokemon } = props;
  // split the hash if they load into the page from new session
  const urlRoutes = window.location.hash.split("/");
  const pokemon = urlRoutes[urlRoutes.length - 1].toLowerCase();
  const { sprites, abilities, moves, stats } = singlePokemon;

  const nav = useNavigate();

  const checkForPokemon = async (search) => {
    if (!singlePokemon.name || singlePokemon.name !== pokemon) {
      try {
        const data = await fetchPokemonInfo(search);
        if (data) {
          setSinglePokemon(data);
        } else {
          nav("/search");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 250);
      }
    }
  };
  useEffect(() => {
    setIsLoading(true);
    checkForPokemon(pokemon);
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  }, [pokemon]);

  return (
    <div className="flex flex-col items-center text-yellow-500 bg-slate-700 h-full w-full">
      {singlePokemon.name ? (
        <>
          <h1 className="first-letter:capitalize text-[6rem]">
            {singlePokemon.name}
          </h1>
          <div className="flex">
            <h2 className="m-2">weight: {singlePokemon.weight}hg</h2>
            {singlePokemon.types ? (
              <div className="m-2">
                Typing :
                {singlePokemon.types.map((typing, idx) => (
                  <span key={idx}>
                    {" "}
                    {idx + 1}. {typing.type.name}{" "}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <Sprites sprites={sprites} />
          <Stats stats={stats} />
          <Abilities abilities={abilities} />
          <Moves moves={moves} />
        </>
      ) : null}
    </div>
  );
};

export default SinglePokemonPage;
