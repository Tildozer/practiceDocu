import React from "react";

const HomeSprites = (props) => {
  const { extraSprites, home } = props;
  return (
    <>
      {home.front_female ? (
        <div className={extraSprites}>
          <img src={home.front_female} alt="" />
          <img src={home.front_default} alt="" />
          <img src={home.front_shiny_female} alt="" />
          <img src={home.front_shiny} alt="" />
        </div>
      ) : (
        <div className={`items-center ${extraSprites}`}>
          <img src={home.front_default} alt="" />
          <img src={home.front_shiny} alt="" />
        </div>
      )}
    </>
  );
};

export default HomeSprites;
