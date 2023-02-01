import React from "react";

const GenTwoSprites = (props) => {
  const { genII } = props;
  return (
    <>
      Generation 2:
      <div className="rounded border-2 border-yellow-400 m-1 p-2 text-center">
        <br />
        Silver
        <img
          className="h-10 w-10 m-1"
          src={genII.silver.front_default}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genII.silver.back_default}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genII.silver.front_shiny}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genII.silver.back_shiny}
          alt=""
        />
        Gold
        <img
          className="h-10 w-10 m-1"
          src={genII.gold.front_default}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genII.gold.back_default}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genII.gold.front_shiny}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genII.gold.back_shiny}
          alt=""
        />
      </div>
      <div className="rounded border-2 border-yellow-400 m-1 p-2 text-center flex flex-col justify-center">
        <br />
        Crystal
        <img
          className="h-10 w-10 m-1"
          src={genII.crystal.front_default}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genII.crystal.back_default}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genII.crystal.front_shiny}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genII.crystal.back_shiny}
          alt=""
        />
      </div>
    </>
  );
};

export default GenTwoSprites;
