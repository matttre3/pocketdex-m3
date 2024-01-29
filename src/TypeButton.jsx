import React from 'react'
import { useState } from 'react';


const TypeButton = ({type,pokemonType,setPokemonType}) => {
 
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
    <div>
    <span className='before:'></span>
    <img onClick={setType} className={` ${isPresentClass && 'border-4 border-solid border-indigo-500'}`} src={`./src/assets/${type}.png`} alt=""></img>
    </div>
  )
}

export default TypeButton