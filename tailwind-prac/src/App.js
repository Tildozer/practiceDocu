import { Fragment, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PokeHome, SearchPokemon, SinglePokemon, Loading } from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [singlePokemon, setSinglePokemon] = useState({});

  return (
    <div>
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navigate to="/search" />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <SearchPokemon
              setIsLoading={setIsLoading}
              singlePokemon={singlePokemon}
              setSinglePokemon={setSinglePokemon}
            />
          }
        />
        <Route />
        <Route
          path="/pokedex/:num"
          element={
            <div className="bg-gradient-to-r from-slate-700 to-slate-800">
              <h1 className="text-yellow-500 p-10 text-center text-4xl">
                Pokédex enteries
              </h1>
              <PokeHome setIsLoading={setIsLoading} isLoading={isLoading} />
            </div>
          }
        />
        <Route
          path="/singlePokemon/:name"
          element={
            <SinglePokemon
              setIsLoading={setIsLoading}
              singlePokemon={singlePokemon}
              setSinglePokemon={setSinglePokemon}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
