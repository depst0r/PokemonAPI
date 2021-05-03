import React, { usaeState, useState } from 'react'
import { fetchApi } from './Api/Api'

export const App = () => {
  const [pokemon, setPokemon] = useState(null)

  fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000&offset=200`)
    .then(res => res.json())
    .then(res => setPokemon(res.results))

  return (
    <>
      <div>
        <h1>h1b</h1>
      </div>
    </>
  )
}
