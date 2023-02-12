import React from "react";

const GenFourSprites = (props) => {
  const { genIV, spritesBorder } = props;
  const genIVBorder = `${spritesBorder} flex flex-col items-center text-center`;

  return (
    <>
      <div className="text-slate-800">
        <span>Generation 4: </span>
        <br />
        <br />
        <div className="text-center">
          <span>
            Gender differences between select pokemon started in Gen 4.
          </span>
        </div>
      </div>
      {genIV["diamond-pearl"].front_female ||
      genIV["heartgold-soulsilver"].front_female ||
      genIV.platinum.front_female ? (
        <>
          {genIV["diamond-pearl"].front_default ? (
            <>
              <div className={`${genIVBorder} border-r-0 mr-0`}>
                <span className="mb-20">Diamond</span>
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
              <div className={`${genIVBorder} w-16 border-l-0 ml-0`}>
                <span className="mb-20">& Pearl</span>
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
              <div className={`${genIVBorder} w-16 border-r-0 mr-0`}>
                <span className="mb-14">Heart Gold &</span>
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
              <div className={`${genIVBorder} w-16 border-l-0 ml-0`}>
                <div className="mb-14">Soul Silver</div>
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
              <div className={`${genIVBorder} w-16 border-r-0 mr-0`}>
                <span className="mb-20">Platinum</span>
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
              <div className={`${genIVBorder} w-16 border-l-0 ml-0`}>
                <span className="mb-20">
                  <br />
                </span>
                <span>♀</span>
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
            <div className={`${genIVBorder} pl-2 pr-2`}>
              <span className="mb-12">Diamond & Pearl</span>
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
            <div className={`${genIVBorder} w-20 pl-2 pr-2`}>
              <span className="mb-6">Heart Gold & Soul Silver</span>
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
            <div className={`${genIVBorder} pl-2 pr-2`}>
              <span className="mb-20">Platinum</span>
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
