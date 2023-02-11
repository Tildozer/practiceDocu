import React from "react";

const ShowSprites = (props) => {
  const { name, setShowSprites, setIsLoading } = props;

  const handleClick = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    setShowSprites(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  };
  return (
    <div>
      <button
        className="bg-white text-slate-700 p-1 border-black border-2 rounded-md box active:bg-slate-400 shadow-md shadow-yellow-500 active:animate-none hover:animate-pulse min-w-[21rem]"
        onClick={(ev) => handleClick(ev)}
      >
        {`Would you like to see the sprites of ${name} throughout the genrations?`}
      </button>
    </div>
  );
};

export default ShowSprites;
