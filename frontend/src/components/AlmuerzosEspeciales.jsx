import Header from "./Header"
import Footer from "./Footer"
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
        {platos.map((plato)=>(
          <div key={plato.id}>
            <h2>{plato.dia}</h2>
          </div>
        ))}
      <Footer/>
    </div>
  )
}

export default AlmuerzosEspeciales
