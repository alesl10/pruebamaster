import Header from '../src/components/header'
import Inicio from './components/Inicio'
import Carousel from './components/carousel'
import products from './mocks/products'
import Productos from './components/productos'
import QuienesSomos from './components/quienessomos'
import Servicios from './components/servicios'
import Footer from './components/footer'
import Contacto from './components/contacto'


function App() {

  return (
    <>
      <div className="fondo"
        style={{ backgroundImage: "url(./images/premezcla-para-celiacos.webp)" }}>
        <div className="fondo-opacity">
        </div>
      </div>
      <Header />
      <Carousel />
      <Productos products={products}/>
      <Inicio />
      <QuienesSomos/>
      <Servicios/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default App
