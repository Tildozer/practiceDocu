import React from "react";

const GenFiveSprites = (props) => {
  const { genV, spritesBorder } = props;
  return (
    <>
      {genV["black-white"].front_female ? (
        <>
          <div>Generation 5:</div>
          <div
            className={`${spritesBorder} w-24 text-center flex flex-col items-center border-r-0`}
          >
            <div>
              <div className="mb-10">Black &</div>
              <br />
              <span>♂</span>
            </div>
            <img
              className="h-20 w-20"
              src={genV["black-white"].front_default}
              alt=""
            />
            <img
              className="h-20 w-20"
              src={genV["black-white"].front_shiny}
              alt=""
            />
            <img
              className="h-20 w-20"
              src={genV["black-white"].back_default}
              alt=""
            />
            <img
              className="h-20 w-20"
              src={genV["black-white"].back_shiny}
              alt=""
            />
          </div>
          <div
            className={`${spritesBorder} w-24 text-center flex flex-col items-center border-l-0`}
          >
            <div>
              <div className="mb-10">White</div>
              <br />
              <span>♀</span>
            </div>
            <img
              className="h-20 w-20"
              src={genV["black-white"].front_female}
              alt=""
            />
            <img
              className="h-20 w-20"
              src={genV["black-white"].front_shiny_female}
              alt=""
            />
            <img
              className="h-20 w-20"
              src={genV["black-white"].back_female}
              alt=""
            />
            <img
              className="h-20 w-20"
              src={genV["black-white"].back_shiny_female}
              alt=""
            />
          </div>
        </>
      ) : (
        <>
          <div>Generation 5:</div>
          <div
            className={`${spritesBorder} w-24 text-center flex flex-col items-center`}
          >
            <div className="mb-10">Black & White</div>
            <img
              className="h-20 w-20"
              src={genV["black-white"].front_default}
              alt=""
            />
            <img
              className="h-20 w-20"
              src={genV["black-white"].front_shiny}
              alt=""
            />
            <img
              className="h-20 w-20"
              src={genV["black-white"].back_default}
              alt=""
            />
            <img
              className="h-20 w-20"
              src={genV["black-white"].back_shiny}
              alt=""
            />
          </div>
        </>
      )}
    </>
  );
};

export default GenFiveSprites;
