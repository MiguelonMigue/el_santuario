import { useState } from "react"


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
            [e.target.formData]: e.target.value
        })
    }


    function handleSubmit (e) {
        e.preventDefault();
        alert(formData)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label htmlFor="">Usuario</label>
        <input type="text" name="username" value={formData.username}
        onChange={handleChange} />
        <label htmlFor="">Correo</label>
        <input type="text" name="email" value={formData.email}
        onChange={handleChange} />
        <label htmlFor="">Contraseña</label>
        <input type="password" name="password" value={formData.password}
        onChange={handleChange} />
        <label htmlFor="">Telefono</label>
        <input type="text" name="phone" value={formData.phone}
        onChange={handleChange} />
      </form>
    </div>
  )
}

export default SignUp
