import { Fragment, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PokeHome, Loading, SearchPokemon } from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Fragment>
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route
          exact path ="/"
          element={
            <>
            <Navigate to='/search' />
            </>
          }
        />
        <Route 
        path="/search"
        element={
          <SearchPokemon />
        }
        />
        <Route 
        />
        <Route
          path="/pokedex"
          element={
            <>
              <h1 className="text-yellow-500 text-center text-4xl">Pokédex enteries</h1>
              <PokeHome setIsLoading={setIsLoading} isLoading={isLoading} />   
            </>
          }
        />
      </Routes>   
    </Fragment>
  );
}

export default App;
