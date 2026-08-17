import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
      <Container fluid className="px-4">
        
        

        {/* 1. Pasamos el icono FaBars DENTRO de Navbar.Toggle */}
        <Navbar.Toggle  aria-controls="responsive-navbar-nav">
          <FaBars size={22} color="white" />
        </Navbar.Toggle>

        {/* 2. El contenido que se ocultará en móvil y se desplegará al presionar el botón */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="barra_nav align-items-start">
            <Nav.Link as={Link} className="enlace" to="/">Home</Nav.Link>
            <Nav.Link as={Link} className="enlace" to="/login">Login</Nav.Link>
            <Nav.Link as={Link} className="enlace" to="/signUp">SignUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Header