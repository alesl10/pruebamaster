
function AllProducts({ productos }) {

    return (
        <div >
            <ul>
                {productos.map(product => (
                    <li  key={product.index}>
                        <p >{product.nombre}</p> 
                        <p >{product.cantidad}    {product.medida}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllProducts