import { FaInstagram, FaFacebook, FaWhatsapp, FaCopyright } from "react-icons/fa"

const Footer = () => {
    const title = "Todos los derechos reservados"
    const telefono = "3133017881"
    const copyright = 'Todos los derechos reservados'
  return (
    <div className='pie_de_pagina'>
      <div className='copyright' id='telefonos'>
        <p>{title}</p> 
        <p>{telefono}</p>
        <p><FaCopyright/>{copyright}</p>
              </div>
      <div className='iconos'>
       <FaFacebook/>
       <FaInstagram/>
       <FaWhatsapp/>
      </div>
      
    </div>
  )
}

export default Footer
