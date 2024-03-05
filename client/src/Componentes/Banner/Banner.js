import React from 'react'
import "boxicons"

export const Banner = () => {
  return (
    <div className="Banner">

            <h1 className='banner-h1'>MV</h1>
            <p>Indumentaria Deportiva</p>

            <img
                className="img-banner"
                src={require(`./../../Imagenes/fotos/ImagenBanner.jpg`)}
                alt="banner"
            />

          

        <div className="Banner-container">
            
           
            <div className='btn-wsp' >
            <a href='http://api.whatsapp.com/send?phone=+5491164616606'>
            <box-icon name='whatsapp' type='logo' color='#11ea13' ></box-icon>
            </a>
            </div>
        </div>
    </div>
  )
}
