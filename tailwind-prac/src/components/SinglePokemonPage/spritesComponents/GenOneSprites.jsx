import React from "react";

const GenOneSprites = (props) => {
  const { genI, spritesBorder, singleSprite } = props;
  return (
    <>
      <div className="text-slate-800">Generation 1:</div>
      <div className={`${spritesBorder} p-2 text-center`}>
        <br />
        <span>Red & Blue</span>
        <img
          className={singleSprite}
          src={genI["red-blue"].front_default}
          alt=""
        />
        <img
          className={singleSprite}
          src={genI["red-blue"].back_default}
          alt=""
        />
        <img
          className={singleSprite}
          src={genI["red-blue"].front_gray}
          alt=""
        />
        <img className={singleSprite} src={genI["red-blue"].back_gray} alt="" />
        <span>Yellow</span>
        <img className={singleSprite} src={genI.yellow.front_default} alt="" />
        <img className={singleSprite} src={genI.yellow.back_default} alt="" />
        <img className={singleSprite} src={genI.yellow.front_gray} alt="" />
        <img className={singleSprite} src={genI.yellow.back_gray} alt="" />
      </div>
    </>
  );
};

export default GenOneSprites;
