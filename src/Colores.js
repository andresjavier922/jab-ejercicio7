import React, { useContext } from 'react'
import { Contexto } from './contexto/Contexto'

function Colores() {
  const {setColor} = useContext(Contexto)
  return (

    <div className='colores'>
        <div className='color' onClick={()=>{setColor('blueviolet')}}></div>
        <div className='color' onClick={()=>{setColor('red')}}></div>
        <div className='color' onClick={()=>{setColor('yellow')}}></div>
        <div className='color' onClick={()=>{setColor('green')}}></div>
    </div>
  )
}

export default Colores;