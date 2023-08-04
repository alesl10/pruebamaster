import { Link } from "react-router-dom"
import './style.css'




function Filter({ categories, filterCategoriy }) {

    const Abrir = (onClick) => {
        const cerrar = document.querySelector('#cerrar')
        const nav = document.querySelector('#nav')

        nav.classList.remove('hidden')
        cerrar.classList.remove('hidden')
    }

    const Cerrar = (onClick) => {
        const cerrar = document.querySelector('#cerrar')
        const nav = document.querySelector('#nav')

        nav.classList.add('hidden')
        cerrar.classList.add('hidden')
    }
    console.log(categories)


    return (
        <>

<div className="nav-products">
                        {categories.map(category => (
                            <a key={category} onClick={() => filterCategoriy(category)}>{category}</a>
                        ))}
                    </div>
            {/* <nav className=" relative select-none bg-orange-300/80 lg:flex lg:items-stretch w-full">
                <div className="flex flex-no-shrink items-stretch h-12">
                    <Link to={'/'} className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Inicio</Link>
                    <button className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
                        <svg onClick={() => Abrir()} className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        <svg id="cerrar" onClick={() => Cerrar()} className="hidden fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>
                    </button>
                </div>
                <div id="nav" class="hidden lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
                    <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
                        {categories.map(category => (
                            <a key={category} onClick={() => filterCategoriy(category)} className=" cursor-pointer flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">{category}</a>
                        ))}
                    </div>
                </div>
            </nav> */}

        </>
    )
}

export default Filter