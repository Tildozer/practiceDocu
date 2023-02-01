import React from "react";

const GenThreeSprites = (props) => {
  const { genIII } = props;
  return (
    <>
      Generation 3:
      <div className="rounded border-2 border-yellow-400 m-1 p-2 text-center">
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
          src={
            genIII["ruby-sapphire"].front_default ||
            genIII.emerald.front_default ||
            genIII["firered-leafgreen"].front_default
          }
          alt=""
        />
        <img
          src={
            genIII["ruby-sapphire"].back_default ||
            genIII.emerald.back_default ||
            genIII["firered-leafgreen"].front_shiny
          }
          alt=""
        />
        <img
          src={
            genIII["ruby-sapphire"].front_shiny ||
            genIII.emerald.front_shiny ||
            genIII["firered-leafgreen"].back_default
          }
          alt=""
        />
        <img
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
