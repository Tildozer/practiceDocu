import React from "react";
import { Fragment } from "react";

const PokeDex = (props) => {
  const { pokemonInfo, pokemon } = props;

  const sprites = "flex flex-row justify-center w-auto m-0";
  const shinyHover =
    "m-3 shiny-sprites opacity-0 hover:animate-fadeIn hover:cursor-pointer";

  const handleClick = (ev) => {
    ev.target.className === shinyHover
      ? (ev.target.className = "shiny-sprites hover:cursor-pointer")
      : (ev.target.className = { shinyHover });
  };

  return pokemon.results.map((poke, idx) => {
    return (
      <div key={idx} className="m-3 flex flex-col justify-center">
        <h1 className="text-yellow-600 text-center self-center w-32 h-10 m-0 hover:cursor-pointer select-none text-xl hover:animate-slowPing">
          {[poke.name.slice(0, 1).toUpperCase(), poke.name.slice(1)].join("")}
        </h1>
        {pokemonInfo.length ? (
          <Fragment>
            <div className={sprites}>
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
            <div className={sprites}>
              <img
                className={shinyHover}
                onClick={(ev) => handleClick(ev)}
                src={pokemonInfo[idx].sprites.front_shiny}
                alt={`${pokemonInfo[idx].name} front facing shiny sprite`}
              />
              <img
                className={shinyHover}
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