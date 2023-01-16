import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  PokeHome
} from './index.js';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path='/' element={<PokeHome />}/>
      </Routes>
      
    </Fragment>
  )
}

export default App;
