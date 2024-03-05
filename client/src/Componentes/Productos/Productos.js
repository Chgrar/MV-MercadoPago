import React, { useContext } from 'react'
import { DataContext } from '../../Context/Dataprovider'
import { ProductoItem } from './ProductoItem'

export const Productos = () => {

const value = useContext(DataContext)
const[productos] = value.productos

console.log(productos)

  return (
    <>
    <h1 className='title'>Productos</h1>
    <div className='productos'>
      {
        productos.map(producto=>(
        <ProductoItem 
        key={producto.id}
        id={producto.id}
        nombre={producto.nombre}
        descripcion={producto.descripcion}
        imagen={producto.imagen}
        imagen2={producto.imagen2}
        talle={producto.talle}
        talle2={producto.talle2}
        precio={producto.precio}
        cantidad={producto.cantidad}
        />
        ))
      }
            
    </div>    
    </>
  )
}
