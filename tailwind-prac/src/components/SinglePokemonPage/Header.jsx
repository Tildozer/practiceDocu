import React from "react";

const Header = (props) => {
  const { weight, height, id, types, name } = props;
  return (
    <>
      <h1>Pokedex Entry # {id}</h1>
      <h1 className="first-letter:capitalize text-[6rem]">
        {name}
      </h1>
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
    </>
  );
};

export default Header;
