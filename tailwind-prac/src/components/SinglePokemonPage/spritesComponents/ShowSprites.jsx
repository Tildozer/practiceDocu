import React from "react";

const ShowSprites = (props) => {
  const {name} = props
  return (
  <div>
    <span>{`Would you like to see the sprites of ${name}?`}</span>
  </div>
  );
};

export default ShowSprites;
