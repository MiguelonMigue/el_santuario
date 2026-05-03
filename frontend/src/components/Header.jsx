import { Link} from 'react-router-dom'

const Header = () => {
    
  return (
    <div>
      <nav className='barra_nav'>
       <Link className='enlace' to="/">Home</Link>
       <Link className='enlace' to="/login">Login</Link>
      <Link className='enlace' to="/signUp">SignUp</Link>
      <Link className='enlace' to="/almuerzoDia">Almuerzos del día</Link>
      <Link className='enlace' to="/almuerzoEspeciales">Almuerzos especiales</Link>
      <Link className='enlace' to="/bebidas">Bebidas</Link>
      <Link className='enlace' to="/postres">Postres</Link>
            <Link className='enlace' to="/edad">Edad</Link>

      </nav>
    </div>
  )
}

export default Header
