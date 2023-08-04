import './index.css'


const Inicio = () => {
    return (
        <section class="inicio">
                    <h2 class="inicio-title">Los mejores artículos, <br />un solo lugar</h2>

            <div className='contenedorinicio'>
                <img src="./images/logofinal.png" alt="logo Master Bakery" className='logoinicio' />
                <h4 class="inicio-text">Desde nuestros origenes tuvimos como objetivo ser lideres y referentes en materia de calidad
                    y servicio para todo el mercado</h4>
            </div>
            <button className='inicio-button'><a href="/products">Ver más</a></button>

            <button class="inicio-button" ><a href="PRODUCTOS.pdf" download='Productos.pdf'>Descargar lista de productos</a></button>
        </section>
    )
}

export default Inicio