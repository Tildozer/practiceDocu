import { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { PokeHome, Loading } from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Fragment>
      <h1 className="text-yellow-500 text-center text-4xl">Pokédex enteries</h1>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <PokeHome setIsLoading={setIsLoading} isLoading={isLoading} />
              {isLoading ? <Loading /> : null}
            </>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
