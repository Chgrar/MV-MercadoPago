import React, {useContext, useState, useEffect  } from 'react'
import { DataContext } from '../../Context/Dataprovider'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"

export const ProductoVista = () => {
    const value= useContext(DataContext)
    const [productos]=value.productos
    const [detalle,setDetalle]=useState([])
    const params = useParams()

    useEffect(()=>{
        productos.forEach(producto => {
           
           if(producto.id === parseInt(params.id)){
            setDetalle(producto)
           } 
        });
    },[params.id,productos])

   

  return (
    <>
    {
        <div className='detalles'>
          
            <img src={detalle.imagen2} alt={detalle.nombre}/>
            <h2>{detalle.nombre}</h2>
           
            <p>{detalle.descripcion}</p>
            <h3>Precio: ${detalle.precio}</h3>
            
            <Link to="/Productos">
          <button>Volver</button>
        </Link>
        
        </div>
    }
    
    </>
  )
}
