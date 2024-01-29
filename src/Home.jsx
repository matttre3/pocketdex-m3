import React from 'react'
import PokemonCard from './PokemonCard'
import TypeButton from './TypeButton'
import { useState } from 'react'
import { useEffect } from 'react'

const Home = ({pokeData}) => {
  
  const [searchBar, setSearchBar] = useState('')
  const [pokemonType, setPokemonType] = useState([])
  useEffect(() => { console.log(pokemonType) }, [pokemonType])

  const types = ['normal', 'fairy', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark']

  function handleChange(e) {
    setSearchBar(e.target.value)
  }
  
  return (
    <div className='flex flex-col items-center justify-center' >
      <img className='w-16 h-16' src="./src/assets/pokeball.png" alt="" />
      <input className='border-2 border-gray-300 rounded-md mt-4 pl-2 pr-8 focus:outline-none focus:border-gray-500' onChange={handleChange} type="text" name="" id="" />

      <div className='flex flex-wrap mt-4 gap-3 h-10 w-100 items-center justify-center'>
        {types.map((item) => {
          return (
            <TypeButton
              key={item}
              type={item}
              setPokemonType={setPokemonType}
              pokemonType={pokemonType}
            />
          )
        }
        )}
      </div>


      <div className='flex flex-wrap items-center justify-center max-w-[1000px] mx-auto mt-10 mb-10 gap-14'>
        {
          pokeData.filter((pokemon) => {
            const types = pokemon.types.map(item => item.type.name)
            const isPresent = types.map((type) => pokemonType.includes(type))
            const hasTrue = isPresent.some(element => element === true)
            return (pokemonType.length === 0 || hasTrue)
          }).filter((pokemon)=>{ return (pokemon.name.toLowerCase().startsWith(searchBar.toLowerCase()))}).map((pokemon) => {

            return (
              <>
                <PokemonCard
                  key={pokemon.id}
                  pokeData={pokemon}
                />
              </>
            )


          })}

      </div>
    </div>
  )
}

export default Home
