import React from "react";

const GenSixSprites = (props) => {
  const { genVI, spritesBorder } = props;
  return (
    <>
      <div>Generation 6:</div>
      {genVI["x-y"].front_female ||
      genVI["omegaruby-alphasapphire"].front_female ? (
        <>
          <div
            className={`${spritesBorder} w-28 text-center flex flex-col items-center`}
          >
            <div
              className={
                genVI["x-y"].front_female &&
                genVI["omegaruby-alphasapphire"].front_female
                  ? ""
                  : "mb-2"
              }
            >
              {genVI["x-y"].front_default ? <div>X & Y</div> : null}
              {genVI["omegaruby-alphasapphire"].front_default ? (
                <div>OmegaRuby & AlphaSapphire</div>
              ) : null}
              <br />
              <span>♂</span>
            </div>
            <img
              className="h-20 w-20"
              src={
                genVI["x-y"].front_default ||
                genVI["omegaruby-alphasapphire"].front_default
              }
              alt=""
            />
            <img
              className="h-20 w-20"
              src={
                genVI["x-y"].front_shiny ||
                genVI["omegaruby-alphasapphire"].front_shiny
              }
              alt=""
            />
            <div>
              <div className="mb-2">
                <br />
                <span>♀</span>
              </div>
              <img
                className="h-20 w-20"
                src={
                  genVI["x-y"].front_female ||
                  genVI["omegaruby-alphasapphire"].front_female
                }
                alt=""
              />
              <img
                className="h-20 w-20"
                src={
                  genVI["x-y"].front_shiny_female ||
                  genVI["omegaruby-alphasapphire"].front_shiny_female
                }
                alt=""
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div>Generation 6:</div>
          <div
            className={`${spritesBorder} w-24 text-center flex flex-col items-center`}
          >
            <div>
              <div className="mb-10">X & Y</div>
              <br />
              <span>♂</span>
            </div>
            <img
              className="h-20 w-20 m-4"
              src={
                genVI["x-y"].front_default ||
                genVI["omegaruby-alphasapphire"].front_default
              }
              alt=""
            />
            <img
              className="h-20 w-20 m-4"
              src={
                genVI["x-y"].front_shiny ||
                genVI["omegaruby-alphasapphire"].front_shiny
              }
              alt=""
            />
          </div>
        </>
      )}
    </>
  );
};

export default GenSixSprites;
