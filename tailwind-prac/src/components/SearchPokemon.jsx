import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SearchPokemon = () => {
  const [search, setSearch] = useState('')
  const nav = useNavigate();
  
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSearch('')
  }

  return (
    <div className='flex flex-col gap-10 justify-center items-center h-full w-full'>
      <form onSubmit={ev => handleSubmit(ev)}>
        <input 
          placeholder='enter Pokemon name...' 
          className='text-yellow-700 m-5'
          value={ search } 
          onChange={ev => setSearch(ev.target.value)} 
        />
        <button className='bg-white'>Search!</button>
      </form>
      <button 
        className='bg-white w-64'
        onClick={ev => nav('/pokedex')}
      >
        Look through the Pokedex
      </button>
    </div>
  )
}

export default SearchPokemon;
