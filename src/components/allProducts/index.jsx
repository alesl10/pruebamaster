import './style.css'

function AllProducts({ productos }) {

    return (
        <div className='repositorio-products'>
            <ul>
                {productos.map(product => (
                    <li className="card-products"  key={product.index}>
                        <p >{product.nombre}</p>
                        <p >    {product.cantidad}    {product.medida}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllProducts