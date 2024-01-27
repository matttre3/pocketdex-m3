import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';


const PokemonDetails = ({ }) => {

  const { id } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState([])
  const [typeInfo, setTypeInfo] = useState([])


  async function getTypeInfo(typeurl) {
    try {
      const data = await fetch(`${typeurl}`)
      const typeinfo = await data.json()
      return typeinfo
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    async function init() {
      try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await data.json();
        setPokemonInfo(pokemon);
  
        const typeInfoPromises = pokemon.types.map((tipo) => getTypeInfo(tipo.type.url));

        const typeInfoResults = await Promise.all(typeInfoPromises);
        
        setTypeInfo(typeInfoResults);
        
  
      } catch (e) {
        console.error(e);
      }
    }
  
    init();
  }, [id]);

function handleClick(){
  console.log(typeInfo)
}

  return (
    <div>
       {pokemonInfo.sprites &&
      <>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonInfo.id}.png`} />
      
      <img src={pokemonInfo.sprites.front_shiny} alt="Front Shiny"></img> {/* Chiedere a Lore, perchè qua mi da problemi se non faccio l'&& e in quello sopra funziona?? */}

      {pokemonInfo.name}
      {pokemonInfo.id}

      {pokemonInfo.stats.map((stat)=>{
        return(
          <>
          <p>{stat.base_stat}</p>
          <p>{stat.stat.name}</p>
          </>
        )
      })}
      </>
  }
    </div>
  )
}

export default PokemonDetails
