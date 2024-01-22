import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import PokemonCard from './PokemonCard'
import TypeButton from './TypeButton'



function App() {


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
  const [searchBar, setSearchBar] = useState('')
  const [pokemonType, setPokemonType] = useState([])
  useEffect(() => { console.log(pokemonType) }, [pokemonType])

  const types = ['normal','fairy', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark']

  function handleChange(e) {
    setSearchBar(e.target.value)
  }


  return (
    <>
    <img className="headerImage" src="./src/assets/pokeball.png" alt="" />
    <input onChange={handleChange} type="text" name="" id="" />

      {
        searchBar.length > 0 && pokeData.filter(item => item.name.toLowerCase().startsWith(searchBar.toLowerCase())).map((item) => {
          return (
            <div className='searchedItem' key={item.url}>
              <a href={`#${item.name}`}>
                <p>{item.name}</p>
              </a>
            </div>
          )
        }
        )
      }

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
          }).map((pokemon) => {

            return (

               <PokemonCard
                key={pokemon.id}
                pokeData={pokemon}
              />


            )


          })}
      </div>
    </>
  )
}

export default App
