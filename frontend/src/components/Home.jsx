import restaurant from "../assets/restaurant.jpeg";
import Header from "./Header";
import Footer from "./Footer";
import Carrusel from "./Carrusel";

const Home = () => {
  const title = "El Santuario Bistró";
  const mensaje =
    "Un lugar perfecto para venir a almorzar con tu familia, pareja y amigos!!!!";

  return (
    <div>
      <Header />
      <h1 className="titulo_principal">{title}</h1>
      <p>{mensaje}</p>
      <div className="imagen_restaurante">
        <img src={restaurant} width="400" height="500" alt="" />
        <Carrusel/>
      </div>
      <div className="maps">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.259204004236!2d-74.04204187192012!3d4.724978466900033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85ebd78bfb71%3A0x8bbc45cedf43cdd!2sEl%20Santuario!5e0!3m2!1sen!2sco!4v1777338989425!5m2!1sen!2sco"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Mapa de ubicación"
></iframe>
      </div>
      <Footer/>
      
    </div>
  );
};

export default Home;
