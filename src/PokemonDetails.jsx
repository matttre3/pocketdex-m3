import React from 'react'

const PokemonDetails = ({pokemon}) => {
  return (
    <div>
      <p>{pokemon.name} Il routing funziona !</p>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
    </div>
  )
}

export default PokemonDetails
