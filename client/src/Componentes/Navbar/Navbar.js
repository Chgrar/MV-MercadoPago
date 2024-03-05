import React,{useContext} from 'react'
import { Link } from "react-router-dom"
import { DataContext } from '../../Context/Dataprovider'
import { Contacto } from '../Contacto/Contacto'


export const Navbar = () => {
    const value = useContext(DataContext)
    const [menu,setMenu] = value.menu
    const [carrito] = value.carrito
   

    const toogleMenu = () =>{
        setMenu(!menu)
    }

  return (
    <div className="nav-container">
        <nav className="navbar">
            <img
                className="img-logo"
                src={require(`../../Imagenes/logo/logo.jpg`)}
                alt="logo"
            />
            <ul className="lista-container">
                    <li className="lista-item">
                        <Link  to='/' className="lista-item_link">Inicio</Link>
                    </li>
                    <li className="lista-item">
                        <Link  to='/Productos' className="lista-item_link">Productos</Link>
                    </li>
                    {/* <li className="lista-item">
                        <Link  to='/Productos' className="lista-item_link">Hombre</Link>
                    </li>
                    <li className="lista-item">
                        <Link  to='/Productos' className="lista-item_link">Mujer</Link>
                    </li>
                    <li className="lista-item">
                        <Link  to='/Productos' className="lista-item_link">Ofertas</Link>
                    </li> */}
                    <li className="lista-item">
                        <Link  to='/Contacto' className="lista-item_link">Contacto</Link>
                    </li>
            </ul>
            <div>
            <h2 className='imagen_carrito' onClick={toogleMenu}>🛒</h2>
            <span className='item-Total'>{carrito.length}</span>
            </div>
        </nav>
    </div>
  )
}
