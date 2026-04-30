import { useState } from "react"
import Header from "./Header"

const SignUp = () => {
    const [formData, setFormData] = useState(
        {
            name: "",
            username: "",
            email: "",
            phone: "",
            password: ""
        }
    )
    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }


    

    const validateEmail = (email) =>{
     
      const withoutSpaces = email.trim();
        if(withoutSpaces.length > 2 && withoutSpaces.includes("@")){
          return true
        }else{
          return false
        }
    }

    const validateUsername = (username) =>{
      const withoutSpaces = username.trim();
      if(withoutSpaces.length > 2){
        return true
      }else{
        return false;
      }
    }

    const validatePassword = (password) =>{
      const withoutSpaces = password.trim();
      const passwordAsArray = withoutSpaces.split("");
      const hasNumber = passwordAsArray.some((character)=>{
        if(isNaN(character)){
          return false
        }else{
          return true;
        }
      })
      if(withoutSpaces.length > 5 && hasNumber){
        return true
      }else{
        return false;
      }
    }

    const onSubmitForm = (e) =>{
      e.preventDefault();

      const isValidEmail = validateEmail(formData.email);
      const isValidUsername = validateUsername(formData.username);
      const isValidPassword = validatePassword(formData.password);

      if(!isValidEmail || !isValidUsername || !isValidPassword){
        alert("Correo, usuario o contraseña incorrectos!")
      } else{
        alert("Registro exitoso!!!")
      }
    }



  return (
    <div>
      <Header/>
      <form onSubmit={onSubmitForm} className="formulario">
        <label htmlFor="">Nombre: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label htmlFor="">Usuario</label>
        <input type="text" name="username" value={formData.username}
        onChange={handleChange} />
        <label htmlFor="">Correo</label>
        <input type="email" name="email" value={formData.email}
        onChange={handleChange} />
        <label htmlFor="">Contraseña</label>
        <input type="password" name="password" value={formData.password}
        onChange={handleChange} />
        <label htmlFor="">Telefono</label>
        <input type="text" name="phone" value={formData.phone}
        onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default SignUp
