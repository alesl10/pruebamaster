import './index.css'


const Inicio = () => {
    return (
        <section class="inicio">
                    <h3 class="inicio-title">Los mejores articulos, <br />un solo lugar</h3>

            <div className='contenedorinicio'>
                <img src="./images/logofinal.png" alt="" className='logoinicio' />
                <h4 class="inicio-text">Desde nuestros origenes tuvimos como objetivo ser lideres y referentes en materia de calidad
                    y servicio para todo el mercado</h4>
            </div>
            <button className='inicio-button'>Ver mas</button>

            <button class="inicio-button" ><a href="PRODUCTOS.pdf" download='Productos.pdf'>Descargar lista de productos</a></button>
        </section>
    )
}

export default Inicio