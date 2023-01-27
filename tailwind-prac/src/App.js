import { Fragment, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PokeHome, Loading, SearchPokemon, SinglePokemon } from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [singlePokemon, setSinglePokemon] = useState({});

  return (
    <div className="bg-slate-800">
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
          path="/pokedex"
          element={
            <div >
              <h1 className="text-yellow-500 p-10 text-center text-4xl">
                Pokédex enteries
              </h1>
              <PokeHome 
                setIsLoading={setIsLoading} 
                isLoading={isLoading} 
              />
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
