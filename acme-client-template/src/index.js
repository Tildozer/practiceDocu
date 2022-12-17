import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { useParams, HashRouter, Routes, Route, Link, useLocation} from 'react-router-dom';

import {default as Product} from './components/Product.js'
import {default as Products} from './components/Products.js'

const Nav = ({ products }) => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <nav>
      <Link className={ pathName === / ? 'selected' : '' }></Link>
      <Link className={ pathName.startsWith('/products') ? 'selected' : '' }></Link>
    </nav>
  )
}

const App = ()=> {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://www.acme-api.com/api/products')
    .then(res => res.json())
    .then(json => setProducts(json))
    .catch(err => console.error(err))
  }, [])
  return (
    <div>
      <h1>React Client Template</h1>
      <Routes>
        <Route 
          path='/'
          element={
            <nav products={ products }/>
          }
        />
      </Routes>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products ({products.length})</Link>
      </nav>
      <Routes>
        <Route path='/' element= { <div>Home</div> } />
        <Route path='/products' element={
          <Products products={ products }/>
        }/>
        <Route path='/products/:id' element ={
          <Product products={ products }/>
        } />
      </Routes> 
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
