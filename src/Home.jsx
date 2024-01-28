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
      <input className='mt-10 border' onChange={handleChange} type="text" name="" id="" />

    

      <div className='flex flex-wrap mt-10 gap-3'>
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


      <div className='flex flex-wrap items-center justify-center w-4/5 mx-auto mt-10 gap-14'>
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
