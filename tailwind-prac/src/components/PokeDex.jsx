import React from "react";
import { Fragment } from "react";

const PokeDex = (props) => {
  const { pokemonInfo, pokemon } = props;

  const handleClick = (ev) => {
    ev.target.className ===
    "shiny-sprites opacity-0 hover:animate-fadeIn hover:cursor-pointer"
      ? (ev.target.className = "shiny-sprites hover:cursor-pointer")
      : (ev.target.className =
          "shiny-sprites opacity-0 hover:animate-fadeIn hover:cursor-pointer");
  };

  return pokemon.results.map((poke, idx) => {
    return (
      <div key={idx} className="m-3">
        <h1 className="text-yellow-600 text-center w-32 h-10 m-0 hover:cursor-pointer select-none text-xl hover:animate-slowPing">
          {[poke.name.slice(0, 1).toUpperCase(), poke.name.slice(1)].join("")}
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
                className="shiny-sprites opacity-0 hover:animate-fadeIn hover:cursor-pointer"
                onClick={(ev) => handleClick(ev)}
                src={pokemonInfo[idx].sprites.front_shiny}
                alt={`${pokemonInfo[idx].name} front facing shiny sprite`}
              />
              <img
                className="shiny-sprites opacity-0 hover:animate-fadeIn hover:cursor-pointer"
                onClick={(ev) => handleClick(ev)}
                src={pokemonInfo[idx].sprites.back_shiny}
                alt={`${pokemonInfo[idx].name} back facing shiny sprite`}
              />
            </div>
          </Fragment>
        ) : null}
      </div>
    );
  });
};

export default PokeDex;
