import products from '../mocks/products.jsx'
import { useState } from 'react'
import Filter from '../components/buttonProducts/index.jsx'
import AllProducts from '../components/allProducts/index.jsx'
import NavBarProducts from '../components/NavBarProducts/index.jsx'
import Footer from '../components/footer/index.jsx'



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
            <div >
                <NavBarProducts />
                <Filter categories={categories} filterCategoriy={filterCategoriy} />
                <AllProducts productos={productos} />
            </div>
        </>
    )
}

export default Products