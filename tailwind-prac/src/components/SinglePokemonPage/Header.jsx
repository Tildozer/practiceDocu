import React from "react";

const Header = (props) => {
  const { singlePokemon } = props;
  return (
    <>
      <h1>Pokedex Entry # {singlePokemon.id}</h1>
      <h1 className="first-letter:capitalize text-[6rem]">
        {singlePokemon.name}
      </h1>
      <div className="flex">
        <h2 className="m-2">weight: {singlePokemon.weight}hg</h2>
        <h2 className="m-2">Height: {singlePokemon.height}dam</h2>
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
    </>
  );
};

export default Header;
