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
  return (
    <Link to={`/${pokeData.id}`}>
    <div className='hover:animate-pulse p-10 w-[200px] h-[200px] flex items-center justify-center flex-col shadow-xl relative' id={pokeData.name}>
    <div className={`z-0 before:absolute before:top-0 before:-left-0 before:-right-0 before:h-16 before:rounded-b-full before:w-full before:bg-${typeColor}-500`}></div>
      <img  className="z-10 -mt-7" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`} />
      <p className='font-pixel'>{pokeData.name.charAt(0).toUpperCase()+pokeData.name.slice(1)}</p>
      <div className='flex items-center justify-center gap-1'>
      {
        pokeData.types.map((item) => {
          return(
            <img key={item.type.name} className='w-[45px]'src={`./src/assets/${item.type.name}.png`} alt=""></img>
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