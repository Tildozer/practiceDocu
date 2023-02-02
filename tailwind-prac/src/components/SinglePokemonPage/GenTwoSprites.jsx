import React from "react";

const GenTwoSprites = (props) => {
  const { genII, spritesBorder, singleSprite } = props;
  return (
    <>
      Generation 2:
      <div className={`${spritesBorder} p-2 text-center`}>
        <br />
        <span>Silver</span>
        <img className={singleSprite} src={genII.silver.front_default} alt="" />
        <img className={singleSprite} src={genII.silver.back_default} alt="" />
        <img className={singleSprite} src={genII.silver.front_shiny} alt="" />
        <img className={singleSprite} src={genII.silver.back_shiny} alt="" />
        <span>Gold</span>
        <img className={singleSprite} src={genII.gold.front_default} alt="" />
        <img className={singleSprite} src={genII.gold.back_default} alt="" />
        <img className={singleSprite} src={genII.gold.front_shiny} alt="" />
        <img className={singleSprite} src={genII.gold.back_shiny} alt="" />
      </div>
      <div
        className={`${spritesBorder} p-2 text-center flex flex-col justify-center`}
      >
        <br />
        <span>Crystal</span>
        <img
          className={singleSprite}
          src={genII.crystal.front_default}
          alt=""
        />
        <img className={singleSprite} src={genII.crystal.back_default} alt="" />
        <img className={singleSprite} src={genII.crystal.front_shiny} alt="" />
        <img className={singleSprite} src={genII.crystal.back_shiny} alt="" />
      </div>
    </>
  );
};

export default GenTwoSprites;
