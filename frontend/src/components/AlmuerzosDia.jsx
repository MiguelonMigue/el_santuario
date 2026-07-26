import Header from "./Header"
import Footer from "./Footer"
import Carrusel from "./Carrusel"
import Card from "./Tarjeta"

const AlmuerzosDia = () => {
  
  const platos = [{
    id: 1,
    dia: 'lunes',
    entradas: 'Cazuela de lentejas, crema de tomate, sopa de arroz',
    opcional: ' ó fruta',
    carnes: 'Carne en bistec, Cerdo en piña, pierna pernil hawaiano, pierna pernil en salsa Menutec',
    pescados: 'Trucha en salsa de mango',
    arrozEspecial : 'Arroz santuario',
    harinaPrincipal: 'Arroz blanco',
    ensalada: 'Espinaca, piña',
    acompanamientos: 'Torta de vainilla, tajadas de plátano, papa salada'
  }, 
{
  id: 2,
  dia: 'martes',
  entradas: 'Sopa de avena, Crema de verduras, Sopa de menudencias',
  opcional: ' ó fruta',
  carnes: 'Albóndigas en salsa napolitana, chuleta de cerdo en salsa de ciruela, pierna pernil en salsa de champiñón',
  pescados: 'trucha al ajillo',
  arrozEspecial: 'Arroz cantonés',
  harinaPrincipal: 'Pasta de cuatro quesos, pasta napolitana, arroz blanco',
  ensalada: 'Ensalada de lechuga, zanahoria y espinaca ó acelga guisada',
  acompanamientos: 'Torta de naranja, papa con hogao, moneditas de plátano'
},
{
  id: 3,
  dia: 'miércoles',
  entradas: 'Sopa de pasta, crema de zanahoria',
  opcional: 'ó fruta',
  carnes: 'Carne goulash, Bondiola de cerdo, pechuga en salsa de espinca y queso',
  pescados: 'Bagre apanado',
  arrozEspecial: 'Arroz paisa, plato completo de ajiaco santafereño (con pechuga, arroz, patacón y aguacate), ',
  harinaPrincipal: 'Arroz blanco',
  ensalada: 'Espinaca con melón',
  acompanamientos: 'Torta de ahuyama, puré de papa, poteca de ahuyama'
},
{
  id: 4,
  dia: 'jueves',
  entradas: 'Cazuela de fríjol, Crema de espinaca, sopa de cebada perlada',
  opcional:' ó fruta',
  carnes: 'Sobrebarriga en salsa sudada, hígado encebollado, pierna pernil en salsa de finas hierbas',
  pescados: 'Trucha en salsa de limón',
  arrozEspecial: 'Bandeja paisa con cazuela de fríjol, carne molida, arepa, chicharrón, cerdo, arroz, arepa y aguacate',
  harinaPrincipal: 'Arroz blanco',
  ensalada: 'Ensalada roja',
  acompanamientos: 'Torta de banano, plátano al horno, papa con mayonesa y perejil'
},
{
  id: 5,
  dia: 'viernes',
  entradas: 'Sopa de arroz, crema de ahuyama, sancocho de pescado',
  opcional: ' ó fruta',
  carnes: 'Carne en stroganoff, cerdo en vegetales orientales, pierna pernil sudada, pierna pernil en miel mostaza',
  pescados: 'Trucha en salsa marinera, filete de róbalo apanado',
  arrozEspecial: 'Arroz con pollo',
  harinaPrincipal: 'Arroz blanco',
  ensalada: 'Lechuga, zanahoria y tomate',
  acompanamientos: 'Torta de canela, papa sudada, tajadas de plátano maduro'
},
{
  id: 6,
  dia: 'sábado',
  entradas: 'Sopa de ajiaco, sopa de patacón',
  opcionales: ' ó fruta',
  carnes: 'Bistec a caballo, pechuga en fricasse',
  pescados: 'Trucha en salsa de maracuyá',
  arrozEspecial: 'Frijolada con arroz, cerdo, patacón  y aguacate',
  harinaPrincipal: 'Arroz blanco',
  ensalada: 'Lechuga, cebolla y tomate',
  acompanamientos: 'Puré de papa ó patacón'
},
{
  id: 7,
  dia: 'domingo',
  entradas: 'Sopa de ajiaco, sopa de cuchuco de trigo',
  opcional: 'ó fruta',
  carnes: 'Res en chimichurri, sobrebarriga sudada, osobuco de cerdo, pechuga en salsa de champiñón',
  pescados: 'Trucha en salsa de maracuyá',
  arrozEspecial: 'Ajiaco completo con pechuga desmenuzada, arroz, patacón y aguacate ó Sancocho de espinazo con arroz, puré o patacón y aguacate',
  harinaPrincipal: 'Arroz blanco',
  ensalada: 'Cebolla, tomate y lechuga',
  acompanamientos: 'Puré o patacón'
}]
  return (
    <div>
        <Header/>
        <h1 className="titulo_principal">Le ofrezco del día!!</h1>
        <Card/>
        
        {platos.map((plato)=>(
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
        ))}
        <Carrusel/>
        
      <Footer/>
    </div>
  )
}

export default AlmuerzosDia
