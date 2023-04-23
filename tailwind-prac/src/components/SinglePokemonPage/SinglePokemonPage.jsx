/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPokemonInfo } from "../../api";
import { Sprites, Stats, Abilities, Header } from ".";
import { useState } from "react";
import { ShowSprites } from "./spritesComponents";

const SinglePokemonPage = (props) => {
  const { singlePokemon, setIsLoading, setSinglePokemon } = props;

  // split the hash if they load into the page from new session
  const urlRoutes = window.location.hash.split("/");
  const pokemon = urlRoutes[urlRoutes.length - 1].toLowerCase();
  const { sprites, abilities, stats, weight, height, id, types, name } =
    singlePokemon;

  const [showSprites, setShowSprites] = useState(false);
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
          <Header
            singlePokemon={singlePokemon}
            weight={weight}
            height={height}
            id={id}
            types={types}
            name={name}
            front_default={sprites.front_default}
            front_shiny={sprites.front_shiny}
            back_default={sprites.back_default}
            back_shiny={sprites.back_shiny}
            front_female={sprites.front_female}
            front_shiny_female={sprites.front_shiny_female}
            back_female={sprites.back_female}
            back_shiny_female={sprites.back_shiny_female}
          />
          <Stats stats={stats} />
          {showSprites ? (
            <Sprites sprites={sprites} setShowSprites={setShowSprites} />
          ) : (
            <ShowSprites
              setShowSprites={setShowSprites}
              name={name}
              setIsLoading={setIsLoading}
            />
          )}

          <Abilities abilities={abilities} />
        </>
      ) : null}
    </div>
  );
};

export default SinglePokemonPage;
