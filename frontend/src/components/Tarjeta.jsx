import Salmon from '../assets/salmon_maracuya.jpeg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Tarjeta = () => {
 
  const precios = [{
    id: 1,
    semana: 'Entre semana',
    costo: '$18k',
  },{
    id: 2,
    semana: 'Fin de semana y festivos',
    costo: '$20k'
  }]
  return (
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Salmon} />
      <Card.Body>
        <Card.Title>Les ofrecermos los más deliciosos y económicos almuerzos del día y especiales</Card.Title>
        
          {precios.map((precio)=>(
            <Card.Text>
              <h3>{precio.semana}</h3>
              <p>{precio.costo}</p>
            </Card.Text>
          ))}
        
        
      </Card.Body>
    </Card>
  )
}

export default Tarjeta
