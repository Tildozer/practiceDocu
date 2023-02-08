import React from "react";

const Header = (props) => {
  const {
    weight,
    height,
    id,
    types,
    name,
    front_default,
    back_default,
    front_shiny,
    back_shiny,
    front_female,
    back_female,
    front_shiny_female,
    back_shiny_female,
  } = props;
  return (
    <>
      <h1>Pokedex Entry # {id}</h1>
      <h1 className="first-letter:capitalize text-[6rem]">{name}</h1>
      <div className="flex">
        <h2 className="m-2">Weight: {weight}hg</h2>
        <h2 className="m-2">Height: {height}dm</h2>
        {types ? (
          <div className="m-2">
            Typing :
            {types.map((typing, idx) => (
              <span key={idx}>
                {" "}
                {idx + 1}.{" "}
                {typing.type.name.slice(0, 1).toUpperCase() +
                  typing.type.name.slice(1)}{" "}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col items-center">
        {front_female ? (
          <>
            ♀
            <div className="grid grid-cols-2 w-80 justify-items-center select-none">
              <img src={front_female} alt="" />
              <img src={back_female} alt="" />
              <img src={front_shiny_female} alt="" />
              <img src={back_shiny_female} alt="" />
            </div>
            ♂
          </>
        ) : null}
        <div className="grid grid-cols-2 w-80 justify-items-center select-none">
          <img src={front_default} alt="" />
          <img src={back_default} alt="" />
          <img src={front_shiny} alt="" />
          <img src={back_shiny} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
