import { useParams } from "react-router-dom"
import { platos } from "../data/almuerzos";
import Card from 'react-bootstrap/Card';


const AlmuerzoDiaDetalle = () => {
    const {id} = useParams();
    const plato =  platos.find(
        i=>i.id===Number(id)
    );
    
  return (
    <div>
      <h1>Menú del día</h1>
      <h2>{plato.dia}</h2>
      
      <Card>
        
        <Card.Body>
          <Card.Text>
            {plato.menu1}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            {plato.menu2}
          </Card.Text>
          <Card.Img variant="top" src={plato.img} className='img-tarjeta'  />
        </Card.Body>
      </Card>
      <p><strong>Entradas: </strong>{plato.entradas}</p>
      <p><strong>Acompañamientos: </strong>{plato.acompanamientos}</p>
      <p><strong>Arroz: </strong>{plato.harinaPrincipal}</p>
      <p><strong>Ensalada: </strong>{plato.ensalada}</p>
    </div>
  )
}

export default AlmuerzoDiaDetalle

