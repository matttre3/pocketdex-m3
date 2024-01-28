import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Home from './Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonDetails from './PokemonDetails'



const App = () => {



  useEffect(() => {
    async function init() {
      try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
        const list = await data.json()
        const details = list.results.map(item => fetch(item.url).then(item => item.json()))
        const pokemons = await Promise.all(details)
        setPokeData(pokemons)
      } catch (e) {
        console.error(e)
      }
    }

    init()
  }, [])

  const [pokeData, setPokeData] = useState([])
  const [typeInfo, setTypeInfo] = useState([])



  return (
    <div>

      <Routes>
       

        <Route path="/" element={<Home
          pokeData={pokeData} />} />

           <Route
          path={`/:id`} element={<PokemonDetails
          />}
        />


      </Routes>

    </div>
  )
}
export default App
