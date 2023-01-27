import React from "react";

const PrevAndNextButtons = (props) => {
  const { pokemon, setIsLoading, isLoading, fetchPokemon, setPokemon } = props;

  const handleClick = async (fetchUrl) => {
    document.querySelectorAll(".shiny-sprites").forEach((shiny) => {
      shiny.className =
        "m-3 shiny-sprites opacity-0 hover:animate-fadeIn hover:cursor-pointer";
    });
    setIsLoading(true);
    return await fetchPokemon(fetchUrl)
      .then((data) => setPokemon(data))
      .catch((err) => console.error(err))
      .finally((_) => {
        setTimeout((_) => {
          setIsLoading(false);
        }, 500);
      });
  };

  return (
    <div className="flex justify-center gap-2 h-7">
      <button
        disabled={!pokemon.previous}
        className={`${
          pokemon.previous && !isLoading
            ? "bg-white hover:animate-pulse shadow-lg"
            : "bg-slate-500 shadow-md"
        } h-7 w-20 shadow-yellow-600`}
        onClick={(_) => handleClick(pokemon.previous)}
      >
        Previous
      </button>
      <button
        disabled={!pokemon.next}
        className={`${
          pokemon.next && !isLoading
            ? "bg-white hover:animate-pulse shadow-lg"
            : "bg-slate-500 shadow-md"
        } h-7 w-20 shadow-yellow-600`}
        onClick={(_) => handleClick(pokemon.next)}
      >
        Next
      </button>
    </div>
  );
};

export default PrevAndNextButtons;
