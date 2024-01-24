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
      setTypeInfo((prevTypeInfo) => [...prevTypeInfo, typeinfo]);
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
        await Promise.all(typeInfoPromises);
  
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
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonInfo.id}.png`} />
      {pokemonInfo.name}
      {pokemonInfo.id}
      <button onClick={handleClick}></button>
    </div>
  )
}

export default PokemonDetails
