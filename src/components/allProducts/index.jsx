import './style.css'

function AllProducts({ productos, filterCategoriy }) {

    return (

        <>
            <nav className='navbar-products'>
                <img src="../../../public/images/logofinal.png" alt="" className='logo-products' />
            </nav>

            <div className='repositorio-products'>
                <ul >
                    <li className='subcategorias' onClick={() => filterCategoriy('premezclas')}>
                        <img src="../../../public/images/1.jpg" alt="" className='imagen-categoria' />
                        <span className='titulo-categoria'>PREMEZCLAS</span>
                    </li>
                    <li className='subcategorias' onClick={() => filterCategoriy('premezclas pack')}>
                        <img src="../../../public/images/2.jpg" alt="" className='imagen-categoria' />
                        <span className='titulo-categoria'>DULCES Y JALEAS</span>
                    </li>
                    <li className='subcategorias' onClick={() => filterCategoriy('azucares')}>
                        <img src="../../../public/images/3.jpg" alt="" className='imagen-categoria' />
                        <span className='titulo-categoria'>AZUCAR</span>
                    </li>
                    <li className='subcategorias' onClick={() => filterCategoriy('otros')}>
                        <img src="../../../public/images/4.jpg" alt="" className='imagen-categoria' />
                        <span className='titulo-categoria'>PRODUCTOS VARIOS</span>
                    </li>
                </ul>

                <ul className='repo-products'>
                    {productos.map(product => (
                        <li className="card-products" key={product.index}>
                            <p >{product.nombre} </p>
                            <p >    {product.cantidad}    {product.medida}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default AllProducts