import React from "react";
import {
  HomeSprites,
  OfficialArtwork,
  GenOneSprites,
  GenTwoSprites,
  GenThreeSprites,
  GenFourSprites,
  GenFiveSprites,
  GenSixSprites,
  GenSevenSprites,
} from ".";

const Sprites = (props) => {
  const {
    sprites,
    sprites: {
      other: { home },
    },
    sprites: { versions },
  } = props;
  const officialArt = sprites.other["official-artwork"];
  const [genI, genII, genIII, genIV, genV, genVI, genVII] = [
    versions["generation-i"],
    versions["generation-ii"],
    versions["generation-iii"],
    versions["generation-iv"],
    versions["generation-v"],
    versions["generation-vi"],
    versions["generation-vii"],
  ];
  const centerSprites =
    "grid grid-cols-2 w-80 justify-items-center select-none";
  const spritesBorder = "rounded border-2 border-yellow-400 m-2";
  const extraSprites = `${centerSprites} ${spritesBorder}`;
  const singleSprite = "h-10 w-10 m-auto mt-1 mb-1";

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
        <HomeSprites extraSprites={extraSprites} home={home} />
        Official Artwork:
        <OfficialArtwork
          officialArt={officialArt}
          extraSprites={extraSprites}
        />
        {sprites.versions["generation-i"]["red-blue"].front_default ? (
          <GenOneSprites
            genI={genI}
            spritesBorder={spritesBorder}
            singleSprite={singleSprite}
          />
        ) : null}
        {sprites.versions["generation-ii"].silver.front_default ? (
          <GenTwoSprites
            genII={genII}
            spritesBorder={spritesBorder}
            singleSprite={singleSprite}
          />
        ) : null}
        {genIII.emerald.front_default ||
        genIII["firered-leafgreen"].front_default ||
        genIII["ruby-sapphire"].front_default ? (
          <GenThreeSprites genIII={genIII} spritesBorder={spritesBorder} />
        ) : null}
        {genIV["diamond-pearl"].front_default ||
        genIV["heartgold-soulsilver"].front_default ||
        genIV.platinum.front_default ? (
          <GenFourSprites genIV={genIV} spritesBorder={spritesBorder} />
        ) : null}
        {genV["black-white"].front_default ? (
          <GenFiveSprites genV={genV} spritesBorder={spritesBorder} />
        ) : null}
        {genVI["omegaruby-alphasapphire"].front_default ||
        genVI["x-y"].front_default ? (
          <GenSixSprites genVI={genVI} spritesBorder={spritesBorder} />
        ) : null}
        {genVI["omegaruby-alphasapphire"].front_default ||
        genVII["ultra-sun-ultra-moon"].front_default ? (
          <GenSevenSprites genVII={genVII} spritesBorder={spritesBorder} />
        ) : null}
      </div>
    </div>
  );
};

export default Sprites;
