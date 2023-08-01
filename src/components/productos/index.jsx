// import { Link } from 'react-router-dom';
import './index.css';

function Productos({ products }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const destacados = products.filter(p => p.descatado == true)
    console.log(destacados)

    return (
        <>
            <section id="productos" >
                <div className="">
                    <h3 className="titulo-productos "> Nuestros productos destacados</h3>

                    <div class="contenedor-carousel">

                        {destacados.map(p => (

                            <div class="card-item">
                                <img src={p.image4} class=" image-destacados " alt="..." />
                                <p className='texto-destacados'>{p.nombre}</p>
                            </div>

                        ))}

                    </div>
                </div>
                <div className='allProducts'>
                    <h3 className='titulo-productos'>Todos los productos</h3>
                    <button className='products-button'>Ver mas</button>
                </div>


            </section >

        </>
    )
}

export default Productos
