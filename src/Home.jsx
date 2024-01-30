import React from 'react'
import PokemonCard from './PokemonCard'
import TypeButton from './TypeButton'
import { useState } from 'react'
import { useEffect } from 'react'
const types = ['normal', 'fairy', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark']

const Home = ({ pokeData }) => {

  const [searchBar, setSearchBar] = useState('')
  const [pokemonType, setPokemonType] = useState([])
  useEffect(() => { console.log(pokemonType) }, [pokemonType])


  function handleChange(e) {
    setSearchBar(e.target.value)
  }

  return (

    <div className='flex flex-col items-center justify-center' >
      <header className='flex flex-col w-full bg-slate-700'>
        <div className='flex flex-row items-center justify-center mt-4  bg-slate-700'>
          <img className='w-16 h-16 ' src="./public/assets/pokeball.png" alt="" />
          <p className='ml-4 font-pixel text-[40px] text-white'>Pocketdex</p>
        </div>
        <input className='w-[300px] mx-auto border-2 border-gray-300 rounded-md mt-4 pl-2 pr-8 focus:outline-none focus:border-gray-500' onChange={handleChange} type="text" name="" id="" />
        <div className='flex flex-wrap items-center justify-center gap-3 mt-6'>
          {types.map((item) => {

            const includes = pokemonType.includes(item)

            return (
              !includes &&
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

        <div className='flex flex-wrap items-center justify-center gap-3 mt-6 mb-4'>
          {pokemonType.map(item => {
            return (
              <>
                <TypeButton
                  key={item}
                  type={item}
                  setPokemonType={setPokemonType}
                  pokemonType={pokemonType}
                />
              </>

            )
          })
          }
        </div>
      </header>

      <div className='flex flex-wrap items-center justify-center max-w-[1000px] mx-auto mt-10 mb-10 gap-14'>
        {
          pokeData.filter((pokemon) => {
            const types = pokemon.types.map(item => item.type.name)
            const isPresent = types.map((type) => pokemonType.includes(type))
            const hasTrue = isPresent.some(element => element === true)
            return (pokemonType.length === 0 || hasTrue)
          }).filter((pokemon) => { return (pokemon.name.toLowerCase().startsWith(searchBar.toLowerCase())) }).map((pokemon) => {

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
