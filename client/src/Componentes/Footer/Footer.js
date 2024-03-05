import React from 'react'

export const Footer = () => {
  return (
    <div className="footer">
    <div >
    <img
        className="img-logo-footer"
        src={require(`../../Imagenes/logo/logo.jpg`)}
        alt="logo"
        />
    
    <img
        className="img-contacto"
        src={require(`../../Imagenes/logo/contactos.png`)}
        alt="contactos"
        /> 
    
    <img
        className="img-pago"
        src={require(`../../Imagenes/logo/FormasDePago.png`)}
        alt="Formas de pago"
        /> 
    </div>

</div>
  )
}
