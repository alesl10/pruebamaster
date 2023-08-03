import Header from '../components/header'
import Inicio from '../components/Inicio'
import Carousel from '../components/carousel'
import Productos from '../components/productos'
import QuienesSomos from '../components/quienessomos'
import Servicios from '../components/servicios'
import Footer from '../components/footer'
import Contacto from '../components/contacto'

function Home() {

  return (
    <>
      <div className="fondo"
        style={{ backgroundImage: "url(./images/premezcla-para-celiacos.webp)" }}>
        <div className="fondo-opacity">
        </div>
      </div>
      <Header />
      <Carousel />
      <Productos />
      <Inicio />
      <QuienesSomos />
      <Servicios />
      <Contacto />
      <Footer />
    </>
  )
}

export default Home;
