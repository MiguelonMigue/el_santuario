import Header from "./Header"
import Footer from './Footer'
const Bebidas = () => {
  const jugos = [{
    id: 1,
    sabor: "Mora"
  },{
    id: 2,
    sabor: "Maracuyá"
  },
  {
    id: 3,
    sabor: "Lulo"
  },
  {
    id: 4,
    sabor: "Mango"
  },
  {
    id: 5,
    sabor: "Limonada de panela"
  },{
    id: 6,
    sabor: "Tomate de árbol"
  },{
    id: 7,
    sabor: "Piña"
  }
]
const cocaColas =[
  {
    id: 1,
    tipo: "Normal"
  },{
    id: 2,
    tipo: "Zero"
  }
]
const aguas =[
  {
    id: 1,
    tipo: "Sin gas",
    presentacion: "Botella azul"
  },{
    id: 2,
    tipo: "Con gas",
    presentacion: "Botella verde"
  }
]
const cervezas = [{id: 1, marca: "Club Colombia"}, {id: 2, marca: "Andina"}]
  return (
    <div>
        <Header/>
      <h1 className="titulo_principal">De bebidas le ofrezco</h1>
      <h2 className="titulo_secundario">Jugos</h2>
      {jugos.map((jugo)=>(
        <div key={jugo.id}>
          <p>{jugo.sabor}</p>
        </div>
      ))}
      <h2 className="titulo_secundario">Aguas</h2>
      {aguas.map((agua)=>(
        <div key={agua.key}>
          <p>{agua.tipo}, viene en {agua.presentacion}</p>
        </div>
      ))}
      <h2 className="titulo_secundario">Coca Cola en lata</h2>
      {cocaColas.map((cocaCola)=>(
        <div key={cocaCola.id}>
          <p>{cocaCola.tipo}</p>
        </div>
      ))}
      <h2 className="titulo_secundario">Cerveza en lata</h2>
      {cervezas.map((cerveza)=>(
        <div key={cerveza.id}>
          <p>{cerveza.marca}</p>
        </div>
      ))}
      <Footer/>
    </div>
  )
}

export default Bebidas
