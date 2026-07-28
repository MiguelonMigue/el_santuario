import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

const Carrusel = () => {
  const navigate = useNavigate();
  const irAlmuerzoDetalle = () =>{
    navigate(`/almuerzoDia/${id}`)
  }
  const almuerzosDia = [{
    id: 1,
    nombre: 'lunes',
    img: 'https://www.mycolombianrecipes.com/wp-content/uploads/2010/02/Steak-a-la-Criolla.jpg',
    menu1: 'Bistec, cerdo en piña, pernil hawaiano, pernil en menutec, trucha en mango',
    menu2: 'Arroz Santuario'
  },{
    id: 2,
    nombre: 'martes',
    img: 'https://comedera.com/wp-content/uploads/sites/9/2024/04/espaguetis-con-albondigas-gratinado.jpg?w=4096',
    menu1: 'Albóndigas napolitanas, cerdo ciruela, pernil en champiñón, trucha al ajillo',
    menu2: 'Arroz Cantonés'
  },{
    id: 3,
    nombre: 'miercoles',
    img: 'https://www.recetasnestle.com.co/sites/default/files/srh_recipes/f78cf6630b31638994b09b3b470b085c.jpg',
    menu1: 'Goulash, Bondiola, Pechuga en espinaca, Bagre',
    menu2: 'Ajiaco santafereño, arroz paisa'
  },{
    id: 4,
    nombre: 'jueves',
    img: 'https://i.blogs.es/bb0cca/bandeja_paisa/1200_900.jpg',
    menu1: 'Hígado encebollado, sobrebarriga sudada, pernil finas hierbas, trucha en limón',
    menu2: 'Bandeja paisa'
  },{
    id: 5,
    nombre: 'viernes',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_YnQ7FjuWduWV4JKPz4pahSu36ffukmuKamQ9u34xzzNr3iXLblgWN2fi&s=10',
    menu1: 'Carne en Stroganoff, cerdo en vegetales orientales, pernil sudada, pernil miel mostaza, róbalo apanado, trucha marinera',
    menu2: 'Arroz con pollo'
  },{
    id: 6,
    nombre: 'sábado',
    img: 'https://caldoparao.com/wp-content/uploads/2020/06/MG_1162.frijolada-jpg.jpg',
    menu1: 'Bistec a caballo, cerdo en chimichurri, lengua en salsa, pechuga fricasé, mojarra',
    menu2: 'Ajiaco completo, frijolada'
  },{
    id: 7,
    nombre: 'domingo',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX-PSvxh6ietqRe4jSzZHcp4PT9EEALvjHafNzbURIlvykhNl89dsiZUY&s=10',
    menu1: 'Osobuco guisado, sobrebarriga sudada, pechuga con champiñón, mojarra frita',
    menu2: 'Ajiaco, frijolada y sancocho de espinazo'
  }]
  return (
    <div className='d-flex justify-content-center'>
      <Carousel data-bs-theme="dark" >
        {almuerzosDia.map((almuerzo)=>(
            <Carousel.Item >
        <img className='imgCarrusel'
          src={almuerzo.img}
          alt="First slide"
         
        />
        <Carousel.Caption>
          <h5 className='dia'>{almuerzo.nombre}</h5>
          <p className='menu'>{almuerzo.menu1}</p>
          <p className='menu'>{almuerzo.menu2}</p>
          <Button className='primary' onClick={irAlmuerzoDetalle(almuerzo.id)}>Ver más detalle</Button>
        </Carousel.Caption>
      </Carousel.Item>
        ))}
    </Carousel>
    </div>
  )
}

export default Carrusel
