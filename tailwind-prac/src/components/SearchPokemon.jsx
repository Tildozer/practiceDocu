import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPokemonInfo } from "../api";

const SearchPokemon = (props) => {
  const { setIsLoading, singlePokemon, setSinglePokemon } = props;

  const [search, setSearch] = useState("");
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (singlePokemon.name) {
      setSinglePokemon({});
    }
    setIsLoading(true);
    try {
      const data = await fetchPokemonInfo(search.toLowerCase());
      if (data) {
        setErr("");
        setSinglePokemon(data);
        nav(`/singlePokemon/${search}`);
      } else {
        setErr("Sorry, Try something else.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 250);
    }
  };

  return (
    <div className="flex flex-col bg-slate-700 gap-10 justify-center items-center h-full w-full">
      <h1 className="text-yellow-500">{err}</h1>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <input
          placeholder="enter Pokemon name..."
          className="text-yellow-700 m-5"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <button className="bg-white">Search!</button>
      </form>
      <button className="bg-white w-64" onClick={(ev) => nav("/pokedex")}>
        Look through the Pokedex
      </button>
    </div>
  );
};

export default SearchPokemon;
