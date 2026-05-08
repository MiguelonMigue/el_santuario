import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card"
import Carrusel from "./Carrusel"
const AlmuerzosEspeciales = () => {
  const platos = [{
    id: 1,
    dia: 'sábados y domingos',
    platos: 'Ajiaco santafereño, con pechuga desmenuzada, arroz, patacón y aguacate (los domingos se cuenta como plato del día)',
    carnes: 'Churrasco en chimichurri, Punta de anca en chimichurri, Pechuga en salsa de champiñón',
    pescados: 'Mojarra frita, Salmón en salsa de maracuyá',
    acompanamientos: 'Puré de papa o patacón, arroz',
    ensalada: 'Lechuga, cebolla y tomate',

  }]
  return (
    <div>
        <Header/>
        <h1 className="titulo_principal">Le ofrezco!!!</h1>
        <Card/>
        {platos.map((plato)=>(
          <div key={plato.id}>
            <h2>{plato.dia}</h2>
            <p>{plato.carnes}</p>
            <p>{plato.pescados}</p>
            <p>{plato.acompanamientos}</p>
            <p>{plato.ensalada}</p>
          <Carrusel/>
          </div>
        ))}
      <Footer/>
    </div>
  )
}

export default AlmuerzosEspeciales
