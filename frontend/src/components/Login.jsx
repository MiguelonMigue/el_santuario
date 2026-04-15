import React, { useState } from 'react'


const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const handleChange = (e) =>{
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert("Inicio de sesión exitosa")
  }
    
  return (
    <div>
      <form onSubmit={handleSubmit} className='formulario'>
        <label htmlFor="">Usuario</label>
        <input type="text" name='username' value={formData.username}/>
        <label htmlFor="">Contraseña</label>
        <input type="password" name='password' value={formData.password}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
