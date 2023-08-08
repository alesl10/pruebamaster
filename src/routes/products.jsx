import products from '../mocks/products.jsx'
import { useState } from 'react'
import Filter from '../components/buttonProducts/index.jsx'
import AllProducts from '../components/allProducts/index.jsx'
import NavBarProducts from '../components/NavBarProducts/index.jsx'



function Products() {

    const allCategories = ['Todos', ...new Set(products.map(product => product.categoria))]

    const [categories, setCategories] = useState(allCategories);
    const [productos, setProductos] = useState(products);


    const filterCategoriy = (category) => {
        if (category == 'Todos') {
            setProductos(products)
            return
        }

        const filteredProducts = products.filter(product => product.categoria == category)
        setProductos(filteredProducts)
    }

    return (
        < >
        <div className="fondo"
        style={{ backgroundImage: "url(./images/dest4.jpg)" }}>
        <div className="fondo-opacity-productos">
        </div>
      </div>
            <div >
                <NavBarProducts />
                {/* <Filter categories={categories} filterCategoriy={filterCategoriy} /> */}
                <AllProducts productos={productos} filterCategoriy={filterCategoriy}  />
            </div>
        </>
    )
}

export default Products