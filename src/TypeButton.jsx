import React from 'react'
import { useState } from 'react';
import './TypeButton.css'

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

    <img onClick={setType} className={`typeImage ${isPresentClass && 'type-present'}`} src={`./src/assets/${type}.png`} alt=""></img>
    
  )
}

export default TypeButton