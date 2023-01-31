/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPokemonInfo } from "../../api";
import { Sprites, Moves, Stats, Abilities, Header } from ".";

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
    <div className="flex flex-col items-center overflow-x-hidden text-yellow-500 bg-slate-700">
      {singlePokemon.name ? (
        <>
          <Header singlePokemon={singlePokemon} />
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
