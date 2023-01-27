import { Fragment, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PokeHome, Loading, SearchPokemon, SinglePokemon } from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [singlePokemon, setSinglePokemon] = useState({});

  return (
    <Fragment>
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
              setSinglePokemon={setSinglePokemon}
            />
          }
        />
        <Route />
        <Route
          path="/pokedex"
          element={
            <>
              <h1 className="text-yellow-500 text-center text-4xl">
                Pokédex enteries
              </h1>
              <PokeHome 
                setIsLoading={setIsLoading} 
                isLoading={isLoading} 
              />
            </>
          }
        />
        <Route
          path="/singlePokemon/:name"
          element={
            <SinglePokemon
              singlePokemon={singlePokemon}
              setIsLoading={setIsLoading}
              setSinglePokemon={setSinglePokemon}
            />
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
