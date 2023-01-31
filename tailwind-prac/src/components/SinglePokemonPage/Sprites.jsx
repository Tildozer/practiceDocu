import React from "react";

const Sprites = (props) => {
  const { sprites } = props;

  const centerSprites =
    "grid grid-cols-2 w-80 justify-items-center select-none";
  const offArt = "official-artwork";
  // console.log(sprites.other)
  return (
    <div className="flex flex-col items-center">
      {sprites.front_female ? (
        <>
          ♀
          <div className={centerSprites}>
            <img src={sprites.front_female} alt="" />
            <img src={sprites.back_female} alt="" />
            <img src={sprites.front_shiny_female} alt="" />
            <img src={sprites.back_shiny_female} alt="" />
          </div>
          ♂
        </>
      ) : null}
      <div className={centerSprites}>
        <img src={sprites.front_default} alt="" />
        <img src={sprites.back_default} alt="" />
        <img src={sprites.front_shiny} alt="" />
        <img src={sprites.back_shiny} alt="" />
      </div>
      <div className="p-4 h-96 grid grid-flow-col w-full justify-start overflow-x-scroll select-none">
        Pokemon Home Sprites :
        {sprites.other.home.front_female ? (
          <>
            <div className={centerSprites}>
              <img src={sprites.other.home.front_female} alt="" />
              <img src={sprites.other.home.front_default} alt="" />
              <img src={sprites.other.home.front_shiny_female} alt="" />
              <img src={sprites.other.home.front_shiny} alt="" />
            </div>
            <>
              Official Artwork :
              <div className={`items-center ${centerSprites}`}>
                <img src={sprites.other[offArt].front_default} alt="" />
                <img src={sprites.other[offArt].front_shiny} alt="" />
              </div>
            </>
          </>
        ) : (
          <>
            <div className={centerSprites}>
              <img src={sprites.other.home.front_default} alt="" />
              <img src={sprites.other.home.front_shiny} alt="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sprites;
