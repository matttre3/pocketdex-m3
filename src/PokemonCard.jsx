import React from 'react'
import { Link } from 'react-router-dom'

const typeColorObject = {
  "normal" : "stone",
  "fairy"  : "pink",
  "fighting" : "red",
  "flying": "neutral",
  "poison" : "purple",
  "ground" : "amber",
  "rock" : "amber",
  "bug" : "lime",
  "ghost" : "slate",
  "steel" : "grey",
  "fire" : "orange",
  "water" : "blue",
  "grass" : "emerald",
  "electric" : "yellow",
  "psychic" : "pink",
  "ice" : "blue",
  "dragon" : "rose",
  "dark": "zinc",
 }
 

const PokemonCard = ({pokeData}) => {

  const typeColor = typeColorObject[pokeData.types[0].type.name]
  console.log(`before:bg-${typeColor}-500`)
  return (
    <Link to={`/${pokeData.id}`}>
    <div className='hover:animate-pulse p-10 w-[200px] h-[200px] flex items-center justify-center flex-col shadow-xl relative' id={pokeData.name}>
    <div className={`z-0 before:absolute before:top-0 before:-left-0 before:-right-0 before:h-16 before:rounded-b-full before:w-full before:bg-${typeColor}-500`}></div>
      <img  className="-mt-7 z-10" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`} />
      <p className='font-pixel'>{pokeData.name.charAt(0).toUpperCase()+pokeData.name.slice(1)}</p>
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