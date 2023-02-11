import React from "react";

const GenThreeSprites = (props) => {
  const { genIII, spritesBorder } = props;
  return (
    <>
      <div className="text-slate-800">Generation 3:</div>
      <div className={`${spritesBorder} p-2 text-center`}>
        {genIII["ruby-sapphire"].front_default ? (
          <div>Ruby & Sapphire</div>
        ) : null}
        <br />
        {genIII.emerald.front_default ? <div>Emerald</div> : null}
        <br />
        {genIII["firered-leafgreen"].front_default ? (
          <div>Fire Red & Leaf Green</div>
        ) : null}
        <img
          className="m-auto"
          src={
            genIII["ruby-sapphire"].front_default ||
            genIII.emerald.front_default ||
            genIII["firered-leafgreen"].front_default
          }
          alt=""
        />
        <img
          className="m-auto"
          src={
            genIII["ruby-sapphire"].back_default ||
            genIII.emerald.back_default ||
            genIII["firered-leafgreen"].front_shiny
          }
          alt=""
        />
        <img
          className="m-auto"
          src={
            genIII["ruby-sapphire"].front_shiny ||
            genIII.emerald.front_shiny ||
            genIII["firered-leafgreen"].back_default
          }
          alt=""
        />
        <img
          className="m-auto"
          src={
            genIII["ruby-sapphire"].back_shiny ||
            genIII.emerald.back_shiny ||
            genIII["firered-leafgreen"].back_shiny
          }
          alt=""
        />
      </div>
    </>
  );
};

export default GenThreeSprites;
