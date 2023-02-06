import React from "react";

const GenSevenSprites = (props) => {
  const { genVII, spritesBorder } = props;
  console.log(genVII["ultra-sun-ultra-moon"].front_default);
  return (
    <>
      <div>Generation 7:</div>
      {genVII["ultra-sun-ultra-moon"].front_female ? (
        <div className={`${spritesBorder} w-32 flex flex-col items-center`}>
          <div className="text-center">
            <span>Ultra Sun</span>
            <br />
            &
            <br />
            <span>Ultra Moon</span>
          </div>
          <span>♂</span>
          <img
            className="h-28 w-28"
            src={genVII["ultra-sun-ultra-moon"].front_default}
            alt=""
          />
          <img
            className="h-28 w-28"
            src={genVII["ultra-sun-ultra-moon"].front_shiny}
            alt=""
          />
          <span>♀</span>
          <img
            className="h-28 w-28"
            src={genVII["ultra-sun-ultra-moon"].front_female}
            alt=""
          />
          <img
            className="h-28 w-28"
            src={genVII["ultra-sun-ultra-moon"].front_shiny_female}
            alt=""
          />
        </div>
      ) : (
        <div className={`${spritesBorder} w-32 flex flex-col items-center`}>
          <div className="text-center">
            <span>Ultra Sun</span>
            <br />
            &
            <br />
            <span>Ultra Moon</span>
            <img
              className="h-28 w-28"
              src={genVII["ultra-sun-ultra-moon"].front_default}
              alt=""
            />
            <img
              className="h-28 w-28"
              src={genVII["ultra-sun-ultra-moon"].front_shiny}
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GenSevenSprites;
