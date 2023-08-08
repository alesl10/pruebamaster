import { Link } from "react-router-dom"
import './style.css'




function Filter({ categories, filterCategoriy }) {

    const Abrir = () => {
        console.log('funcionando')
        const cerrar = document.querySelector('#cerrar')
        const nav = document.querySelector('#nav')

        nav.classList.remove('lista-categoria')
        nav.classList.add('lista-categoria-open')
        cerrar.classList.remove('esconder')
    }

    const Cerrar = () => {
        const cerrar = document.querySelector('#cerrar')
        const nav = document.querySelector('#nav')

        nav.classList.remove('lista-categoria-open')
        nav.classList.add('lista-categoria')
        cerrar.classList.add('esconder')
    }
    console.log(categories)

    return (
        <>
            <div className="contenedor-logo">
                <img src="../../../public/images/logofinal.png" alt="Logo" className="logo-categoria" />
            </div>
            <nav className="contenedor-categorias">
                <div >
                    <div className="categoria" >
                        <img src="../../../public/images/3.jpg" alt="" className="imagen-categoria" />
                        <span className="titulo-categoria">PREMEZCLAS</span>
                    </div>
                    <div className="categoria" >
                        <img src="../../../public/images/4.jpg" alt="" className="imagen-categoria" />
                        <span className="titulo-categoria">DULCES Y JALEAS</span>
                    </div>
                </div>
                <div>
                    <div className="categoria" >
                        <img src="../../../public/images/4.jpg" alt="" className="imagen-categoria" />
                        <span className="titulo-categoria">AZUCAR</span>
                    </div>
                    <div className="categoria" >
                        <img src="../../../public/images/1.jpg" alt="" className="imagen-categoria" />
                        <span className="titulo-categoria">PRODUCTOS VARIOS</span>
                    </div>
                </div>
            </nav>

            {/* <div className="nav-products">
                <Link to={'/'}><img src="./images/logofinal.png" alt="Logo MasterBakery" className="logo-productos" /></Link>
                <div id="nav" className="lista-categoria">{categories.map(category => (
                    <a  className="categoria" key={category} onClick={() => filterCategoriy(category)}>{category.toUpperCase()}  -  </a>
                ))}</div>
                <svg onClick={() => Abrir()} className=" boton-abrir" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                <svg id="cerrar" onClick={() => Cerrar()} className="boton-cerrar esconder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>
            </div> */}

        </>
    )
}

export default Filter