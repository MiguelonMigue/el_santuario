import { Link} from 'react-router-dom'

const Header = () => {
    
  return (
    <div>
      <nav className='barra_nav'>
       <Link className='enlace' to="/">Home</Link>
       <Link className='enlace' to="/login">Login</Link>
      <Link className='enlace' to="/signUp">SignUp</Link>
      </nav>
    </div>
  )
}

export default Header
