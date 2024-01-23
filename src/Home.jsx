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
    <div>
      <img className="headerImage" src="./src/assets/pokeball.png" alt="" />
      <input onChange={handleChange} type="text" name="" id="" />

    

      <div className="filterButtons">
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


      <div className="container">
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
