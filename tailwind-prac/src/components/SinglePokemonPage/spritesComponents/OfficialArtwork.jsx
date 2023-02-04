import React from "react";

const OfficialArtwork = (props) => {
  const { officialArt, extraSprites } = props;
  return (
    <div className={`items-center ${extraSprites}`}>
      <img src={officialArt.front_default} alt="" />
      <img src={officialArt.front_shiny} alt="" />
    </div>
  );
};

export default OfficialArtwork;
