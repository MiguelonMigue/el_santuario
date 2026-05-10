import Header from "./Header"
import Footer from "./Footer"
const Postres = () => {
  const postrecitos =[{
    id: 1,
    nombre: "Arroz con leche",
    precio: "$5.0k"
  },{
    id: 2,
    nombre: "Postre de limón",
    precio: "$6.0k"
  },{
    id: 3,
    nombre: "Merenguitos",
    precio: "$4.0k"
  },{
    id:4,
    nombre:"Brazo de reina",
    precio:"$8.0k"
  },{
    id: 5,
    nombre:"Milhoja",
    precio: "$8.0k"
  },{
    id:6,
    nombre: "Matrimonio santuario",
    precio: "8.0k"
  }]
  return (
    <div>
        <Header/>
        <h1>¡¡¡De postres le ofrezco!!!</h1>
        {postrecitos.map((postrecito)=>(
          <div key={postrecito.id}>
            <h2 className="titulo_secundario">{postrecito.nombre}</h2>
            <p>{postrecito.precio}</p>
          </div>
        ))}
       <Footer/>
    </div>
  )
}

export default Postres
