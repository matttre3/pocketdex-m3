import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const PokemonDetails = ({ }) => {

  const { id } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState()
  const [typeInfo, setTypeInfo] = useState([])
  const [isFlipped, setFlip] = useState(false)
  
  function flipCard() {
    setFlip(oldFlip => !oldFlip)
  }

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

const statsMap = {
  "hp": "emerald", 
  "attack" : "red",
  "defense" : "blue",
  "special-attack": "amber",
  "special-defense": "violet",
  "speed":"amber"
}

const statNames=
[
  "HP",
  "Attack",
  "Defense",
  "Special Attack",
  "Special Defense",
  "Speed"
]

  return (
    <>
      <Link to={`/`}>
        <div className='pt-4 pb-4 flex flex-row items-center justify-center bg-slate-700'>
          <img className=' w-16 h-16' src="./src/assets/pokeball.png" alt="" />
          <p className='ml-4 font-pixel text-[40px] text-white'>Pocketdex</p>
        </div>
      </Link>
      <div className='flex items-start xl:items-center justify-center gap-10'>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-10 w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        </div>
        <div>
          {pokemonInfo &&
            <>

              <div className='relative flex flex-wrap flex-col justify-center items-center'>
                <div className='flex '>
                  <div onClick={flipCard} className="card-container">
                    <div className={`card ${isFlipped ? 'card-flip' : ''}`}>
                      <div className="card-face front">
                        <img class="w-full h-full object-cover" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonInfo.id}.png`} />
                      </div>
                      <div className="card-face back">
                        <img class="w-full h-full object-cover" src={pokemonInfo.sprites.front_shiny} alt="Front Shiny"></img>
                      </div>
                    </div>
                  </div>
                </div>
                <p className='font-pixel'>Click for shiny</p>
                <p className='font-pixel text-3xl mb-4'>{pokemonInfo.name.charAt(0).toUpperCase() + pokemonInfo.name.slice(1)} #{pokemonInfo.id}</p>

                <div className='flex items-start gap-8 justify-center flex-wrap mt-5 mb-10'>
                  {pokemonInfo.stats.map((stat,index) => {
                    return (
                      <div className='flex flex-col flex-wrap items-center justify-center w-[80px]'>
                        {Array.from({length: 12.75-Math.floor(stat.base_stat/20)}).map(()=> ( 
                          <span className={`border border-slate-400 w-10 h-2 mb-1`}></span>
                        ))}
                        {Array.from({length: Math.floor(stat.base_stat/20)}).map(()=> ( 
                          <span className={`bg-${statsMap[stat.stat.name]}-400 w-10 h-2 mb-1 border border-slate-400`}></span>
                        ))}
                        
                        <p className='font-bold text-2xl'>{stat.base_stat}</p>
                        <p className='font-pixel text-center'>{statNames[index]}</p>
                      </div>
                    )
                  })}
                </div>
                <h2 className='text-xl font-bold text-red-500'>Takes double damage from</h2>
                {typeInfo.map((type) => {
                  return (
                    <>
                      {type.damage_relations.double_damage_from.map((doubleDamageType) => {
                        return (
                          <img key={doubleDamageType.name} className='typeImage' src={`./src/assets/${doubleDamageType.name}.png`} alt=""></img>
                        )
                      })}
                    </>
                  )
                })}

                <h2>Makes double damage to</h2>
                {typeInfo.map((type) => {
                  return (
                    <>
                      {type.damage_relations.double_damage_to.map((doubleDamageType) => {
                        return (
                          <img key={doubleDamageType.name} className='typeImage' src={`./src/assets/${doubleDamageType.name}.png`} alt=""></img>
                        )
                      })}
                    </>
                  )
                })}

                <h2>Takes half damage from</h2>
                {typeInfo.map((type) => {
                  return (
                    <>
                      {type.damage_relations.half_damage_from.map((doubleDamageType) => {
                        return (
                          <img key={doubleDamageType.name} className='typeImage' src={`./src/assets/${doubleDamageType.name}.png`} alt=""></img>
                        )
                      })}
                    </>
                  )
                })}

                <h2>Makes half damage to</h2>
                {typeInfo.map((type) => {
                  return (
                    <>
                      {type.damage_relations.half_damage_to.map((doubleDamageType) => {
                        return (
                          <img key={doubleDamageType.name} className='typeImage' src={`./src/assets/${doubleDamageType.name}.png`} alt=""></img>
                        )
                      })}
                    </>
                  )
                })}

                <h2>Takes no damage from</h2>
                {typeInfo.map((type) => {
                  return (
                    <>
                      {type.damage_relations.no_damage_from.map((doubleDamageType) => {
                        return (
                          <img key={doubleDamageType.name} className='typeImage' src={`./src/assets/${doubleDamageType.name}.png`} alt=""></img>
                        )
                      })}
                    </>
                  )
                })}

                <h2>Makes no damage to</h2>
                {typeInfo.map((type) => {
                  return (
                    <>
                      {type.damage_relations.no_damage_to.map((doubleDamageType) => {
                        return (
                          <img key={doubleDamageType.name} className='typeImage' src={`./src/assets/${doubleDamageType.name}.png`} alt=""></img>
                        )
                      })}
                    </>
                  )
                })}

              </div>

            </>
          }
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-10 w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div>
    </>
  )
}

export default PokemonDetails
