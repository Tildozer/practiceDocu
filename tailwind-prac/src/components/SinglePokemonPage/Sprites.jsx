import React from "react";

const Sprites = (props) => {
  const { sprites } = props;

  return (
    <div className="flex">
      {sprites.front_female ? (
        <>
          ♀
          <div className="grid grid-cols-2 w-80 justify-center">
            <img src={sprites.front_female} alt="" />
            <img src={sprites.back_female} alt="" />
            <img src={sprites.front_shiny_female} alt="" />
            <img src={sprites.back_shiny_female} alt="" />
          </div>
          ♂
        </>
      ) : null}
      <div className="grid grid-cols-2 w-80 justify-items-center">
        <img src={sprites.front_default} alt="" />
        <img src={sprites.back_default} alt="" />
        <img src={sprites.front_shiny} alt="" />
        <img src={sprites.back_shiny} alt="" />
      </div>
    </div>
  );
};

export default Sprites;
