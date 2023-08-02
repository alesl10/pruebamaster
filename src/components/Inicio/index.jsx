import './index.css'


const Inicio = () => {
    return (
        <section class="inicio">

            <div className='contenedorinicio'>
                <img src="./images/logofinal.png" alt="" className='logoinicio' />
                <h4 class="inicio-text">Desde nuestros origenes tuvimos como objetivo ser lideres y referentes en materia de calidad
                    y servicio para todo el mercado</h4>
            </div>
            <button className='boton'>Ver mas</button>

            <button class="inicio-button">Descargar lista de productos</button>
        </section>
    )
}

export default Inicio