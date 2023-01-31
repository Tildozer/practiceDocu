import React from "react";

const Sprites = (props) => {
  const { sprites } = props;

  const centerSprites =
    "grid grid-cols-2 w-80 justify-items-center select-none";
  const extraSprites = `${centerSprites} rounded border-2 border-yellow-400 m-2`;
  const offArt = "official-artwork";
  console.log(sprites.versions["generation-ii"].silver.front_default);
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
      <div className="p-4 h-auto grid grid-flow-col w-full justify-start overflow-x-scroll select-none rounded border-2">
        Pokemon Home Sprites:
        {sprites.other.home.front_female ? (
          <>
            <div className={extraSprites}>
              <img src={sprites.other.home.front_female} alt="" />
              <img src={sprites.other.home.front_default} alt="" />
              <img src={sprites.other.home.front_shiny_female} alt="" />
              <img src={sprites.other.home.front_shiny} alt="" />
            </div>
            <>
              Official Artwork:
              <div className={`items-center ${extraSprites}`}>
                <img src={sprites.other[offArt].front_default} alt="" />
                <img src={sprites.other[offArt].front_shiny} alt="" />
              </div>
              {sprites.versions["generation-i"]["red-blue"].front_default ? (
                <>
                  Generation 1:
                  <div className="rounded border-2 border-yellow-400 m-1 p-2 text-center">
                    Red & Blue
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-i"]["red-blue"]
                          .front_default
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-i"]["red-blue"]
                          .back_default
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-i"]["red-blue"].front_gray
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-i"]["red-blue"].back_gray
                      }
                      alt=""
                    />
                    Yellow
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-i"].yellow.front_default
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-i"].yellow.back_default}
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-i"].yellow.front_gray}
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-i"].yellow.back_gray}
                      alt=""
                    />
                  </div>
                </>
              ) : null}
              {sprites.versions["generation-ii"].silver.front_default ? (
                <>
                  Generation 2:
                  <div className="rounded border-2 border-yellow-400 m-1 p-2 text-center">
                    <br />
                    Silver
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-ii"].silver.front_default
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-ii"].silver.back_default
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-ii"].silver.front_shiny}
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-ii"].silver.back_shiny}
                      alt=""
                    />
                    Gold
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-ii"].gold.front_default}
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-ii"].gold.back_default}
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-ii"].gold.front_shiny}
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-ii"].gold.back_shiny}
                      alt=""
                    />
                  </div>
                  <div className="rounded border-2 border-yellow-400 m-1 p-2 text-center flex flex-col justify-center">
                    <br />
                    Crystal
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-ii"].crystal.front_default
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-ii"].crystal.back_default
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-ii"].crystal.front_shiny
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-ii"].crystal.back_shiny}
                      alt=""
                    />
                  </div>
                </>
              ) : null}
            </>
          </>
        ) : (
          <>
            <div className={`items-center ${extraSprites}`}>
              <img src={sprites.other.home.front_default} alt="" />
              <img src={sprites.other.home.front_shiny} alt="" />
            </div>
            <>
              Official Artwork:
              <div className={`items-center ${extraSprites}`}>
                <img src={sprites.other[offArt].front_default} alt="" />
                <img src={sprites.other[offArt].front_shiny} alt="" />
              </div>
              {sprites.versions["generation-i"]["red-blue"].front_default ? (
                <>
                  Generation 1:
                  <div className="rounded border-2 border-yellow-400 m-1 p-2 text-center">
                    Red & Blue
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-i"]["red-blue"]
                          .front_default
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-i"]["red-blue"]
                          .back_default
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-i"]["red-blue"].front_gray
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-i"]["red-blue"].back_gray
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-i"].yellow.front_default
                      }
                      alt=""
                    />
                    Yellow
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-i"].yellow.back_default}
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-i"].yellow.front_gray}
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-i"].yellow.back_gray}
                      alt=""
                    />
                  </div>
                </>
              ) : null}
              {sprites.versions["generation-ii"].silver.front_default ? (
                <>
                  Generation 2:
                  <div className="rounded border-2 border-yellow-400 m-1 p-2 text-center">
                    <br />
                    Silver
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-ii"].silver.front_default
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-ii"].silver.back_default
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-ii"].silver.front_shiny}
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-ii"].silver.back_shiny}
                      alt=""
                    />
                    Gold
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-ii"].gold.front_default}
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-ii"].gold.back_default}
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-ii"].gold.front_shiny}
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-ii"].gold.back_shiny}
                      alt=""
                    />
                  </div>
                  <div className="rounded border-2 border-yellow-400 m-1 p-2 text-center flex flex-col justify-center">
                    <br />
                    Crystal
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-ii"].crystal.front_default
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-ii"].crystal.back_default
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={
                        sprites.versions["generation-ii"].crystal.front_shiny
                      }
                      alt=""
                    />
                    <img
                      className="h-10 w-10 m-1"
                      src={sprites.versions["generation-ii"].crystal.back_shiny}
                      alt=""
                    />
                  </div>
                </>
              ) : null}
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default Sprites;
