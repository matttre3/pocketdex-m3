import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './PokemonCard.css'

const PokemonCard = ({pokeData}) => {

  return (


    <div className='pokemonCard' id={pokeData.name}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`} />
      <p>{pokeData.name.charAt(0).toUpperCase()+pokeData.name.slice(1)}</p>
      {
        pokeData.types.map((item) => {
          return(
            <img key={item.type.name} className='typeImage'src={`./src/assets/${item.type.name}.png`} alt=""></img>
          )     
        }
        )
      }
    </div>

    
  )
}

export default PokemonCard