import React from 'react'
import { Link } from "react-router-dom"

export const Inicio = () => {
  return (
    <div className='inicio'>
        <Link to="/Productos" className='hombres'>
          <h1>Hombres</h1>
        </Link>
        
        
        <Link to="/Productos" className='mujeres'>
          <h1>Mujeres</h1>
        </Link>
        


    </div>
  )
}
