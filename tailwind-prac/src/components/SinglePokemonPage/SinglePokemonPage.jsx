/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPokemonInfo } from "../../api";
import { Sprites, Moves, Stats, Abilities } from ".";

const SinglePokemonPage = (props) => {
  const { singlePokemon, setIsLoading, setSinglePokemon } = props;
  // split the hash if they load into the page from new session
  const urlRoutes = window.location.hash.split("/");
  const pokemon = urlRoutes[urlRoutes.length - 1];
  const { sprites, abilities, moves, stats } = singlePokemon

  const nav = useNavigate();

  const checkForPokemon = async (search) => {
    if (!singlePokemon.name) {
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
    // checkForPokemon(pokemon);
  }, []);

  return (
  <div className="text-yellow-500">
    <Sprites />
    <Stats />
    <Abilities />
    <Moves />
  </div>);
};

export default SinglePokemonPage;
