import { useState } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios"
import React, { useContext } from 'react'
import { DataContext } from '../../Context/Dataprovider'


import "boxicons"

export const Carrito = () => {
    const value = useContext(DataContext)
    const [menu,setMenu] = value.menu
    const [carrito, setCarrito] = value.carrito
    const total= value.total
    const total2 = value.total2
    

    const tooglefalse = ()=>{
        setMenu(false)
    } 

    const show1 = menu ? "carritos show" : "carritos"
    const show2 = menu ? "carrito show" : "carrito"

    const resta = id =>{
        carrito.forEach(item=>{
            if(item.id === id){
                item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
            }
            setCarrito([...carrito])
        })
    }

    const suma = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad +=1;
            }
           setCarrito([...carrito]) 
        })
    }

    const removeProducto = id =>{
        if(window.confirm("¿Quieres suspender el producto?")){
            carrito.forEach((item, index)=>{
                if(item.id===id){
                item.cantidad=1;
                carrito.splice(index,1)
            }
            })
            setCarrito([...carrito])
        }
            
    }

    //funciones mercado pago
    const [preferenceId, setPreferenceId] = useState(null);
    
    initMercadoPago('TEST-dd957096-da4d-4887-b781-c4cc6dc412cc');

    const createPreference = async () => {
        try {
          const response = await axios.post("http://localhost:8080/create_preference", {
            description: "nombre",
            price:1000,
            quantity: 1,
          });

          const { id } = response.data;
          return id;
        } catch (error) {
          console.log(error);
        }
      };

      const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
          setPreferenceId(id);
        }
      };



  return (
    <div className={show1}>
        <div className={show2}>
        <div onClick={tooglefalse} className="carrito_close">
                <box-icon name="x"></box-icon>
            </div>
            <h2>Su Carrito</h2>
            <div className='carrito_center'>
            {

               carrito.length ===0 ? <h2 style={{textAling:"center", fontSize:"3rem"}}>Carrito Vacio</h2> 
                :<>{

                carrito.map((producto)=>(
                    <div className='carrito_item' key={producto.id}>
                    <img src={producto.imagen} alt={producto.nombre}/>
                    <div>
                       <h3>{producto.nombre}</h3> 
                       <h3>talle:{producto.talle2}</h3>
                        
                       <p className='precio'>${producto.precio}</p>
                    </div>
                    
                    <div>
                       <box-icon name="up-arrow" type="solid" onClick={() => suma(producto.id)}/>
                        <p className='cantidad'>{producto.cantidad}</p>
                        <box-icon name="down-arrow" type="solid" onClick={() => resta(producto.id)}/>
                    </div>
                    <div className='remove_item' onClick={()=>removeProducto(producto.id)}>
                    <box-icon name="trash"/> 
                    </div>
                </div>

                ))
            }

</>}

            </div>
            <div className='carrito_footer'>
                <h3 >Total: ${total}</h3>
                <div>
                <button className='btn' onClick={handleBuy}>Pago</button>
                {preferenceId && <Wallet initialization={{ preferenceId }} />}
                </div>
            </div>
        </div>
    </div>
  )
        }