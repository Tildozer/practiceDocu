import React from "react";

const GenFourSprites = (props) => {
  const { genIV, spritesBorder } = props;
  const genIVBorder = `${spritesBorder} flex flex-col items-center text-center`;

  return (
    <>
      <div>
        <span>Generation 4: </span>
        <br />
        <span>Gender differences between pokemon started in Gen 4.</span>
      </div>
      {genIV["diamond-pearl"].front_female ||
      genIV["heartgold-soulsilver"].front_default ||
      genIV.platinum.front_default ? (
        <>
          {genIV["diamond-pearl"].front_default ? (
            <>
              <div className={`${genIVBorder} border-r-0`}>
                <span className="mb-12">Diamond & Pearl</span>
                <span>♂</span>
                <img
                  className="h-16 w-16"
                  src={genIV["diamond-pearl"].front_default}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV["diamond-pearl"].front_shiny}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV["diamond-pearl"].back_default}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV["diamond-pearl"].back_shiny}
                  alt=""
                />
              </div>
              <div className={`${genIVBorder} justify-center w-16 border-l-0`}>
                <span>♀</span>
                <img
                  className="h-16 w-16"
                  src={genIV["diamond-pearl"].front_female}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV["diamond-pearl"].front_shiny_female}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV["diamond-pearl"].back_female}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV["diamond-pearl"].back_shiny_female}
                  alt=""
                />
              </div>
            </>
          ) : null}
          {genIV["heartgold-soulsilver"].front_default ? (
            <>
              <div className={`${genIVBorder} w-16 border-r-0`}>
                <span>Heart Gold & Soul Silver</span>
                <span>♂</span>
                <img
                  className="h-16 w-16"
                  src={genIV["heartgold-soulsilver"].front_default}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV["heartgold-soulsilver"].front_shiny}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV["heartgold-soulsilver"].back_default}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV["heartgold-soulsilver"].back_shiny}
                  alt=""
                />
              </div>
              <div className={`${genIVBorder} justify-center w-16 border-l-0`}>
                <span>♀</span>
                <img
                  className="h-16 w-16"
                  src={genIV["heartgold-soulsilver"].front_female}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV["heartgold-soulsilver"].front_shiny_female}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV["heartgold-soulsilver"].back_female}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV["heartgold-soulsilver"].back_shiny_female}
                  alt=""
                />
              </div>
            </>
          ) : null}
          {genIV.platinum.front_default ? (
            <>
              <div className={`${genIVBorder} w-16 border-r-0`}>
                <span className="mb-[4.25rem]">Platinum</span>
                <span>♂</span>
                <img
                  className="h-16 w-16"
                  src={genIV.platinum.front_default}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV.platinum.front_shiny}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV.platinum.back_default}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV.platinum.back_shiny}
                  alt=""
                />
              </div>
              <div className={`${genIVBorder} w-16 border-l-0`}>
                <span className="mb-[5.25rem]"></span>
                <span className="mb-2">♀</span>
                <img
                  className="h-16 w-16"
                  src={genIV.platinum.front_female}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV.platinum.front_shiny_female}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV.platinum.back_female}
                  alt=""
                />
                <img
                  className="h-16 w-16"
                  src={genIV.platinum.back_shiny_female}
                  alt=""
                />
              </div>
            </>
          ) : null}
        </>
      ) : (
        <>
          {genIV["diamond-pearl"].front_default ? (
            <div className={`${genIVBorder}`}>
              <span>Diamond & Pearl</span>
              <img
                className="h-16 w-16"
                src={genIV["diamond-pearl"].front_default}
                alt=""
              />
              <img
                className="h-16 w-16"
                src={genIV["diamond-pearl"].front_shiny}
                alt=""
              />
              <img
                className="h-16 w-16"
                src={genIV["diamond-pearl"].back_default}
                alt=""
              />
              <img
                className="h-16 w-16"
                src={genIV["diamond-pearl"].back_shiny}
                alt=""
              />
            </div>
          ) : null}
          {genIV["heartgold-soulsilver"].front_default ? (
            <div className={`${genIVBorder} w-20`}>
              <span>Heart Gold & Soul Silver</span>
              <img
                className="h-16 w-16"
                src={genIV["heartgold-soulsilver"].front_default}
                alt=""
              />
              <img
                className="h-16 w-16"
                src={genIV["heartgold-soulsilver"].front_shiny}
                alt=""
              />
              <img
                className="h-16 w-16"
                src={genIV["heartgold-soulsilver"].back_default}
                alt=""
              />
              <img
                className="h-16 w-16"
                src={genIV["heartgold-soulsilver"].back_shiny}
                alt=""
              />
            </div>
          ) : null}
          {genIV.platinum.front_default ? (
            <div className={`${genIVBorder}`}>
              <span>Platinum</span>
              <img
                className="h-16 w-16"
                src={genIV.platinum.front_default}
                alt=""
              />
              <img
                className="h-16 w-16"
                src={genIV.platinum.front_shiny}
                alt=""
              />
              <img
                className="h-16 w-16"
                src={genIV.platinum.back_default}
                alt=""
              />
              <img
                className="h-16 w-16"
                src={genIV.platinum.back_shiny}
                alt=""
              />
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default GenFourSprites;
