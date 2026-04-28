import React from 'react'

const Footer = () => {
    const title = "Todos los derechos reservados"
    const telefono = "3229015596"
  return (
    <div className='pie_de_pagina'>
      <div className='copyright' id='telefonos'>
        <p>{title}</p> 
        <p>{telefono}</p>
              </div>
      <div className='iconos'>

      </div>
      
    </div>
  )
}

export default Footer
