import Header from "./Header"
import Footer from "./Footer"
import Carrusel from "./Carrusel"
import Card from "./Tarjeta"
import { platos } from "../data/almuerzos"
import { useParams } from "react-router-dom"


const AlmuerzosDia = () => {
  const {id} = useParams();
 
  

const plato = platos.find(
  i=>i.id===Number(id)
 )
  return (
    <div>
        <Header/>
        <h1 className="titulo_principal">Le ofrezco del día!!</h1>
        <Card/>
        
        
          <div key={plato.id}>
            <h2 className="subtitulo_uno">{plato.dia}</h2>
            <p>{plato.entradas} {plato.opcional}</p>
            <p>{plato.carnes}</p>
            <p>{plato.pescados}</p>
            <p>{plato.arrozEspecial}</p>
            <p>{plato.acompanamientos}</p>
            <p>{plato.harinaPrincipal}</p>
            <p>{plato.ensalada}</p>

            </div>
        
        <Carrusel/>
        
      <Footer/>
    </div>
  )
}

export default AlmuerzosDia
