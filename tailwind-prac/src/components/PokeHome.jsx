import React, { useState, useEffect, Fragment } from 'react';
import { fetchPokemon } from '../api';

const PokeHome = () => {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetchPokemon()
    .then(data => setPokemon(data))
    .catch(err => console.error(err));
  }, [])



  return (
    <div id='image-track' className="w-[100vw] h-[100vh] mr-0 ">
      {
        pokemon.results ?
          <div className='grid grid-cols-3 mr-3 absolute flex-wrap'>
            {
              pokemon.results.map((poke, idx) => {
                return (
                  <Fragment key={idx}>

                    <h1 className='text-yellow-600 w-32 h-7 object-cover object-[100% 50%] hover:animate-pulse hover:cursor-pointer select-none'>
                    { [poke.name.slice(0,1).toUpperCase(), poke.name.slice(1)].join('') }
                    </h1>
                  </Fragment>
                )
              })
            } 
            <button className='bg-white h-7 w-12' onClick={_ => console.log(pokemon.next)}>Next</button>
          </div>
        : null
      }
    </div>
  );
}

export default PokeHome;