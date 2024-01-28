import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';


const PokemonDetails = ({ }) => {

  const { id } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState()
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



  return (
    <div>
       {pokemonInfo &&
      <>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonInfo.id}.png`} />
      
      <img src={pokemonInfo.sprites.front_shiny} alt="Front Shiny"></img> {/* Chiedere a Lore/Lino, perchè qua mi da problemi se non faccio l'&& e in quello sopra funziona?? */}

      <p>{pokemonInfo.name.charAt(0).toUpperCase()+pokemonInfo.name.slice(1)} #{pokemonInfo.id}</p>

      {pokemonInfo.stats.map((stat)=>{
        return(
          <>
          <p>{stat.base_stat}</p>
          <p>{stat.stat.name}</p>
          </>
        )
      })}

      <h2 className='text-xl font-bold text-red-500'>Takes double damage from</h2>
      {typeInfo.map((type)=>{
        return(
          <>
          {type.damage_relations.double_damage_from.map((doubleDamageType)=>{
            return (
              <img key={doubleDamageType.name} className='typeImage'src={`./src/assets/${doubleDamageType.name}.png`} alt=""></img>
            )
          })}
          </>
        )
      })}

      <h2>Makes double damage to</h2>
      {typeInfo.map((type)=>{
        return(
          <>
          {type.damage_relations.double_damage_to.map((doubleDamageType)=>{
            return (
              <img key={doubleDamageType.name} className='typeImage'src={`./src/assets/${doubleDamageType.name}.png`} alt=""></img>
            )
          })}
          </>
        )
      })}

      <h2>Takes half damage from</h2>
      {typeInfo.map((type)=>{
        return(
          <>
          {type.damage_relations.half_damage_from.map((doubleDamageType)=>{
            return (
              <img key={doubleDamageType.name} className='typeImage'src={`./src/assets/${doubleDamageType.name}.png`} alt=""></img>
            )
          })}
          </>
        )
      })}

      <h2>Makes half damage to</h2>
      {typeInfo.map((type)=>{
        return(
          <>
          {type.damage_relations.half_damage_to.map((doubleDamageType)=>{
            return (
              <img key={doubleDamageType.name} className='typeImage'src={`./src/assets/${doubleDamageType.name}.png`} alt=""></img>
            )
          })}
          </>
        )
      })}

      <h2>Takes no damage from</h2>
      {typeInfo.map((type)=>{
        return(
          <>
          {type.damage_relations.no_damage_from.map((doubleDamageType)=>{
            return (
              <img key={doubleDamageType.name} className='typeImage'src={`./src/assets/${doubleDamageType.name}.png`} alt=""></img>
            )
          })}
          </>
        )
      })}

      <h2>Makes no damage to</h2>
      {typeInfo.map((type)=>{
        return(
          <>
          {type.damage_relations.no_damage_to.map((doubleDamageType)=>{
            return (
              <img key={doubleDamageType.name} className='typeImage'src={`./src/assets/${doubleDamageType.name}.png`} alt=""></img>
            )
          })}
          </>
        )
      })}

      

      </>
  }
    </div>
  )
}

export default PokemonDetails
