import React, { useState } from 'react'
import Header from './Header'

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

  const validateUsername = (username) => {
    const withoutSpaces = username.trim();
    if(withoutSpaces.length > 2){
      return true
    } else {
      return false;
    }
  }

  const validatePassword = (password) =>{
      const withoutSpaces = password.trim();
      const passwordAsArray = password.split("");
      const hasNumber = passwordAsArray.some((character)=>{
        if(isNaN(character)){
          return false;
        } else {
          return true;
        }
      })
      if(withoutSpaces .length > 5 && hasNumber){
        return true;
      }else{
        return false;
      }
  }
  const onSubmitForm = (e) =>{
    e.preventDefault();
    const isUsernameValid = validateUsername(formData.username);
    const isPasswordValid = validatePassword(formData.password);

    if(!isUsernameValid || !isPasswordValid){
      alert("Usuario o contraseña incorrectos!!!")
    } else{
      alert("Incio de sesión exitosamente!!!")
    }
  }
    
  return (
    <div>
      <Header/>
      <form onSubmit={onSubmitForm} className='formulario'>
        <label htmlFor="">Usuario</label>
        <input type="text" name='username' value={formData.username} onChange={handleChange}/>
        <label htmlFor="">Contraseña</label>
        <input type="password" name='password' value={formData.password} onChange={handleChange}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
