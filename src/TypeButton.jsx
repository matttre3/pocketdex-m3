import React from 'react'
import { useState } from 'react';


const TypeButton = ({type,pokemonType,setPokemonType}) => {
const includes = pokemonType.includes(type)

const [isPresentClass,setIsPresentClass] = useState('')

 function setType(){
    setPokemonType(prevTypes => {
        
        const isPresent = prevTypes.includes(type);
      
        
        if (isPresent){
            setIsPresentClass(false)
            return prevTypes.filter(isPresent => isPresent !== type);
            
        } else {
            setIsPresentClass(true)
            return [...prevTypes,type];}
        
        })
        
    }
 
    return (
    <div className={`flex justify-center items-center ${includes&& 'hover:animate-bounce'}`}>
    <span className='before:'></span>
    <img onClick={setType} className={`w-[45px]${isPresentClass && 'border-4 border-solid border-indigo-500'}`} src={`/public/${type}.png`} alt=""></img>
    {includes && <svg onClick={setType} className="text-white w-[15px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>}
    </div>
  )
}

export default TypeButton