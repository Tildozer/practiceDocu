import React from "react";

const GenSevenSprites = (props) => {
  const { genVII, spritesBorder } = props;
  const genVIIBorder = `${spritesBorder} w-32 flex flex-col items-center justify-center`;

  return (
    <>
      <div>Generation 7:</div>
      {genVII["ultra-sun-ultra-moon"].front_female ? (
        <>
          <div className={`${genVIIBorder} border-r-0 mr-0`}>
            <div className="text-center">
              <span>Ultra Sun</span>
            </div>
            <br />
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
          </div>
          <div className={`${genVIIBorder} border-l-0 ml-0`}>
            <span>& Ultra Moon</span>
            <br />
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
        </>
      ) : (
        <div className={genVIIBorder}>
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
