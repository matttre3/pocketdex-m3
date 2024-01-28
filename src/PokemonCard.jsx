import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const PokemonCard = ({pokeData}) => {

  return (
    <Link to={`/${pokeData.id}`}>
    <div className=' hover:animate-pulse p-10 w-40 h-40 flex items-center justify-center flex-col shadow-xl' id={pokeData.name}>
      <img  className="-mt-7" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`} />
      <p>{pokeData.name.charAt(0).toUpperCase()+pokeData.name.slice(1)}</p>
      <div className='flex gap-1 items-center justify-center'>
      {
        pokeData.types.map((item) => {
          return(
            <img key={item.type.name} className='typeImage'src={`./src/assets/${item.type.name}.png`} alt=""></img>
          )     
        }
        )
      }
      </div>
    </div>
    </Link>
  )
}

export default PokemonCard