import React, { useState } from 'react'


const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const handleChange = (e) =>{
    setFormData({
      ...formData, [e.target.formData]: e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(formData)
  }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Usuario</label>
        <input type="text" name='username' value={formData.username}/>
        <label htmlFor="">Contraseña</label>
        <input type="password" name='password' value={formData.password}/>
      </form>
    </div>
  )
}

export default Login
