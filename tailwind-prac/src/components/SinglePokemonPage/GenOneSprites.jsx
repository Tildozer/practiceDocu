import React from "react";

const GenOneSprites = (props) => {
  const { genI } = props;
  return (
    <>
      Generation 1:
      <div className="rounded border-2 border-yellow-400 m-1 p-2 text-center">
        Red & Blue
        <img
          className="h-10 w-10 m-1"
          src={genI["red-blue"].front_default}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genI["red-blue"].back_default}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genI["red-blue"].front_gray}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genI["red-blue"].back_gray}
          alt=""
        />
        Yellow
        <img
          className="h-10 w-10 m-1"
          src={genI.yellow.front_default}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genI.yellow.back_default}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genI.yellow.front_gray}
          alt=""
        />
        <img
          className="h-10 w-10 m-1"
          src={genI.yellow.back_gray}
          alt=""
        />
      </div>
    </>
  );
};

export default GenOneSprites;
