import React from 'react'
import { useState } from 'react'

const Edad = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        edad:""
    })

    const edadJuvenil = formData.edad - 10;

        const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    const validateNombre = (nombre) => {
        const withoutSpaces = nombre.trim();
        if(withoutSpaces.length > 2){
            return true
        } else {
            return false;
        }
    }
const validateEdad = (edad) =>{
   
    if(isNaN(edad)){
        return false
    } else{
        return true
    }
}
const onSubmitForm = (e) =>{
    const isValidNombre = validateNombre(formData.nombre);
    const isValidEdad = validateEdad(formData.edad);

    if(isValidNombre && isValidEdad){
        alert (`Bienvenido ${formData.nombre}, tu edad es ${edadJuvenil} `)
    }
}


  return (
    <div>
      <form onSubmit={onSubmitForm} className='formulario'>
        <input type="text" placeholder='Nombre' name='nombre' value={formData.nombre}  
        onChange={handleChange}/>
        <input type="number" placeholder='Edad' name='edad' value={formData.edad}
        onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Edad
