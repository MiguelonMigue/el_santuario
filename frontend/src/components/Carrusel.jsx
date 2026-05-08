import Carousel from 'react-bootstrap/Carousel';
import Bistec from "../assets/Bistec_caballo.jpeg"
import Salmon from "../assets/salmon_maracuya.jpeg"
import Ajiaco from "../assets/ajiaco.png"
const Carrusel = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Bistec}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Bistec a Caballo</h5>
          <p>Con patacón o pure, arroz y ensalada</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Salmon}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Salmón en maracuyá</h5>
          <p>Con puré o patacón, arroz y ensalada</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Ajiaco}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Plato completo de ajiaco santafereño</h5>
          <p>
            Sopa de ajiaco, pechuga desmenuzada, patacón, arroz, aguacate, alcaparras y crema de leche
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carrusel
